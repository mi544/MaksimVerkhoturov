import styled, { css } from "styled-components";

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
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > *:last-child {
    width: 100%;
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
    order: -1;
    text-align: center;
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
    }
    & > *:last-child {
      width: 50%;
      clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
      order: ${p => (p.reversed ? "-1" : "1")};
    }
  }
`;

export { BorderlessCard };
