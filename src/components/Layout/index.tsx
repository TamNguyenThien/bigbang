import { FunctionComponent } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FunctionComponent<LayoutProps> = (props) => {
   return (
     <div>
      123
      <div>{props.children}</div>
     </div>
   );
}
export default Layout