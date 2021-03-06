import Head from 'next/head'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { VscGithubAlt } from 'react-icons/vsc'
import { FaPager } from 'react-icons/fa'
import { SiExpo } from 'react-icons/si'

import {
  Main,
  Container,
  BorderlessCard,
  GlitchingTitle,
  Row,
  ButtonsContainer,
  H2,
  IconRectangleLink,
  P,
  H5
} from '@S'

import { Header, Footer } from '@C'

const Projects = () => {
  return (
    <IconContext.Provider value={{ size: '75px', color: 'white' }}>
      <Head>
        <meta property="og:title" content="Portfolio - Projects" />
        <meta property="og:url" content="https://mi544.dev/projects/" />
        <title>Projects</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Row center id="simpleweather">
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              margin="30px auto auto auto"
            >
              <div>
                <GlitchingTitle padding="22px 0 20px 0">
                  <H2>Simple Weather</H2>
                  <H2>Simple Weather</H2>
                  <H2>Simple Weather</H2>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 padding="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>Vue.js, Vuex, Chart.js</div>
                    <div>Node.js, Express</div>
                    <div>NWS, OpenCage APIs</div>
                  </P>
                  <P padding="1.5rem 0 1rem 0">
                    <div>
                      A clean, simple weather app to give information clearly and quickly.
                      Inspired by{' '}
                      <a
                        href="https://ddg.gg/weather%20in%20Denver"
                        style={{ color: '#e8ef64' }}
                      >
                        DuckDuckGo&apos;s
                      </a>{' '}
                      implementation of their weather widget.
                    </div>
                    <div>
                      &emsp;Searches for weather in any US city, displaying it along with
                      an informative temperatures chart.
                    </div>
                  </P>
                  <ButtonsContainer>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/bry-an/simple-weather"
                    >
                      <VscGithubAlt />
                      <p>Github</p>
                    </IconRectangleLink>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://rainybysun.tokyo/"
                    >
                      <FaPager />
                      <p>Open</p>
                    </IconRectangleLink>
                  </ButtonsContainer>
                </article>
              </div>
              <div>
                <Image
                  src="/images/simple-weather.png"
                  alt="simple weather logo"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </div>
            </BorderlessCard>
          </Row>
          <Row center id="hotsprings">
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              reversed
              margin="30px auto auto auto"
            >
              <div>
                <GlitchingTitle padding="22px 0 20px 0">
                  <H2>Hot Springs</H2>
                  <H2>Hot Springs</H2>
                  <H2>Hot Springs</H2>
                  <H2 />
                  <H2>Simulator</H2>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 padding="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>Vue.js, Nuxt.js, Vuex</div>
                    <div>Tailwind CSS</div>
                    <div>Node.js, Express</div>
                    <div>Jest, Vue Test Utils</div>
                  </P>
                  <P padding="1.5rem 0 1rem 0">
                    <div>
                      A full-stack (mostly front-end) web app for creating hot springs
                      surrounded by rocks. Utilizes Vuex store extensively to incorporate
                      grid logic, show errors, and control the flow.
                    </div>
                    <div>
                      &emsp;Deployed to an AWS EC2 instance with Nginx set up in reverse
                      proxy mode and PM2 for consistent uptime.
                    </div>
                  </P>
                  <ButtonsContainer>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/mi544/hot-springs"
                    >
                      <VscGithubAlt />
                      <p>Github</p>
                    </IconRectangleLink>
                    <IconRectangleLink
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://hot-springs.personal-projects.space/"
                    >
                      <FaPager />
                      <p>Open</p>
                    </IconRectangleLink>
                  </ButtonsContainer>
                </article>
              </div>
              <div>
                <Image
                  src="/images/hot-springs.png"
                  alt="rocket"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </div>
            </BorderlessCard>
          </Row>
          <Row center id="moodmusic">
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              margin="30px auto auto auto"
            >
              <div>
                <GlitchingTitle padding="22px 0 20px 0">
                  <H2>Mood Music</H2>
                  <H2>Mood Music</H2>
                  <H2>Mood Music</H2>
                  <H2>Mood Music</H2>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 padding="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>HTML, CSS, JavaScript</div>
                    <div>Bulma, jQuery</div>
                    <div>LastFM, YouTubeScraper, Genius.com API</div>
                  </P>
                  <P padding="1.5rem 0 1rem 0">
                    An app that suggests similar songs to the one entered, displaying them
                    in a list along with a video and lyrics. The app is strictly
                    client-side.
                  </P>
                  <ButtonsContainer>
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
                  </ButtonsContainer>
                </article>
              </div>
              <div>
                <Image
                  src="/images/tortoise-mobile.png"
                  alt="tortoise"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </div>
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
                <GlitchingTitle padding="22px 0 20px 0">
                  <H2>Interplanetary</H2>
                  <H2>Interplanetary</H2>
                  <H2>Interplanetary</H2>
                  <H2 />
                  <H2>Travel</H2>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 padding="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>HTML, SASS, Node.js, JavaScript</div>
                    <div>Express, Handlebars, Passport</div>
                    <div>MySQL, Sequelize</div>
                    <div>Mocha, Chai + ESLint + Coveralls - TravisCI</div>
                  </P>
                  <P padding="1.5rem 0 1rem 0">
                    <div>
                      A full-stack web app with session-based authentication using
                      passport for booking flights to different planets.
                    </div>
                    <div>&emsp;Deployed to a Debian 10 Digital Ocean VPS.</div>
                  </P>
                  <ButtonsContainer>
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
                  </ButtonsContainer>
                </article>
              </div>
              <div>
                <Image
                  src="/images/rocket-mobile.png"
                  alt="rocket"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </div>
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
                <GlitchingTitle padding="2px 0 20px 0">
                  <H2>Working Title</H2>
                  <H2>Working Title</H2>
                  <H2>Working Title</H2>
                  <H2>Working Title</H2>
                </GlitchingTitle>

                <article>
                  <P border>
                    <H5 padding="0 0 1rem 0" center>
                      Technologies used:
                    </H5>
                    <div>JavaScript, Node.js</div>
                    <div>React Native, Redux, Redux Thunk, Expo.io</div>
                    <div>Express, MySQL, Sequelize</div>
                  </P>
                  <P padding="1.5rem 0 1rem 0">
                    <div>
                      A full-stack mobile app built with React Native with tab, drawer,
                      and stack navigation types, pulling data from an API and
                      asynchronously storing it in a global Redux store.
                    </div>
                    <div>
                      &emsp;Deployed to Expo.io and a Debian 10 Digital Ocean VPS.
                    </div>
                  </P>
                  <ButtonsContainer>
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
                  </ButtonsContainer>
                </article>
              </div>
              <div>
                <Image
                  src="/images/wt.png"
                  alt="working title"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={50}
                  priority
                />
              </div>
            </BorderlessCard>
          </Row>
        </Main>
        <Footer />
      </Container>
    </IconContext.Provider>
  )
}

export default Projects
