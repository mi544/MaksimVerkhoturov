import styled from 'styled-components'

const IconRectangleLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
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
    /* margin: auto 0 0 auto; */
    margin-bottom: 0.2rem;
    margin-right: 0.1rem;
    align-self: flex-end;
  }
`

export { IconRectangleLink }
