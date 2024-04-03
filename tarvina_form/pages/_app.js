// pages/_app.js
// _app.js veya globals.css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/globals.css';
// pages/_app.js

import Layout from '../components/layout/Layout';
import Navbarin from '../components/layout/navbarin';
import Footerin from '../components/layout/footerin';

function MyApp({ Component, pageProps, router }) {
  // `index.js` sayfası için farklı bir layout kullan
  if (router.pathname === '/') {
    return (
      <>
        <Navbarin />
        <Component {...pageProps} />
        <Footerin />
      </>
    );
  }

  // Diğer tüm sayfalar için standart `Layout` kullan
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
