import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background: grey;
  background-image: linear-gradient(to right, grey white);
  border-bottom: 2px solid cyan;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: auto 5%;
`;

const NavBarWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const NavBarItem = styled.li`
  margin: auto 20px;
  font-size: 1.5em;
`;

const HeaderTitle = styled.span`
  margin: auto auto auto 0;
  font-size: 2em;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Maksim Verkhoturov</HeaderTitle>
      <NavBar>
        <NavBarWrapper>
          <NavBarItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/about">
              <a>About</a>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </NavBarItem>
        </NavBarWrapper>
      </NavBar>
    </HeaderWrapper>
  );
};

export { Header };
