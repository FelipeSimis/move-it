import { useCountdown } from '../../hooks/CountdownContext';

import CheckCircleIcon from '../../assets/icons/check-circle.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';

import { Wrapper, Container, CountdownButton } from './styles';

export const Countdown = (): JSX.Element => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Wrapper>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <button type="button" disabled aria-label="Disabled button">
          Ciclo encerrado <CheckCircleIcon />
        </button>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              onClick={resetCountdown}
              isActive={isActive}
              aria-label="End cycle"
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton
              type="button"
              onClick={startCountdown}
              isActive={isActive}
              aria-label="Start cycle"
            >
              Iniciar um ciclo
              <ArrowRightIcon />
            </CountdownButton>
          )}
        </>
      )}
    </Wrapper>
  );
};
