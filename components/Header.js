import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background: #8affff;
  border-bottom: 2px solid cyan;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavBarWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const NavBarItem = styled.li`
  margin: auto 5px;
  background-color: #808080;
  border-radius: 6px;
  padding: 10px 15px;
  border: 1px dashed white;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 23%, 85% 0);
`;

const NavLink = styled.a`
  color: #e8e8e8;
  text-shadow: 2px 1.5px 0px black, 2px 1px 0px black;
  font-size: 1.5em;
  font-weight: 500;
  &:link {
    text-decoration: none;
  }
  /* &:visited {
  }
  &:hover {
  }
  &:active {
  } */
`;

const HeaderTitle = styled.span`
  margin: auto auto auto 0;
  font-size: 2em;
  font-weight: 700;
  font-variant: small-caps;
  color: #e8e8e8;
  text-shadow: 3px 1.5px 0px black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Maksim Verkhoturov</HeaderTitle>
      <NavBar>
        <NavBarWrapper>
          <NavBarItem>
            <Link href="/" passHref>
              <NavLink>Home</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/about" passHref>
              <NavLink>About</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/projects" passHref>
              <NavLink>Projects</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/resources" passHref>
              <NavLink>Resources</NavLink>
            </Link>
          </NavBarItem>
        </NavBarWrapper>
      </NavBar>
    </HeaderWrapper>
  );
};

export { Header };
