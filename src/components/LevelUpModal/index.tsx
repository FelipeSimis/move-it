import { useChallenges } from '../../hooks/ChallengesContext';

import CloseIcon from '../../assets/icons/close.svg';

import { Container, Overlay } from './styles';

const LevelUpModal = (): JSX.Element => {
  const { user, closeLevelUpModal } = useChallenges();

  return (
    <Overlay>
      <Container>
        <button
          type="button"
          onClick={closeLevelUpModal}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div>
          <header>{user.level}</header>

          <strong>Parabéns</strong>
          <span>Você alcançou um novo level.</span>
        </div>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
