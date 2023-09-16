import {
  RegisterPageContainer,
  ContentContainer,
  Image,
  InputCard,
  Heading,
  Label,
  Input,
  Select,
  Option,
  ButtonCard,
  Button,
  Error,
} from './StyledComponents'

import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = () => (
  <MeetupContext.Consumer>
    {value => {
      const {
        selectValue,
        topic,
        name,
        formData,
        onChangeUserInputValue,
        error,
      } = value

      const onChangeSelectValue = event => {
        selectValue(event.target.value)
      }

      const onSubmitFormData = event => {
        formData(event)
      }

      const onChangeInputData = event => {
        onChangeUserInputValue(event.target.value)
      }

      return (
        <>
          <Header />
          <RegisterPageContainer>
            <ContentContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <InputCard onSubmit={onSubmitFormData}>
                <Heading>Let us Join</Heading>
                <Label htmlFor="name">NAME</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  onChange={onChangeInputData}
                  value={name}
                />
                <Label htmlFor="topics">TOPICS</Label>
                <Select
                  id="topics"
                  onChange={onChangeSelectValue}
                  value={topic}
                >
                  {topicsList.map(eachTopic => (
                    <Option key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </Option>
                  ))}
                </Select>
                <ButtonCard>
                  <Button type="submit">Register Now</Button>
                  <Error>{error}</Error>
                </ButtonCard>
              </InputCard>
            </ContentContainer>
          </RegisterPageContainer>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default RegisterRoute
