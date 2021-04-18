import { CountdownProvider } from '../../hooks/CountdownContext';

import { Sidebar } from '../Sidebar';
import { ExperienceBar } from '../ExperienceBar';
import { Profile } from '../Profile';
import { CompletedChallenges } from '../CompletedChallenges';
import { Countdown } from '../Countdown';
import { ChallengeBox } from '../ChallengeBox';

import { Container, LeftContainer, RightContainer } from './styles';

export const HomeContent = (): JSX.Element => {
  return (
    <>
      <Sidebar />

      <Container>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <LeftContainer>
              <Profile />

              <CompletedChallenges />

              <Countdown />
            </LeftContainer>

            <RightContainer>
              <ChallengeBox />
            </RightContainer>
          </section>
        </CountdownProvider>
      </Container>
    </>
  );
};
