import styled, { css } from "styled-components";

const H2 = styled.h2`
  font-size: 1.7em;
  line-height: ${p => (p.line ? p.line : "normal")};
  ${p =>
    p.margin
      ? css`
          margin: ${p.margin};
        `
      : ""}

  @media (min-width: 870px) {
    font-size: 2em;
  }
  @media (min-width: 1215px) {
    font-size: 2.5em;
  }
`;

export { H2 };
