import Head from "next/head";
import styled from "styled-components";

import { Header, Footer, Main, Section, FirstSection, H1, H4 } from "components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Header />
      <Main>
        <FirstSection>
          <H1>Software developer that is who I am and I develop things</H1>
          <H4>This is extra text talking about who I am, not much text here though</H4>
        </FirstSection>
        <Section>
          <H1>Software developer that is who I am and I develop things</H1>
          <H4>This is extra text talking about who I am, not much text here though</H4>
        </Section>
        <Section>
          <H1>Software developer that is who I am and I develop things</H1>
          <H4>This is extra text talking about who I am, not much text here though</H4>
        </Section>
        <Section>
          <H1>Software developer that is who I am and I develop things</H1>
          <H4>This is extra text talking about who I am, not much text here though</H4>
        </Section>
      </Main>
      <Footer />
    </>
  );
};
export default Home;
