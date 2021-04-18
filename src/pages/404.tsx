import Head from 'next/head';

import Logo from '../assets/logo-full.svg';

import { Container } from '../styles/pages/error404';

const Custom404 = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <Container>
        <div>
          <Logo />
        </div>

        <h1>Oops!</h1>
        <span>404 - Page not found</span>
      </Container>
    </>
  );
};

export default Custom404;
