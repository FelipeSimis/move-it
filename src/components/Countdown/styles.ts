import styled, { css } from 'styled-components';

interface CountdownButtonProps {
  isActive?: boolean;
}

const buttonCSS = css`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  border-radius: 5px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
  outline: 0;
`;

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    max-width: 500px;
  }

  > button:disabled {
    ${buttonCSS}

    background: var(--white);
    font-weight: 600;
    color: var(--text);
    cursor: not-allowed;

    border-bottom: 4px solid var(--green);

    svg {
      margin-left: 12px;
      flex-shrink: 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
      font-size: inherit;
      font-family: Rajdhani;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
    font-family: Rajdhani;
  }
`;

export const CountdownButton = styled.button<CountdownButtonProps>`
  ${buttonCSS}

  background: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--blue)')};
  color: ${({ isActive }) => (isActive ? 'var(--title)' : 'var(--white)')};

  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ isActive }) =>
      isActive ? 'var(--red)' : 'var(--blue-dark)'};
    color: var(--white);
  }

  > svg {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 12px;
  }
`;
