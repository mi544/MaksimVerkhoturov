import styled, { keyframes, css } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${p => p.margin};
  min-width: ${p => (p ? p.width[0] : "auto")};
  min-height: ${p => (p ? p.height[0] : "auto")};
  flex-direction: column;
  background-color: #ffffff00;
  border: 3px solid white;
  padding: ${p => (p.padding ? p.padding : "1% 2%")};
  box-shadow: -5px 6px 0px 0 lightgrey;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);

  transform: translateY(25px);
  // only appear once when the page is loaded the first time
  ${p =>
    p.appearDuration
      ? css`
          animation: ${appear} ${p.appearDuration}s forwards;
        `
      : css`
          animation: none;
        `}

  @media (min-width: 870px) {
    min-width: ${p => (p ? p.width[1] : "auto")};
    min-height: ${p => (p ? p.height[1] : "auto")};
  }
  @media (min-width: 1215px) {
    min-width: ${p => (p ? p.width[2] : "auto")};
    min-height: ${p => (p ? p.height[2] : "auto")};
  }
`;

export { Card };
