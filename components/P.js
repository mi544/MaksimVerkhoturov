import styled, { css } from "styled-components";

const P = styled.p`
  margin: ${p => (p.margin ? p.margin : "1rem")};
  ${p =>
    p.marginTop
      ? css`
          margin-top: ${p.marginTop};
        `
      : ""}
  ${p =>
    p.marginBottom
      ? css`
          margin-bottom: ${p.marginBottom};
        `
      : ""}
`;

export { P };
