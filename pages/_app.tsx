// import App from 'next/app';
import type { AppProps /* AppContext */ } from 'next/app';
import { Provider } from 'react-redux';
import store from '../modules/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faTimes,
  faBus,
  faSubway,
  faBaby,
  faCat,
  faTrain,
  faParking,
  faRoute,
  faShare,
  faUndo,
  faAngleRight,
  faAngleLeft,
  faCircle,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from '@styles/themeProvider';
library.add(
  faTimes,
  faBus,
  faSubway,
  faBaby,
  faCat,
  faTrain,
  faParking,
  faRoute,
  faShare,
  faUndo,
  faAngleRight,
  faAngleLeft,
  faCircle,
  faGoogle,
  faComment,
  faTwitter
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
