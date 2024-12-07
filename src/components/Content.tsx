import { useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const fallAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const C = {
  Name: styled.h1<{ $theme: Theme }>`
    ${sharedStyles};
    font-size: 6rem;
    margin: 0;
    color: ${({ $theme }) => $theme.primaryTextColor};
    animation: ${fallAnimation} 2s ease-out;
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2<{ $theme: Theme }>`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 4rem 0;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    animation: ${fallAnimation} 2.5s ease-out;
  `,
  Icons: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    animation: ${fallAnimation} 3s ease-out;
  `,
};

export const Content = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Name $theme={theme}>Shubhayan Ghosh</C.Name>
      <C.Title $theme={theme}>Software Engineer</C.Title>
      <C.Icons>
        {/* Replace these with your actual icons */}
        <img src="path/to/icon1.png" alt="Icon 1" />
        <img src="path/to/icon2.png" alt="Icon 2" />
        <img src="path/to/icon3.png" alt="Icon 3" />
      </C.Icons>
    </div>
  );
};
