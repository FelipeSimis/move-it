import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto 30px;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--title);

    margin-bottom: 2.5rem;
  }

  section {
    flex: 1;

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        font-size: 0.875rem;
        font-weight: 600;
        text-align: left;
        text-transform: uppercase;

        padding-bottom: 1.5rem;
      }
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

export const UserPositionRow = styled.tr`
  &:not(:first-child) {
    border-top: 8px solid var(--background);
  }

  td {
    background: var(--white);

    &:nth-child(1),
    &:nth-child(2) {
      padding: 1rem 1.5rem;
    }

    > p {
      font-size: 1rem;
      font-weight: 500;

      span {
        font-size: inherit;
        font-weight: inherit;
        color: var(--blue);
      }
    }

    &.position {
      width: 7%;

      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      color: var(--text);

      border-right: 4px solid transparent;
    }

    &.user {
      display: flex;
      align-items: center;

      flex: 1;

      > div {
        flex-shrink: 0;
      }

      img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
      }

      > div {
        margin-left: 1.5rem;

        strong {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--title);
        }

        p {
          display: flex;
          align-items: center;

          font-size: 1rem;
          margin-top: 0.5rem;

          > svg {
            margin-right: 0.5rem;
            flex-shrink: 0;
          }
        }
      }
    }
  }
`;
