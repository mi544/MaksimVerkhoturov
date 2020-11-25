import Head from "next/head";
import { Header, Footer, Main, Card, H1, H2, H4, Row, Container } from "components";

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
            <Card
              width={["80%", "60%", "40%"]}
              height={["20vh", "27vh", "30vh"]}
              appearDuration={1.4}
            >
              <H1>Software developer</H1>
              <H4>Hello! I develop apps.</H4>
            </Card>
          </Row>
          <Row margin="10vh 10% auto 6%">
            <Card
              height={["36vh", "45vh", "50vh"]}
              width={["85%", "65%", "60%"]}
              margin="auto 0 auto auto"
              appearDuration={2}
            >
              <H1>Projects</H1>
              <H4>This is where all my projects will be</H4>
            </Card>
          </Row>
          <Row margin="10vh 2% auto 6%">
            <Card
              width={["90%", "75%", "60%"]}
              height={["45vh", "45vh", "60vh"]}
              appearDuration={2.7}
            >
              <H1>Contact me</H1>
              <H2>sd32@pm.me</H2>
            </Card>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default Home;
