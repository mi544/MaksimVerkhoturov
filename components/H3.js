import styled from "styled-components";

const H3 = styled.h3`
  font-size: 1.5em;
  line-height: ${p => (p.line ? p.line : "normal")};

  @media (min-width: 870px) {
    font-size: 1.7em;
  }
  @media (min-width: 1215px) {
    font-size: 2em;
  }
`;

export { H3 };
