import styled from "styled-components";

const IconRectangleLink = styled.a`
  display: flex;
  align-items: flex-end;
  width: 30%;
  min-width: fit-content;
  padding: 0.5rem;
  padding-left: 0.8rem;
  min-height: fit-content;
  border: white 2px solid;
  border-radius: 17px;

  /* & > *:nth-child(1) {
    padding-right: 10px;
  } */

  & > *:nth-child(2) {
    margin: auto 0 0 auto;
  }
`;

export { IconRectangleLink };
