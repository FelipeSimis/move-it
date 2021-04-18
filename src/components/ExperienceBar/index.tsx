import { useEffect } from 'react';

import { useChallenges } from '../../hooks/ChallengesContext';

import { Container } from './styles';

export const ExperienceBar = (): JSX.Element => {
  const { experienceToNextLevel, user, levelUp } = useChallenges();

  const percentToNextLevel =
    Math.round(user.currentExperience * 100) / experienceToNextLevel;

  useEffect(() => {
    if (user.currentExperience >= experienceToNextLevel) {
      levelUp();
    }
  }, [user.currentExperience]);

  return (
    <Container>
      <span>0 xp</span>

      <div>
        <div
          style={{
            width: `${
              Number.isNaN(percentToNextLevel) ? 0 : percentToNextLevel
            }%`,
          }}
        />

        <span
          style={{
            left: `${
              Number.isNaN(percentToNextLevel) ? 0 : percentToNextLevel
            }%`,
          }}
        >
          {user.currentExperience} xp
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};
