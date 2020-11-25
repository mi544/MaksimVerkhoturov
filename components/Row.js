import styled, { css } from "styled-components";

const Row = styled.div`
  margin: ${p => (p.margin ? p.margin : "auto")};
  display: flex;
  align-items: ${p => (p.center ? "center" : "auto")};
  ${p =>
    p.center
      ? css`
          justify-content: center;
        `
      : ""}
`;

export { Row };
