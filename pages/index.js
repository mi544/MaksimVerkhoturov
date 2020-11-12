import Head from "next/head";

import { Header, Footer, Main, Card, H1, H4, Row, Container } from "components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Row margin="7vh auto auto 6%">
            <Card width="40%" height="200px">
              <H1>Software developer</H1>
              <H4>Hello! I develop apps.</H4>
            </Card>
          </Row>
          <Row margin="10vh 10% auto 6%">
            <Card width="20%">
              <H1>Skills</H1>
              <H4>Different icons can be here</H4>
            </Card>
            <Card height="40vh" width="60%" margin="auto auto auto 10%">
              <H1>Projects</H1>
              <H4>This is where all my projects will be</H4>
            </Card>
          </Row>
          <Row margin="15vh auto auto 6%">
            <Card width="60%" height="60vh">
              <H1>Contact me</H1>
              <H4>Information, resume. And links.</H4>
            </Card>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default Home;
