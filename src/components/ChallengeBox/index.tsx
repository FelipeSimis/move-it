import { useChallenges } from '../../hooks/ChallengesContext';
import { useCountdown } from '../../hooks/CountdownContext';

import LevelUpIcon from '../../assets/icons/level-up.svg';
import BodyIcon from '../../assets/icons/body.svg';
import EyeIcon from '../../assets/icons/eye.svg';

import { Container, Challenge } from './styles';

const icons = {
  body: <BodyIcon />,
  eye: <EyeIcon />,
};

export const ChallengeBox = (): JSX.Element => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();

  const { resetCountdown } = useCountdown();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <Challenge>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            {icons[activeChallenge.type]}

            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={handleChallengeFailed}
              arial-label="Failed"
            >
              Falhei
            </button>

            <button
              type="button"
              onClick={handleChallengeSucceeded}
              arial-label="Done"
            >
              Completei
            </button>
          </footer>
        </Challenge>
      ) : (
        <div className="unfinished-challenge">
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <LevelUpIcon />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </Container>
  );
};
