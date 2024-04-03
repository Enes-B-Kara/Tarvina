// components/layout/Layout.js

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
  {children}
</div>
      <Footer />
    </>
  );
};

export default Layout;
