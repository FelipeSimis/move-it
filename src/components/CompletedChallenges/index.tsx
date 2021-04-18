import { useChallenges } from '../../hooks/ChallengesContext';

import { Container } from './styles';

export const CompletedChallenges = (): JSX.Element => {
  const { user } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>

      <strong>{user.completedChallenges}</strong>
    </Container>
  );
};
