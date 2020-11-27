import Head from "next/head";
import Image from "next/image";

import {
  Header,
  Main,
  Container,
  Footer,
  Row,
  BorderlessCard,
  GlitchingTitle,
  H1
} from "components";

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
            <BorderlessCard
              appearDuration={1}
              delayDuration={0.1}
              textDelayDuration={0.2}
              width="90%"
              margin="30px auto auto auto"
            >
              <div>
                <H1>Books</H1>

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
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Resources;
