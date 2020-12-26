import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2em;
  line-height: ${(p) => (p.line ? p.line : 'normal')};

  @media (min-width: 870px) {
    font-size: 2.5em;
  }
  @media (min-width: 1215px) {
    font-size: 3em;
  }
`

export { H1 }
