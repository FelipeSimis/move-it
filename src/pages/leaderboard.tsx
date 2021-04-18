import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image, { ImageLoaderProps } from 'next/image';
import useSWR from 'swr';

import { User } from '.';

import api from '../utils/api';

import { Sidebar } from '../components/Sidebar';

import LevelIcon from '../assets/icons/level.svg';

import { Container, UserPositionRow } from '../styles/pages/leaderboard';

const fetcher = (url: string) => api.get(url).then(res => res.data);

interface LeaderboardProps {
  users: User[];
}

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const useLeaderboard = (users: User[]) => {
  const { data, error } = useSWR(`/user`, fetcher, {
    initialData: users,
  });

  return {
    users: data as User[],
    isLoading: !data && !error,
    error,
  };
};

const Leaderboard = ({ users }: LeaderboardProps): JSX.Element => {
  const { users: data, isLoading } = useLeaderboard(users);

  return (
    <>
      <Head>
        <title>Classificação | Move.it</title>
      </Head>

      <Sidebar />

      <Container>
        <h2>Leaderboard</h2>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <section>
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Usuário</th>
                  <th>Desafios</th>
                  <th>Experiência</th>
                </tr>
              </thead>

              <tbody>
                {data?.map((user, index: number) => (
                  <UserPositionRow key={user._id}>
                    <td className="position">{index + 1}</td>
                    <td className="user">
                      <Image
                        loader={myLoader}
                        src={user.image}
                        alt="Avatar"
                        width={88}
                        height={88}
                        objectFit="cover"
                      />

                      <div>
                        <strong>{user.name}</strong>

                        <p>
                          <LevelIcon />
                          Level {user.level}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p>
                        <span>{user.completedChallenges}</span> completados
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>{user.currentExperience}</span> xp
                      </p>
                    </td>
                  </UserPositionRow>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </Container>
    </>
  );
};

export default Leaderboard;

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await fetcher('/user');

  return { props: { users } };
};
