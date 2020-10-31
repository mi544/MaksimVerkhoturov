import Head from "next/head";
import styled from "styled-components";

import { Header, Main, H1, H4 } from "components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Header />
      <Main>
        <H1>Software developer that is who I am and I develop things</H1>
        <H4>This is extra text talking about who I am, not much text here though</H4>
      </Main>
    </>
  );
};
export default Home;
