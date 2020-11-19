import Head from "next/head";
import Image from "next/image";
import SMLCheck from "utils/hooks/SmallMediumLargeCheck";

import { Header, Main, Container, BorderlessCard, Footer, Row, H1, H4 } from "components";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <h1>Projects</h1>
          <Row>
            <BorderlessCard
              noBorders
              width={SMLCheck("80%", "60%", "40%")}
              height="200px"
            >
              <H1>Mood Music</H1>
              <Image src="/images/tortoise.png" alt="tortoise" width={306} height={163} />
            </BorderlessCard>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Projects;
