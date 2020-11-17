import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import MediaQueriesContext from "../utils/MediaQueriesContext";

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background: black;
  border-bottom: 2px solid ${p => p.theme.primaryColor};
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
  background-color: ${p => (p.active ? p.theme.secondaryColor : p.theme.secondaryColor)};
  box-shadow: ${p => (p.active ? "inset -4px -6px #000000" : "none")};
  border-radius: 6px;
  padding: 10px 15px;
  border: 1px solid white;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 23%, 85% 0);
  transition: 0.2s;
  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

const NavLink = styled.a`
  color: black;
  /* text-shadow: 2px 1.5px 0px black, 2px 1px 0px black; */
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

  @media (max-width: 451px) {
    width: 80%;
  }
`;

const MenuButton = styled.div`
  flex-direction: column;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 50%, -27% 0);
  border-radius: 15%;
  height: 50px;
  width: 50px;
  background: #000000;
  box-shadow: inset 2px -3px 0px 0px #fff;
  position: fixed;
  border: solid 2px white;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 67px;
  line-height: 12.1px;

  & > div {
    background: white;
    width: 26px;
    height: 5px;
    margin: 6px 6px 0 4px;
  }
`;

const showNavbar = (currentWidth, router) => {
  if (currentWidth < 870) {
    return (
      <MenuButton>
        <div></div>
        <div></div>
      </MenuButton>
    );
  } else {
    return (
      <NavBar>
        <NavBarWrapper>
          <NavBarItem active={router.pathname === "/"}>
            <Link href="/" passHref>
              <NavLink>Home</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem passHref active={router.pathname === "/about"}>
            <Link href="/about">
              <NavLink>About</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem active={router.pathname === "/projects"}>
            <Link href="/projects" passHref>
              <NavLink>Projects</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem active={router.pathname === "/resources"}>
            <Link href="/resources" passHref>
              <NavLink>Resources</NavLink>
            </Link>
          </NavBarItem>
        </NavBarWrapper>
      </NavBar>
    );
  }
};

const Header = () => {
  const router = useRouter();
  const { height, width } = useContext(MediaQueriesContext);
  return (
    <HeaderWrapper>
      <HeaderTitle>Maksim Verkhoturov</HeaderTitle>
      {showNavbar(width, router)}
    </HeaderWrapper>
  );
};

export { Header };
