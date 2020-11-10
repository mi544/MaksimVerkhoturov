import styled from "styled-components";

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  min-height: 100px;
  background-color: #efdfdfdf;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  // 3 sections (row)
  return <FooterWrapper>footer</FooterWrapper>;
};

export { Footer };
