import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Footer,
  Main,
  Card,
  H1,
  H2,
  H4,
  Row,
  Container,
  Button,
  StyledLink
} from "components";

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
              height={["35vh", "35vh", "35vh"]}
              padding="5%"
              appearDuration={1.4}
            >
              <H1>Software developer</H1>
              <H4>Hello! I develop apps.</H4>
              <Button width="75%" height="75px">
                Learn More
              </Button>
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
              <H4>Take a look at the projects I've worked on</H4>
              <Row margin="50px 0 10px 0" individualMargin="0 10px 0 10px">
                <Link href="/projects#moodmusic" passHref>
                  <StyledLink>
                    <Image
                      src="/images/tortoise-png-bw.png"
                      alt="tortoise"
                      width={100}
                      height={100}
                      layout="intrinsic"
                      quality={100}
                    />
                  </StyledLink>
                </Link>
                <Link href="/projects#interplanetarytravel" passHref>
                  <StyledLink>
                    <Image
                      src="/images/rocket-png-bw.png"
                      alt="rocket"
                      width={100}
                      height={100}
                      layout="intrinsic"
                      quality={100}
                    />
                  </StyledLink>
                </Link>
                <Link href="/projects#workingtitle" passHref>
                  <StyledLink>
                    <Image
                      src="/images/wt-png-bw.png"
                      alt="working title"
                      width={100}
                      height={100}
                      layout="intrinsic"
                      quality={100}
                    />
                  </StyledLink>
                </Link>
              </Row>
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
