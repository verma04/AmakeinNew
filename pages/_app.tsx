import type { AppProps /*, AppContext */ } from 'next/app'
import Nav from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js'; 
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/indexPage.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Nav />
  <Component {...pageProps} />
  <Footer />
  </>
  ) 
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp