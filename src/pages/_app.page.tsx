import Layout from '@Components/Layout'
import App, { AppContext } from 'next/app';
import MobileDetect from 'mobile-detect';
import ViewDetected, {
  getDeviceType,
} from '@Components/Utilities/ViewDetected';

function MyApp({ Component, pageProps, deviceType }) {
  return (
    <ViewDetected deviceType={deviceType}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ViewDetected>
  );
}

export default MyApp
const getLayoutConfiguration = (appContext: AppContext) => {
  const userDetected = new MobileDetect(
    appContext?.ctx?.req?.headers['user-agent']
  );
  const deviceType = getDeviceType(userDetected);

  let disableFooter = false;
  let disableSearchBar = false;

  const isCart = appContext.ctx.pathname.includes('/gio-hang');
  const isCheckOut = appContext.ctx.pathname.includes('/thanh-toan');
  const isOrder = appContext.ctx.pathname.includes('/ho-so');

  if (
    ['mobile', 'tablet'].includes(deviceType) &&
    (isCheckOut || isCart || isOrder)
  ) {
    disableFooter = true;
    disableSearchBar = true;
  }

  return {
    disableFooter,
    disableSearchBar,
  };
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const userDetected = new MobileDetect(
    appContext?.ctx?.req?.headers['user-agent']
  );
  // const token = getCookieToken(appContext);
  const deviceType = getDeviceType(userDetected);
  const layoutConfiguration = getLayoutConfiguration(appContext);

  return { ...appProps, ...layoutConfiguration, deviceType };
};