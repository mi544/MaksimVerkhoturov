import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.textColor};
`;

export { Container };
