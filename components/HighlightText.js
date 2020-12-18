import styled, { keyframes, css } from "styled-components";

const colorChange = keyframes`
  0% {
    text-shadow: -4px 2px #272727;
  }
  
  50% {
    text-shadow: -4px 2px #2e3e7b;
  }
  
  100% {
    text-shadow: -4px 2px #272727;
  }
`;

// accepts only 4 h tags for now
const HighlightText = styled.span`
  margin: ${p => (p.margin ? p.margin : "auto")};

  text-shadow: -4px 2px #272727;
  ${p =>
    p.noAnimate
      ? ""
      : css`
          animation: ${colorChange} 10s ${p.delay ? p.delay : ""} infinite
            cubic-bezier(0, 0.38, 1, 0.08);
        `}
`;

export { HighlightText };
