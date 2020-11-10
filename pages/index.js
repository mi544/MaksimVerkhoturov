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
          <Row margin="7vh 50% auto 0">
            <Card>
              <H1>Software developer that is who I am and I develop things</H1>
              <H4>
                This is extra text talking about who I am, not much text here though. Who
                in the world uses lorem ipsum these days. Yuck! Most of the people don't
                even know what it means. And then why put something you have no clue about
                on your website..
              </H4>
            </Card>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default Home;
