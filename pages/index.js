import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Main, Card, H2, H3, Row, Container, Button, StyledLink } from '@S'
import { Header, Footer } from '@C'

const Home = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Portfolio - Main Page" />
        <meta property="og:url" content="https://mi544.dev/" />
        <title>Main Page</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Row margin="7vh auto auto 6%">
            <Card
              width={['80%', '60%', '40%']}
              height={['35vh', '35vh', '35vh']}
              padding="5%"
              appearDuration={1.4}
            >
              <H2 margin="0 0 1rem 0">Software developer</H2>
              <section>
                <H3>Hello! I develop apps.</H3>
                <Button width="100%" height="75px">
                  Learn More
                </Button>
              </section>
            </Card>
          </Row>
          <Row margin="10vh 10% auto 6%">
            <Card
              width={['85%', '65%', '60%']}
              height={['36vh', '45vh', '50vh']}
              padding="5%"
              margin="auto 0 auto auto"
              appearDuration={2}
            >
              <H2 margin="0 0 1rem 0">Projects</H2>
              <section>
                <H3>Take a look at the projects I&apos;ve worked on</H3>
                <Row
                  margin="50px 0 10px 0"
                  individualMargin="0 10px 0 10px"
                  justify="center"
                >
                  <Link href="/projects#moodmusic" passHref>
                    <StyledLink aria-label="Mood Music Project">
                      <Image
                        src="/images/tortoise-png-bw.png"
                        alt="tortoise"
                        width={100}
                        height={100}
                        layout="intrinsic"
                        quality={50}
                      />
                    </StyledLink>
                  </Link>
                  <Link href="/projects#interplanetarytravel" passHref>
                    <StyledLink aria-label="Interplanetary Travel Project">
                      <Image
                        src="/images/rocket-png-bw.png"
                        alt="rocket"
                        width={100}
                        height={100}
                        layout="intrinsic"
                        quality={50}
                      />
                    </StyledLink>
                  </Link>
                  <Link href="/projects#workingtitle" passHref>
                    <StyledLink aria-label="Working Title Project">
                      <Image
                        src="/images/wt-png-bw.png"
                        alt="working title"
                        width={100}
                        height={100}
                        layout="intrinsic"
                        quality={50}
                      />
                    </StyledLink>
                  </Link>
                </Row>
              </section>
            </Card>
          </Row>
          <Row margin="10vh 2% auto 6%">
            <Card
              width={['90%', '75%', '60%']}
              height={['45vh', '45vh', '60vh']}
              appearDuration={2.7}
            >
              <H2 margin="0 0 1rem 0">Contact me</H2>
              <H3>sd32@pm.me</H3>
            </Card>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  )
}
export default Home
