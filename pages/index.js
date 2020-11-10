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
            <Card width="40%">
              <H1>Software developer that is who I am and I develop things</H1>
              <H4>
                This is extra text talking about who I am, not much text here though. Who
                in the world uses lorem ipsum these days. Yuck! Most of the people don't
                even know what it means. And then why put something you have no clue about
                on your website..
              </H4>
            </Card>
            <div style={{ marginLeft: "auto" }}>a thing on the right</div>
          </Row>
          <Row margin="10vh 10% auto 6%">
            <Card width="20%">
              <H1>Skills overview</H1>
              <H4>
                Cool images or click here first? Icons for skills! icons! or do we need
                them?
              </H4>
            </Card>
            <Card width="60%" margin="auto auto auto 10%">
              <H1>Projects here</H1>
              <H4>
                This is all kinds of images and text and we just dance under the Moon and
                we are just having a good time This is all kinds of images and text and we
                just dance under the Moon and we are just having a good time This is all
                kinds of images and text and we just dance under the Moon and we are just
                having a good time This is all kinds of images and text and we just dance
                under the Moon and we are just having a good time This is all kinds of
                images and text and we just dance under the Moon and we are just having a
                good time This is all kinds of images and text and we just dance under the
                Moon and we are just having a good time This is all kinds of images and
                text and we just dance under the Moon and we are just having a good time
                This is all kinds of images and text and we just dance under the Moon and
                we are just having a good time
              </H4>
            </Card>
          </Row>
          <Row margin="15vh auto auto 6%">
            <Card width="60%" height="60vh">
              <H1>Contact me</H1>
              <H4>
                All kinds of info, resume, or do I need a resume there really? not really,
                maybe just contact info, and links.. links to about me page I guess.. we
                shall see. Let's add some icons here too!
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
