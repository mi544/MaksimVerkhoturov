import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>

      <Title>My page</Title>
    </>
  );
};
export default Home;
