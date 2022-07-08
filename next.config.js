const path = require('path');
module.exports = {
  // env: {
  //   HOST: process.env.HOST,
  //   DOMAIN: process.env.DOMAIN,
  //   CMS_HOST: process.env.CMS_HOST,
  //   DOMAIN_HOST: process.env.DOMAIN_HOST,

  //   GA_INIT: process.env.GA_INIT,
  //   CMS_API: process.env.CMS_API,
  //   USER_API: process.env.USER_API,
  //   UPLOAD_API: process.env.UPLOAD_API,
  //   FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  //   FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
  //   GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  //   FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
  //   FIREBASE_DATABASEURL: process.env.FIREBASE_DATABASEURL,
  //   FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
  //   FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
  //   FIREBASE_MESSAGINGSENDERID: process.env.FIREBASE_MESSAGINGSENDERID,
  //   FIREBASE_APPID: process.env.FIREBASE_APPID,
  //   FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID,
  //   FIREBASE_USEPUBLICVAPIDKEY: process.env.FIREBASE_USEPUBLICVAPIDKEY,

  //   SENTRY_DSN: process.env.SENTRY_DSN,
  // },
  // webpack(appConfig, { isServer }) {
  //   const config = appConfig;
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty',
  //     };
  //   }
  //   config.module.rules.push({
  //     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  //     use: {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 100000,
  //       },
  //     },
  //   });

  //   config.resolve.alias['@Lib'] = path.resolve(__dirname, 'lib');
  //   config.resolve.alias['@Pages'] = path.resolve(__dirname, 'pages');
  //   config.resolve.alias['@Config'] = path.resolve(__dirname, 'config');
  //   config.resolve.alias['@Styles'] = path.resolve(__dirname, 'styles');
  //   config.resolve.alias['@Components'] = path.resolve(__dirname, 'components');
  //   return config;
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: (() => {
    const pageExtensions = ['page.tsx'];

    if (process.env.NODE_ENV === 'development') {
      pageExtensions.push('dev.tsx');
    }

    return pageExtensions;
  })(),
  // async rewrites() {
  //   if (process.env.NODE_ENV === 'development') {
  //     return [
  //       {
  //         source: '/_upload/:path*',
  //         destination: 'https://e-doctor.dev/_upload/:path*',
  //       },
  //     ];
  //   }
  //   return [];
  // },
};
