import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SMLCheck from "utils/hooks/SmallMediumLargeCheck";
import styled, { keyframes, css } from "styled-components";
import MediaQueriesContext from "utils/MediaQueriesContext";

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
  background-color: ${p => p.theme.secondaryColor};
  box-shadow: ${p => (p.active ? `inset -4px -6px ${p.theme.backgroundColor}` : "none")};
  border-radius: 6px;
  padding: 10px 15px;
  border: 1px solid white;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 23%, 85% 0);
  transition: 0.2s;
  user-select: none;
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
  color: ${p => p.theme.secondaryTextColor};
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
  background: ${p => p.theme.backgroundColor};
  box-shadow: inset 2px -3px 0px 0px ${p => p.theme.secondaryAccentColor};
  position: fixed;
  border: solid 2px white;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 67px;
  line-height: 12.1px;
  z-index: 20;

  & > div {
    background: white;
    width: 26px;
    height: 5px;
    margin: 6px 6px 0 4px;
  }
`;

const mobileMenuAppear = keyframes`
from {
  transform: translateX(65px);
  opacity: 0.1;
}

to {
  transform: translateX(0px);
  opacity: 1;
}`;

const mobileMenuDisappear = keyframes`
from {
  transform: translateX(0px);
  opacity: 1;
}

to {
  transform: translateX(65px);
  opacity: 0;
}`;

const MobileMenuLink = styled(NavLink)`
  font-size: 1.8em;
`;

const MobileMenu = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  height: 450px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border: 1px ${p => p.theme.backgroundColor};
  background: yellow;
  clip-path: polygon(74% 0, 100% 0, 100% 86%, 44% 68%);

  z-index: 10;

  // if loaded for the first time, no animation is needed
  // TODO change that to be triggered on initial page load (refresh in the browser, not just any component mount)
  ${p =>
    p.first
      ? "none"
      : css`
  animation:  ${p =>
    p.show
      ? css`
          ${mobileMenuAppear} 1s cubic-bezier(0, 1.09, 0.25, 1) forwards
        `
      : css`
          ${mobileMenuDisappear} 0.3s cubic-bezier(0, 1.09, 0.25, 1) forwards
        `};}
        `}

  & > ul {
    /* font-size: 1.6em; */
    /* font-weight: 400; */
    /* color: black; */
    text-align: right;
    padding-right: 25px;
    list-style: none;
  }

  & > ul > li {
    margin: 8px 0;
  }
`;

const Header = () => {
  const router = useRouter();

  const { height, width } = useContext(MediaQueriesContext);
  const [menuShown, setMenuShown] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(true);
  return (
    <HeaderWrapper>
      <HeaderTitle>Maksim Verkhoturov</HeaderTitle>
      {SMLCheck(
        <>
          <MobileMenu show={menuShown} first={firstLoaded}>
            <ul>
              <li>
                <Link href="/" passHref>
                  <MobileMenuLink>Home</MobileMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <MobileMenuLink>About</MobileMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/projects" passHref>
                  <MobileMenuLink>Projects</MobileMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/resources" passHref>
                  <MobileMenuLink>Resources</MobileMenuLink>
                </Link>
              </li>
            </ul>
          </MobileMenu>
          <MenuButton
            onClick={() => {
              setMenuShown(s => !s);
              setFirstLoaded(false);
            }}
          >
            <div></div>
            <div></div>
          </MenuButton>
        </>,
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
      )}
    </HeaderWrapper>
  );
};

export { Header };
