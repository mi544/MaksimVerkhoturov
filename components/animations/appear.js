import { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export { appear }
