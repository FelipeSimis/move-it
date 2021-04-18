import Image, { ImageLoaderProps } from 'next/image';

import { useChallenges } from '../../hooks/ChallengesContext';

import LevelIcon from '../../assets/icons/level.svg';

import { Container } from './styles';

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const Profile = (): JSX.Element => {
  const { user } = useChallenges();

  return (
    <Container>
      {user && (
        <>
          <Image
            loader={myLoader}
            src={user.image}
            alt="Profile pic"
            width={88}
            height={88}
            objectFit="cover"
            priority
          />

          <div>
            <strong>{user.name}</strong>
            <p>
              <LevelIcon />
              Level {user.level}
            </p>
          </div>
        </>
      )}
    </Container>
  );
};
