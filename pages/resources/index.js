import Head from "next/head";

import { Header, Main, Container, Footer } from "components";

const Resources = () => {
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <h1>Resources</h1>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Resources;
