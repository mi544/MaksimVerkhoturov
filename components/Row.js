import styled, { css } from "styled-components";

const Row = styled.div`
  margin: ${p => p.margin};
  display: flex;
  align-items: center;
  ${p =>
    p.center
      ? css`
          justify-content: center;
        `
      : ""}
`;

export { Row };
