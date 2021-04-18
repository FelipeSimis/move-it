import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Provider } from 'next-auth/client';
import 'nprogress/nprogress.css';

import GlobalStyles from '../styles/GlobalStyles';

const TopProgressBar = dynamic(() => import('../components/TopProgressBar'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <TopProgressBar />

      <Component {...pageProps} />

      <GlobalStyles />
    </Provider>
  );
}

export default MyApp;
