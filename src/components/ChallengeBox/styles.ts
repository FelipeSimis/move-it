import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 1.5rem 2rem;

  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  border-radius: 5px;

  .unfinished-challenge {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    p {
      max-width: 70%;
      margin-top: 3rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      line-height: 1.4;

      > svg {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const Challenge = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--blue);

    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 20px 0;
    }

    strong {
      margin: 1.5rem 0 1rem;

      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;

      border: 0;
      border-radius: 5px;
      outline: 0;

      font-size: 1rem;
      font-weight: 500;
      color: var(--white);

      transition: filter 0.2s ease;

      &:first-child {
        background: var(--red);
      }

      &:last-child {
        background: var(--green);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
