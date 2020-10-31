import Head from "next/head";
import Link from "next/link";

import { Header, Main } from "components";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />
      <Main>
        <h1>Projects</h1>
      </Main>
    </>
  );
};

export default Projects;
