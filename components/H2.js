import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.2em;
  line-height: ${p => (p.line ? p.line : "auto")};

  @media (min-width: 870px) {
    font-size: 1.5em;
  }
  @media (min-width: 1215px) {
    font-size: 2em;
  }
`;

export { H2 };
