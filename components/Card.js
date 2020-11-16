import styled from "styled-components";

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${p => p.margin};
  height: ${p => (p.height ? p => p.height : "auto")};
  width: ${p => (p.width ? p => p.width : "auto")};
  flex-direction: column;
  background-color: #ffffff00;
  border: 3px solid white;
  padding: 1% 2%;
  box-shadow: -5px 6px 0px 0 lightgrey;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 94% 0);

  transform: translateY(25px);
  // only appear once when the page is loaded the first time
  animation: ${p => (p.appear ? "appear " + p.appear + "s forwards" : "none")};
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export { Card };
