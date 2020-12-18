import styled, { css } from "styled-components";
import { appear } from "components/animations";

const Line = styled.div`
  height: 5px;
  width: 50%;
  border-radius: 3px;
  background: ${p => p.theme.textColor};
  margin: 2.5rem auto;

  ${p =>
    p.appearDuration
      ? css`
          animation: ${appear} ${p.appearDuration}s forwards;
        `
      : ""}

  @media (min-width: 870px) {
    width: 40%;
  }
  @media (min-width: 1215px) {
    width: 30%;
  }
`;

export { Line };
