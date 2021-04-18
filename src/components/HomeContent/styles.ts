import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto 30px;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media (max-width: 880px) {
      gap: 4rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 556px) {
    margin: 0 auto 0 80px;
  }

  @media (min-width: 1400px) {
    max-width: 1092px;
    margin: 0 auto;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  @media (max-width: 768px) {
    max-width: 500px;
  }
`;
