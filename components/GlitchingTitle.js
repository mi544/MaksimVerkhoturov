import { GlitchingText, H2 } from '@S'

const GlitchingTitle = ({ children, final }) => {
  return (
    <GlitchingText padding="22px 0 20px 0">
      <H2>{children}</H2>
      <H2>{children}</H2>
      <H2>{children}</H2>
      {final ? <H2 /> : <H2>{children}</H2>}
      {final && <H2>{final}</H2>}
    </GlitchingText>
  )
}

export { GlitchingTitle }
