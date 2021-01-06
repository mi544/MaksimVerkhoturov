import styled from 'styled-components'

const H4 = styled.h4`
  font-size: 1.2em;
  line-height: ${(p) => (p.line ? p.line : 'normal')};

  @media (min-width: 870px) {
    font-size: 1.4em;
  }
  @media (min-width: 1215px) {
    font-size: 1.7em;
  }
`

export { H4 }
