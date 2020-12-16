import Head from "next/head";
import Image from "next/image";

import {
  Header,
  Main,
  Container,
  BorderlessCard,
  GlitchingTitle,
  Footer,
  Row,
  H2,
  H3,
  H4,
  Align,
  HighlightText,
  P,
  Line
} from "components";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Row center>
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.6}
              width="90%"
              margin="30px auto auto auto"
              noClip
            >
              <div>
                <H2>Maksim Verkhoturov</H2>
                <article>
                  <P>&ensp;&ensp;Hello!</P>
                  <P>
                    &ensp;&ensp;I'm a Software Engineer specializing in full stack web
                    development. I enjoy working on both front end and back end.
                  </P>
                  <P>
                    &ensp;&ensp;Excited to be building apps and creating experiences.
                    Let's work together!
                  </P>
                </article>
              </div>
              <div>
                <Image
                  src="/images/photo.png"
                  alt="personal photo"
                  width={800}
                  height={800}
                  layout="intrinsic"
                  quality={100}
                  priority
                />
              </div>
            </BorderlessCard>
          </Row>
          <Line />
          <Row>
            <BorderlessCard
              reversedMobile
              appearDuration={1}
              appearDuration={1}
              appearDuration={1}
              appearDuration={1}
              appearDuration={1}
              delayDuration={1}
              textDelayDuration={-0.2}
              width="90%"
              noClip
            >
              <div>
                <P>
                  &ensp;&ensp;I've always been excited about technologies and programming
                  in general, and now I am the one developing apps and creating
                  experiences. That means a lot to me!
                </P>
                <P marginTop="0rem">
                  &ensp;&ensp;I believe that any ambitious goal can be achieved more
                  efficiently as a team of like-minded people, rather than as an
                  individual. However, only with different individualities and opinions
                  combined can the team achieve great results.
                </P>
                <P marginTop="0.3rem">
                  &ensp;&ensp;That's why I want to be part of a team of solution-driven
                  people with strong communication skills and a passion for developing,
                  where everyone's opinion is valued and it's easy to study the codebase
                  and learn from more experienced developers!
                </P>
              </div>
              <div>
                <Align align="left" margin="0 10% auto 10%" marginW="0 10% auto 15%">
                  <H2>&ensp;&ensp;I know:</H2>

                  <H3 line="60px">
                    <HighlightText delay="-4s">Python</HighlightText>
                  </H3>
                  <H3 line="60px">
                    <HighlightText delay="-3s">JavaScript</HighlightText>
                  </H3>
                  <H3 line="60px">
                    <HighlightText delay="-2s">HTML, CSS</HighlightText>
                  </H3>
                  <H3 line="60px">
                    <HighlightText delay="-3s">Node.js</HighlightText>
                  </H3>
                  <H3 line="60px">
                    <HighlightText delay="-1s">React, Redux, Next.js</HighlightText>
                  </H3>

                  <H4 line="40px">
                    <HighlightText noAnimate>React Native, Expo.io</HighlightText>
                  </H4>
                  <H3 line="50px">
                    <HighlightText noAnimate>Express</HighlightText>
                  </H3>
                  <H3 line="50px">
                    <HighlightText delay="-8s">Mocha, Chai, Jest, Selenium</HighlightText>
                  </H3>
                  <H3 line="50px">
                    <HighlightText delay="-5s">MySQL, Sequelize</HighlightText>
                  </H3>
                  <H3 line="50px">
                    <HighlightText delay="-5s">MongoDB, Mongoose</HighlightText>
                  </H3>
                  <H3 line="50px">
                    <HighlightText noAnimate>Git</HighlightText>
                  </H3>
                </Align>
              </div>
            </BorderlessCard>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default About;
