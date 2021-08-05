import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
