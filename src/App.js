import {Component} from 'react'

import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import MeetupContext from './context/MeetupContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    display: false,
    name: '',
    topic: '',
    error: '',
    meetupData: [],
  }

  onChangeUserInputValue = value => {
    this.setState({name: value})
  }

  formData = event => {
    event.preventDefault()
    const {name, topic} = this.state
    const {history} = this.props

    console.log(history.location)

    if (name !== '' && topic !== '') {
      history.replace(`/?name=${name}&topic=${topic}`)
      this.setState({display: true})
    } else {
      this.setState({error: 'Please enter your name'})
    }

    const newList = {
      name,
      topic,
    }
    this.setState({meetupData: newList})
  }

  selectValue = value => {
    this.setState({topic: value})
  }

  render() {
    const {display, name, topic, error, meetupData} = this.state

    return (
      <>
        <MeetupContext.Provider
          value={{
            display,
            name,
            topic,
            error,
            onChangeUserInputValue: this.onChangeUserInputValue,
            formData: this.formData,
            selectValue: this.selectValue,
            meetupData,
          }}
        >
          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/register" component={RegisterRoute} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </MeetupContext.Provider>
      </>
    )
  }
}

export default withRouter(App)
