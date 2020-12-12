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
  HighlightText
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
          <Align align="left" margin="10vh auto auto 20%">
            <H2>Skills</H2>

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
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default About;
