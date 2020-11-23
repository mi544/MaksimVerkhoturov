import styled from "styled-components";

const BorderlessCard = styled.section`
  display: flex;
  align-items: center;
  margin: ${p => (p.margin ? p.margin : "0")};
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
    }
  }
`;

export { BorderlessCard };
