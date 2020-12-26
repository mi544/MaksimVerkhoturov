import styled from 'styled-components'

// accepts only 4 h tags for now
const GlitchingTitle = styled.div`
  padding: ${(p) => (p.padding ? p.padding : 0)};

  & > * {
    position: relative;
  }

  & > *:first-child {
    line-height: ${(p) => (p.height1 ? p.height1 : '50px')};
    opacity: 0.2;
  }

  & > *:nth-child(2) {
    line-height: ${(p) => (p.height1 ? p.height2 : '10px')};
    opacity: 0.8;
    color: ${(p) => p.theme.accentColor};
  }

  & > *:nth-child(3) {
    line-height: ${(p) => (p.height1 ? p.height2 : '40px')};
    z-index: 20;
  }

  & > *:nth-child(4) {
    line-height: ${(p) => (p.height1 ? p.height4 : '25px')};
    opacity: 0.2;
    color: ${(p) => p.theme.accentColor};
  }
`

export { GlitchingTitle }
