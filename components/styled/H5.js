import styled, { css } from 'styled-components'

const H5 = styled.h5`
  font-size: 1em;
  line-height: ${(p) => (p.line ? p.line : 'normal')};
  ${(p) =>
    p.margin
      ? css`
          margin: ${p.margin};
        `
      : ''}
  ${(p) =>
    p.padding
      ? css`
          padding: ${p.padding};
        `
      : ''}
  ${(p) =>
    p.center
      ? css`
          text-align: center;
        `
      : ''}

  @media (min-width: 870px) {
    font-size: 1.2em;
  }
  @media (min-width: 1215px) {
    font-size: 1.5em;
  }
`

export { H5 }
