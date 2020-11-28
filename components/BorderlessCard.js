import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BorderlessCard = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  margin: ${p => (p.margin ? p.margin : "auto")};
  height: ${p => (p.height ? p.height : "auto")};
  width: ${p => (p.width ? p.width : "auto")};
  flex-direction: column;
  background-color: #ffffff00;
  padding: 1% 2%;
  justify-content: space-evenly;

  & > *:first-child {
    width: 100%;
    padding: 0 20px;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${p =>
      p.appearDuration
        ? css`
            transform: translateY(5vh);
            opacity: 0;
            animation: ${appear} ${p.appearDuration}s
              ${p.delayDuration + p.textDelayDuration}s forwards;
          `
        : css`
            animation: none;
          `}
  }
  & > *:last-child {
    width: 100%;
    padding: 0 20px;
    ${p =>
      !p.noClip
        ? css`
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
          `
        : ""}
    order: -1;
    text-align: center;
    ${p =>
      p.appearDuration
        ? css`
            transform: translateY(5vh);
            opacity: 0;
            animation: ${appear} ${p.appearDuration}s ${p.delayDuration}s forwards;
          `
        : css`
            animation: none;
          `}
  }

  @media (min-width: 870px) {
    flex-direction: row;

    & > *:first-child {
      width: 50%;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${p =>
        p.appearDuration
          ? css`
              ${p.reversed
                ? css`
                    transform: translateX(10%);
                  `
                : css`
                    transform: translateX(-10%);
                  `}

              opacity: 0;
              animation: ${appear} ${p.appearDuration}s
                ${p.delayDuration + p.textDelayDuration}s forwards;
            `
          : css`
              animation: none;
            `}
    }
    & > *:last-child {
      width: 50%;
      ${p =>
        !p.noClip
          ? css`
              clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
            `
          : ""}

      order: ${p => (p.reversed ? "-1" : "1")};
      ${p =>
        p.appearDuration
          ? css`
              ${p.reversed
                ? css`
                    transform: translateX(-20%);
                  `
                : css`
                    transform: translateX(20%);
                  `}
              opacity: 0;
              animation: ${appear} ${p.appearDuration}s ${p.delayDuration}s forwards;
            `
          : css`
              animation: none;
            `}
    }
  }
`;

export { BorderlessCard };
