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

const isAnimated = (p, appear) => {
  if (p.appearDuration) {
    return css`
      animation: ${appear} ${p.appearDuration}s forwards;
    `;
  } else {
    return `animation: none;`;
  }
};

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${p => p.margin};
  height: ${p => (p.height ? p => p.height : "auto")};
  width: ${p => (p.width ? p => p.width : "auto")};
  flex-direction: column;
  background-color: #ffffff00;
  border: 3px solid white;
  padding: 1% 2%;
  box-shadow: -5px 6px 0px 0 lightgrey;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);

  transform: translateY(25px);
  // only appear once when the page is loaded the first time
  ${p => isAnimated(p, appear)}
`;

export { Card };
