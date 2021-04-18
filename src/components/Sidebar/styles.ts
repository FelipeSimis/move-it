import styled, { css } from 'styled-components';

interface LinkSidebarProps {
  isActive?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 55px;

  position: fixed;
  bottom: 0;
  z-index: 10;

  display: flex;
  align-items: center;

  background: var(--white);

  flex: 1;

  > svg {
    position: absolute;
    left: 16px;

    display: none;
  }

  > div {
    width: 60%;

    display: flex;
    align-items: center;
  }

  button {
    position: absolute;
    right: 32px;

    font-size: 0;

    width: 32px;
    height: 32px;

    border: 0;
    background: none;

    svg {
      fill: var(--text);
      opacity: 0.5;
    }
  }

  @media (min-width: 556px) {
    width: 80px;
    height: 100%;

    flex-direction: column;
    justify-content: center;

    > svg {
      top: 32px;
      left: 50%;
      transform: translateX(-50%);

      display: unset;
    }

    > div {
      width: 100%;
      flex-direction: column;
    }

    button {
      right: 0;
      left: 50%;
      bottom: 32px;
      transform: translateX(-50%);
    }
  }
`;

export const LinkSidebar = styled.a<LinkSidebarProps>`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    background: transparent;
    position: absolute;
    bottom: 0;
  }

  svg g {
    opacity: 0.5;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: '';
        width: 40px;
        height: 4px;
        background: var(--blue);
        border-radius: 0 5px 5px 0;

        @media (min-width: 556px) {
          width: 4px;
          height: 100%;
          left: 0;
          bottom: unset;
        }
      }

      svg g {
        stroke: var(--blue);
        opacity: 1;
      }
    `}

  + a {
    margin-left: 1rem;
  }

  @media (min-width: 556px) {
    height: 35px;

    &::before {
      width: 4px;
      height: 100%;
      left: 0;
      bottom: unset;
    }

    + a {
      margin-top: 1rem;
      margin-left: unset;
    }
  }
`;
