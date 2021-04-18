import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 7rem;

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;

    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: inherit;
      border-radius: inherit;
      background: var(--green);

      transition: width 0.8s ease-in-out;
    }

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);

      transition: left 0.8s ease-in-out;
    }
  }

  span {
    font-size: 1rem;
  }
`;
