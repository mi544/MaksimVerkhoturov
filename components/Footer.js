import styled from "styled-components";
import { IconContext } from "react-icons";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  min-height: 150px;
  background-color: ${p => p.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${p => p.theme.primaryColor};
`;

const MarginComponent = styled.div`
  width: 5%;
`;

const FadeBeforeFooter = styled.div`
  height: 12vh;
  background: linear-gradient(to bottom, #000000 85%, #ffffff59 140%);
`;

const Footer = () => {
  // 3 sections (row)
  return (
    <IconContext.Provider value={{ size: "50px", color: "white" }}>
      <FadeBeforeFooter />
      <FooterWrapper>
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/mi544">
          <VscGithubInverted />
        </a>
        <MarginComponent />
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/mi544"
        >
          <FaLinkedin />
        </a>
      </FooterWrapper>
    </IconContext.Provider>
  );
};

export { Footer };
