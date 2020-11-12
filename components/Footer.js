import styled from "styled-components";
import { IconContext } from "react-icons";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  min-height: 115px;
  background-color: #efdfdfdf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarginComponent = styled.div`
  width: 5%;
`;

const FadeBeforeFooter = styled.div`
  height: 20vh;
  background: linear-gradient(to bottom, #8080801a 40%, #efdfdf80 130%);
`;

const Footer = () => {
  // 3 sections (row)
  return (
    <IconContext.Provider value={{ size: "50px" }}>
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
