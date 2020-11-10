import styled from "styled-components";

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${p => p.margin};
  height: ${p => (p.height ? p => p.height : "auto")};
  width: ${p => (p.width ? p => p.width : "auto")};
  flex-direction: column;
  background-color: #fff;
  border: 3px dashed black;
  padding: 1% 2%;
  box-shadow: -5px 6px 0px 0 lightgrey;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
`;

export { Card };
