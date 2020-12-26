import styled from 'styled-components'

const IconRectangleLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  min-width: fit-content;
  padding: 1.5%;
  padding-left: 0.8rem;
  min-height: fit-content;
  border: white 2px solid;
  border-radius: 17px;
  box-shadow: 5px 3px ${(p) => p.theme.textColor},
    inset -1px -2px ${(p) => p.theme.textColor};
  /* & > *:nth-child(1) {
    padding-right: 10px;
  } */
  & > *:nth-child(2) {
    margin-bottom: 0.2rem;
    margin-right: 0.1rem;
    align-self: flex-end;
  }

  @media (min-width: 870px) {
    width: 25%;
  }
  @media (min-width: 1215px) {
    width: 30%;
  }
`

export { IconRectangleLink }
