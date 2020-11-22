import styled, { keyframes, css } from "styled-components";
import { Card } from "components";

const columnView = p => {
  if (p.column) {
    return css`
      & > *:first-child {
        width: 100%;
        order: 2;
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      & > *:last-child {
        width: 100%;
        clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
      }
    `;
  } else {
    return css`
      & > *:first-child {
        width: 50%;
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      & > *:last-child {
        width: 50%;
        clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
      }
    `;
  }
};

const BorderlessCard = styled(Card)`
  flex-direction: ${p => (p.column ? "column" : "row")};
  border: none;
  box-shadow: none;
  justify-content: space-evenly;
  clip-path: none;

  ${p => columnView(p)}
`;

export { BorderlessCard };
