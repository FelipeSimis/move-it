import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  > div {
    padding: 2rem 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  position: relative;

  animation: ${modalAnimation} 1s ease;

  header {
    width: 150px;
    display: flex;
    justify-content: center;

    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);

    background: url('/levelup.svg') no-repeat;
    background-position: center 67%;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    font-weight: 600;
    color: var(--title);
  }

  span {
    margin-top: 0.25rem;

    font-size: 1.25rem;
    color: var(--text);
  }

  button:first-child {
    border: 0;
    background: none;

    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    font-size: 0;
  }
`;
