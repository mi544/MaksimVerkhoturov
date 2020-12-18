import Head from "next/head";
import Image from "next/image";
import { IconContext } from "react-icons";
import { VscGithubAlt } from "react-icons/vsc";
import { FaPager } from "react-icons/fa";
import { SiExpo } from "react-icons/si";

import {
  Header,
  Main,
  Container,
  BorderlessCard,
  GlitchingTitle,
  Footer,
  Row,
  H1,
  H4,
  IconRectangleLink,
  P,
  H5
} from "components";

const Projects = () => {
  return (
    <IconContext.Provider value={{ size: "75px", color: "white" }}>
      <Head>
        <title>Projects</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Row center id="moodmusic">
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              margin="30px auto auto auto"
            >
              <div>
                <GlitchingTitle margin="2px auto 20px auto">
                  <H1>Mood Music</H1>
                  <H1>Mood Music</H1>
                  <H1>Mood Music</H1>
                  <H1>Mood Music</H1>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 margin="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>HTML, CSS, JavaScript</div>
                    <div>Bulma, jQuery</div>
                    <div>LastFM, YouTubeScraper, Genius.com API</div>
                  </P>
                  <P margin="1.5rem 0 1rem 0">
                    An app that suggests similar songs to the one entered, displaying them
                    in a list along with a video and lyrics. The app is strictly
                    client-side.
                  </P>
                  <Row margin="1.5rem auto" justify="space-evenly">
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/mi544/mood-music"
                    >
                      <VscGithubAlt />
                      <p>Github</p>
                    </IconRectangleLink>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://moodmusic.today/"
                    >
                      <FaPager />
                      <p>Open</p>
                    </IconRectangleLink>
                  </Row>
                </article>
              </div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://moodmusic.today/"
              >
                <Image
                  src="/images/tortoise-mobile.png"
                  alt="tortoise"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </a>
            </BorderlessCard>
          </Row>
          <Row center id="interplanetarytravel">
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              reversed
              margin="30px auto auto auto"
            >
              <div>
                <GlitchingTitle margin="2px auto 20px auto">
                  <H1>Interplanetary</H1>
                  <H1>Interplanetary</H1>
                  <H1>Interplanetary</H1>
                  <H1 />
                  <H1>Travel</H1>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 margin="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>Node.js, HTML, CSS, JavaScript</div>
                    <div>Express, Handlebars, Passport</div>
                    <div>MySQL, Sequelize</div>
                    <div>Mocha, Chai + ESLint + Coveralls - TravisCI</div>
                  </P>
                  <P margin="1.5rem 0 1rem 0">
                    <div>
                      A full-stack web app with session-based authentication using
                      passport for booking flights to different planets.
                    </div>
                    <div>&emsp;Deployed to a Debian 10 Digital Ocean VPS.</div>
                  </P>
                  <Row margin="2rem auto" justify="space-evenly">
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/mi544/interplanetary-travel-planner"
                    >
                      <VscGithubAlt />
                      <p>Github</p>
                    </IconRectangleLink>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://interplanetarytravel.space/"
                    >
                      <FaPager />
                      <p>Open</p>
                    </IconRectangleLink>
                  </Row>
                </article>
              </div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://interplanetarytravel.space/"
              >
                <Image
                  src="/images/rocket-mobile.png"
                  alt="rocket"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </a>
            </BorderlessCard>
          </Row>
          <Row center id="workingtitle">
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              margin="30px auto auto auto"
            >
              <div>
                <GlitchingTitle margin="2px auto 20px auto">
                  <H1>Working Title</H1>
                  <H1>Working Title</H1>
                  <H1>Working Title</H1>
                  <H1>Working Title</H1>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 margin="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>JavaScript, Node.js</div>
                    <div>React Native, Redux, Redux Thunk, Expo.io</div>
                    <div>Express, MySQL, Sequelize</div>
                  </P>
                  <P margin="1.5rem 0 1rem 0">
                    <div>
                      A full-stack mobile app built with React Native with tab, drawer,
                      and stack navigation types, pulling data from an API and
                      asynchronously storing it in a global Redux store.
                    </div>
                    <div>
                      &emsp;Deployed to Expo.io and a Debian 10 Digital Ocean VPS.
                    </div>
                  </P>
                  <Row margin="2rem auto" justify="space-evenly">
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/mi544/working-title"
                    >
                      <VscGithubAlt />
                      <p>Github</p>
                    </IconRectangleLink>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://expo.io/@mi544/projects/working-title"
                    >
                      <SiExpo />
                      <p>Open</p>
                    </IconRectangleLink>
                  </Row>
                </article>
              </div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/mi544/working-title"
              >
                <Image
                  src="/images/wt.png"
                  alt="working title"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </a>
            </BorderlessCard>
          </Row>
        </Main>
        <Footer />
      </Container>
    </IconContext.Provider>
  );
};

export default Projects;
