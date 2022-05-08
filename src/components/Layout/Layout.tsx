import { Fragment } from 'react';

import Navbar from './Navbar';
import { Footer } from './Footer';

const Layout = (props : {children : React.ReactNode}) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
