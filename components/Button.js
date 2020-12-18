import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  margin: 30px auto 15px auto;
  min-width: ${p => (p.width ? p.width : "100px")};
  min-height: ${p => (p.height ? p.height : "50px")};
  background: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.textColor};
  font-weight: 700;
  font-size: 1.2em;
  border: 0.5px solid white;
  box-shadow: 0px 0px 0px 1.5px ${p => p.theme.textColor};

  transition: 1s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 7px 2px ${p => p.theme.textColor};
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <Link href="/about" passHref>
      <StyledButton {...props}>{children}</StyledButton>
    </Link>
  );
};

export { Button };
