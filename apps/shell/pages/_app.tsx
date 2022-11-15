import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import NavigationHeader from '../components/NavigationHeader';
// import theme from '../styles/theme';
// import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    // <CacheProvider value={emotionCache}>
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <NavigationHeader />
      <Component {...pageProps} />
    </>
  );
}
