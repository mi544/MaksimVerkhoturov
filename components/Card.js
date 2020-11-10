import styled from "styled-components";

const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 3px dashed black;
  padding: 1% 2%;
  box-shadow: -5px 6px 0px 0 lightgrey;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);
`;

export { Card };
