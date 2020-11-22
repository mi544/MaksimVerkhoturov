import styled from "styled-components";

// accepts only 4 h tags for now
const GlitchingTitle = styled.div`
  & > * {
    position: relative;
  }

  & > *:first-child {
    line-height: 50px;
    opacity: 0.2;
  }

  & > *:last-child {
    line-height: 25px;
    opacity: 0.2;
    color: ${p => p.theme.accentColor};
  }

  & > *:nth-child(2) {
    line-height: 10px;
    opacity: 0.8;
    color: ${p => p.theme.accentColor};
  }

  & > *:nth-child(3) {
    line-height: 40px;
    z-index: 20;
  }
`;

export { GlitchingTitle };
