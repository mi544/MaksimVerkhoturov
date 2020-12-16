import styled from "styled-components";

const Line = styled.div`
  height: 5px;
  width: 50%;
  border-radius: 3px;
  background: ${p => p.theme.textColor};
  margin: 2.5rem auto;

  @media (min-width: 870px) {
    width: 40%;
  }
  @media (min-width: 1215px) {
    width: 30%;
  }
`;

export { Line };
