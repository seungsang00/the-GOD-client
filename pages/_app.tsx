// import App from 'next/app';
import type { AppProps /* AppContext */ } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles/index';
import { library } from '@fortawesome/fontawesome-svg-core';
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
} from '@fortawesome/free-solid-svg-icons';
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
  faCircle
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
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
