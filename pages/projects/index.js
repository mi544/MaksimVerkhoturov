import Head from "next/head";
import Image from "next/image";

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
          <Image src="/images/tortoise.png" alt="tortoise" width={306} height={163} />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Projects;
