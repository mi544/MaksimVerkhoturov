import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.5em;
  line-height: ${p => (p.line ? p.line : "normal")};

  @media (min-width: 870px) {
    font-size: 1.5em;
  }
  @media (min-width: 1215px) {
    font-size: 2.5em;
  }
`;

export { H2 };
