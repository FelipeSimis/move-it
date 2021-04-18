import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getSession } from 'next-auth/client';

import api from '../utils/api';

import { ChallengesProvider } from '../hooks/ChallengesContext';

import { HomeContent } from '../components/HomeContent';

export interface User {
  _id: string;
  name: string;
  image: string;
  level: number;
  currentExperience: number;
  completedChallenges: number;
  createdAt: string;
  updatedAt: string;
}

interface HomeProps {
  data: User;
}

export default function Home({ data }: HomeProps): JSX.Element {
  return (
    <ChallengesProvider userData={data}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <HomeContent />
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (ctx.res && !session) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/auth/signin',
      },
    };
  }

  const { image } = session.user;

  const { data: responseData } = await api.post('/user/info', {
    image,
  });

  const data = responseData as User;

  return {
    props: {
      data,
    },
  };
};
