import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { keyframes, css } from "styled-components";

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

const NavBarWrapper = styled.ul`
  text-align: right;
  padding-right: 25px;
  list-style: none;

  @media (min-width: 915px) {
    display: flex;
    flex-direction: row;
  }
`;

const NavBarItem = styled.li`
  margin: 8px 0;

  @media (min-width: 915px) {
    margin: auto 5px;
    background-color: ${p => p.theme.secondaryColor};
    box-shadow: ${p =>
      p.active ? `inset -4px -6px ${p.theme.backgroundColor}` : "none"};
    border-radius: 6px;
    padding: 10px 15px;
    border: 1px solid white;
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 23%, 85% 0);
    transition: 0.2s;
    user-select: none;
    &:hover {
      transform: scale(1.05, 1.05);
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.8em;

  @media (min-width: 915px) {
    color: black;
    /* text-shadow: 2px 1.5px 0px black, 2px 1px 0px black; */
    font-size: 1.5em;
    font-weight: 500;
    &:link {
      text-decoration: none;
    }
  }
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

  @media (min-width: 915px) {
    display: none;
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

const NavBar = styled.div`
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
      ? ""
      : css`
    ${
      p.show
        ? css`
            animation: ${mobileMenuAppear} 1s cubic-bezier(0, 1.09, 0.25, 1) forwards;
          `
        : css`
            animation: ${mobileMenuDisappear} 0.3s cubic-bezier(0, 1.09, 0.25, 1) forwards;
          `
    };}
        `}

  pointer-events: ${p => (p.show ? "auto" : "none")};

  @media (min-width: 915px) {
    display: flex;
    justify-content: space-around;
    position: relative;

    opacity: 1;
    flex-direction: column;
    align-items: flex-end;
    /* border: 1px ${p => p.theme.backgroundColor}; */
    width: auto;
    height: auto;
    background: none;
    clip-path: none;
    animation: none;
    pointer-events: auto;
  }
`;

const Header = () => {
  const router = useRouter();
  const [menuShown, setMenuShown] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(true);
  return (
    <HeaderWrapper>
      <HeaderTitle>Maksim Verkhoturov</HeaderTitle>

      <NavBar show={menuShown} first={firstLoaded}>
        <NavBarWrapper>
          <NavBarItem>
            <Link href="/" passHref>
              <NavLink>Home</NavLink>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href="/about">
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
      <MenuButton
        onClick={() => {
          setMenuShown(s => !s);
          setFirstLoaded(false);
        }}
      >
        <div></div>
        <div></div>
      </MenuButton>
    </HeaderWrapper>
  );
};

export { Header };
