import Head from "next/head";
import Link from "next/link";

import { Header, Main, Container, Footer } from "components";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <h1>Projects</h1>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Projects;
