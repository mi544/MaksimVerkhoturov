import { Row, IconRectangleLink } from '@S'

const ProjectIcons = ({ icon1, icon2 }) => {
  return (
    <Row margin="1.5rem 0" justify="space-evenly">
      <IconRectangleLink
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/mi544/mood-music"
      >
        {icon1}
        <p>Github</p>
      </IconRectangleLink>
      <IconRectangleLink
        target="_blank"
        rel="noreferrer noopener"
        href="https://moodmusic.today/"
      >
        {icon2}
        <p>Open</p>
      </IconRectangleLink>
    </Row>
  )
}

export { ProjectIcons }
