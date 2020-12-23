import styled, { keyframes } from "styled-components";
import { IconContext } from "react-icons";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const fancyText = keyframes`
  0% {
    text-shadow: 4px 2px #272727;
  }

  50% {
    text-shadow: 4px 2px #df2ee2bf;
  }

  100% {
    text-shadow: 4px 2px #272727;
  }
`;

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  min-height: 150px;
  background-color: ${p => p.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${p => p.theme.primaryColor};
  position: relative;
`;

const MarginComponent = styled.div`
  width: 5%;
`;

const FadeBeforeFooter = styled.div`
  height: 12vh;
  background: linear-gradient(to bottom, #000000 85%, #ffffff59 140%);
`;

const NextJS = styled.div`
  position: absolute;
  right: 1vw;
  bottom: 1vh;
  & > a {
    animation: ${fancyText} 18s infinite cubic-bezier(0, 0.38, 1, 0.08);
  }
`;

const Footer = () => {
  // 3 sections (row)
  return (
    <>
      <IconContext.Provider value={{ size: "50px", color: "white" }}>
        <FadeBeforeFooter />
        <FooterWrapper>
          <a
            aria-label="Github"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/mi544"
          >
            <VscGithubInverted />
          </a>
          <MarginComponent />
          <a
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/mi544"
          >
            <FaLinkedin />
          </a>
          <NextJS>
            <a href="https://nextjs.org/">Next.JS</a> by{" "}
            <a href="https://vercel.com/">Vercel</a>
          </NextJS>
        </FooterWrapper>
      </IconContext.Provider>
    </>
  );
};

export { Footer };
