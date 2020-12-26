import Head from 'next/head'
import { Main, Container, Row, H1 } from '@S'
import { Header, Footer } from '@C'

const Resources = () => {
  return (
    <>
      <Head>
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
