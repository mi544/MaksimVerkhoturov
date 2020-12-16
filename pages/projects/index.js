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
  IconRectangleLink
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
                  <H4>Technologies used:</H4>
                  <p>
                    牛乳→水にする時はバターと黒蜜だけでも美味しいですがトッピングは栗や生クリームなども♫お好きな和風を楽しんで下さい^o^
                  </p>
                  <p>
                    の時さっくり混ぜるとふわっとした仕上がりになります。そば粉を入れずに薄力粉のみでもOK
                  </p>
                  <Row justify="space-evenly">
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
                  quality={100}
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
                  <H4>Technologies used:</H4>
                  <p>
                    最近、よく耳にする『糖質制限』なる言葉。大豆粉を購入したので、おからパウダーと合わせ、買い置きのココナッツも加えてホットケーキ（パンケーキ）を焼いてみることにしました。
                  </p>
                  <p>
                    牛乳→水にする時はバターと黒蜜だけでも美味しいですがトッピングは栗や生クリームなども♫お好きな和風を楽しんで下さい^o^
                  </p>
                  <p>
                    の時さっくり混ぜるとふわっとした仕上がりになります。そば粉を入れずに薄力粉のみでもOK
                  </p>
                  <Row justify="space-evenly">
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
                  quality={100}
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
                  <H4>Technologies used:</H4>
                  <p>
                    最近、よく耳にする『糖質制限』なる言葉。大豆粉を購入したので、おからパウダーと合わせ、買い置きのココナッツも加えてホットケーキ（パンケーキ）を焼いてみることにしました。
                  </p>
                  <p>
                    牛乳→水にする時はバターと黒蜜だけでも美味しいですがトッピングは栗や生クリームなども♫お好きな和風を楽しんで下さい^o^
                  </p>
                  <p>
                    の時さっくり混ぜるとふわっとした仕上がりになります。そば粉を入れずに薄力粉のみでもOK
                  </p>
                  <Row justify="space-evenly">
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
                  quality={100}
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
