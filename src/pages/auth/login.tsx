import { useEffect } from 'react';
import Head from 'next/head';
import { providers, signIn } from 'next-auth/client';

import Logo from '../../assets/logo-full.svg';
import Github from '../../assets/icons/github.svg';

import { Container } from '../../styles/pages/login';

const Login = ({
  providers: providersList,
}: Record<string, unknown>): JSX.Element => {
  let redirectUrl = `http://localhost:3000`;

  useEffect(() => {
    const url = new URL(window.location.href);

    redirectUrl = String(url.searchParams.get('callbackUrl'));
  });

  return (
    <>
      <Head>
        <title>Move.it | Login</title>
      </Head>

      <Container>
        <div>
          <header>
            <Logo />
          </header>

          <h3>Bem-vindo</h3>

          <div>
            <div>
              <Github />

              <span>Faça login com seu Github para continuar</span>
            </div>

            {Object.values(providersList).map(provider => (
              <button
                type="button"
                key={provider.id}
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: redirectUrl,
                  })
                }
                arial-label="Sign in"
              >
                Sign In with {provider.name}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

Login.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};

export default Login;
