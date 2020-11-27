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
  H1,
  H4
} from "components";

const Projects = () => {
  return (
    <>
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
                  <p>
                    最近、よく耳にする『糖質制限』なる言葉。大豆粉を購入したので、おからパウダーと合わせ、買い置きのココナッツも加えてホットケーキ（パンケーキ）を焼いてみることにしました。
                  </p>
                  <p>
                    牛乳→水にする時はバターと黒蜜だけでも美味しいですがトッピングは栗や生クリームなども♫お好きな和風を楽しんで下さい^o^
                  </p>
                  <p>
                    の時さっくり混ぜるとふわっとした仕上がりになります。そば粉を入れずに薄力粉のみでもOK
                  </p>
                </article>
              </div>
              <div>
                <Image
                  src="/images/tortoise-mobile.png"
                  alt="tortoise"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={100}
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
                <GlitchingTitle margin="2px auto 20px auto">
                  <H1>Interplanetary</H1>
                  <H1>Interplanetary</H1>
                  <H1>Interplanetary</H1>
                  <H1 />
                  <H1>Travel</H1>
                </GlitchingTitle>

                <article>
                  <p>
                    最近、よく耳にする『糖質制限』なる言葉。大豆粉を購入したので、おからパウダーと合わせ、買い置きのココナッツも加えてホットケーキ（パンケーキ）を焼いてみることにしました。
                  </p>
                  <p>
                    牛乳→水にする時はバターと黒蜜だけでも美味しいですがトッピングは栗や生クリームなども♫お好きな和風を楽しんで下さい^o^
                  </p>
                  <p>
                    の時さっくり混ぜるとふわっとした仕上がりになります。そば粉を入れずに薄力粉のみでもOK
                  </p>
                </article>
              </div>
              <div>
                <Image
                  src="/images/rocket-mobile.png"
                  alt="rocket"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={100}
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
                <GlitchingTitle margin="2px auto 20px auto">
                  <H1>Working Title</H1>
                  <H1>Working Title</H1>
                  <H1>Working Title</H1>
                  <H1>Working Title</H1>
                </GlitchingTitle>

                <article>
                  <p>
                    最近、よく耳にする『糖質制限』なる言葉。大豆粉を購入したので、おからパウダーと合わせ、買い置きのココナッツも加えてホットケーキ（パンケーキ）を焼いてみることにしました。
                  </p>
                  <p>
                    牛乳→水にする時はバターと黒蜜だけでも美味しいですがトッピングは栗や生クリームなども♫お好きな和風を楽しんで下さい^o^
                  </p>
                  <p>
                    の時さっくり混ぜるとふわっとした仕上がりになります。そば粉を入れずに薄力粉のみでもOK
                  </p>
                </article>
              </div>
              <div>
                <Image
                  src="/images/wt.png"
                  alt="working title"
                  width={600}
                  height={600}
                  layout="intrinsic"
                  quality={100}
                />
              </div>
            </BorderlessCard>
          </Row>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Projects;
