import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--blue);
  background-image: url('/login-bg.svg');
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2.5rem 8rem 2.5rem 0;

    @media (max-width: 480px) {
      padding: 2.5rem;
      width: 100%;
    }

    header svg {
      margin-bottom: 6rem;
      flex-shrink: 0;

      path:not(:nth-child(2)) {
        fill: var(--white);
      }
    }

    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--white);

      + div {
        display: flex;
        flex-direction: column;

        > div {
          display: flex;
          align-items: center;

          margin: 1.5rem 0 2.5rem;
        }

        svg {
          margin-right: 1.5rem;
          flex-shrink: 0;
        }

        span {
          max-width: 254px;

          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-highlight);
          line-height: 30px;
        }
      }
    }

    button {
      border: 0;
      border-radius: 5px 0 0 5px;

      padding: 23px 30px;

      background: linear-gradient(
        90deg,
        rgba(73, 83, 184, 1) 40%,
        rgba(73, 83, 184, 0.20258525773590685) 100%
      );
      font-size: 1rem;
      color: var(--white);

      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
