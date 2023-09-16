import {Container, Image, Heading, Paragraph} from './StyledComponents'

const NotFound = () => (
  <Container>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Paragraph>
      We are sorry, the page you requested could not be found
    </Paragraph>
  </Container>
)

export default NotFound
