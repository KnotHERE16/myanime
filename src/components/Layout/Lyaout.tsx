import { Fragment } from 'react';

import Navbar from './Navbar';

const Layout = (props : {children : React.ReactNode}) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
