import styled, { css } from 'styled-components'

const Align = styled.div`
  text-align: ${(p) => p.align};
  margin: ${(p) => (p.margin ? p.margin : 'auto')};

  @media (min-width: 870px) {
    ${(p) =>
      p.marginM
        ? css`
            margin: ${p.marginM};
          `
        : ''};
  }

  @media (min-width: 1215px) {
    ${(p) =>
      p.marginW
        ? css`
            margin: ${p.marginW};
          `
        : ''};
  }
`

export { Align }
