import Head from "next/head";

import { Header, Main, Container, Footer } from "components";

const About = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <h1>About Me</h1>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default About;
