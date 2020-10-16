import Head from "next/head";
import styled from "styled-components";

import Header from "../components/Header";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <Header />

      <Title>Home</Title>
    </>
  );
};

export default Home;
