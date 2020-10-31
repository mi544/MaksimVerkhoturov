import Head from "next/head";

import { Header, Main } from "components";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <Header />
      <Main>
        <h1>About Me</h1>
      </Main>
    </>
  );
};

export default About;
