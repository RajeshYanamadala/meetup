import React from 'react'

const MeetupContext = React.createContext({
  display: true,
  registerData: [],
  selectValue: () => {},
  formData: () => {},
  onChangeUserInputValue: () => {},
  name: '',
  topic: '',
  error: '',
})

export default MeetupContext
