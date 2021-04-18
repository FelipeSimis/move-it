import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--blue);
  background-image: url('/login-bg.svg');
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
  }

  h1 {
    margin-bottom: 10px;

    font-size: 28px;
    color: var(--white);
  }

  span {
    color: var(--white);
  }
`;
