import {Link, useLocation} from 'react-router-dom'
import {
  HomeContainer,
  HomeImage,
  Heading,
  Paragraph,
  Button,
} from './StyledComponents'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

const HomeRoute = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const name = queryParams.get('name')
  const topic = queryParams.get('topic')

  return (
    <MeetupContext.Consumer>
      {value => {
        const {display} = value

        return (
          <>
            <Header />
            {display && (
              <HomeContainer>
                <Heading>Hello {name}</Heading>
                <Paragraph>Welcome to {topic} </Paragraph>

                <HomeImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                  alt="meetup"
                />
              </HomeContainer>
            )}
            {!display && (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <Paragraph>Please register for the topic</Paragraph>
                <Link to="/register">
                  <Button type="button">Register</Button>
                </Link>
                <HomeImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default HomeRoute
