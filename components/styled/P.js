import styled, { css } from 'styled-components'

const P = styled.p`
  margin: ${(p) => (p.margin ? p.margin : '1rem')};
  ${(p) =>
    p.justify
      ? css`
          text-align: justify;
        `
      : ''}
  ${(p) =>
    p.border
      ? css`
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border: 1px solid white;
          border-radius: 20px;
          overflow: hidden;

          & > * {
            margin: 0.15rem;
          }
        `
      : ''}
  ${(p) =>
    p.marginTop
      ? css`
          margin-top: ${p.marginTop};
        `
      : ''}
  ${(p) =>
    p.marginBottom
      ? css`
          margin-bottom: ${p.marginBottom};
        `
      : ''}
  ${(p) =>
    p.padding
      ? css`
          padding: ${p.padding};
        `
      : ''}
`

export { P }
