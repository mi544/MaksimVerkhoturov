import Head from 'next/head'
import { Main, Container, Row, H1 } from '@S'
import { Header, Footer } from '@C'

const Resources = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Portfolio - Resources" />
        <meta property="og:url" content="https://mi544.dev/resources/" />
        <title>Resources</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Row center>
            <H1>TBD</H1>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  )
}

export default Resources
