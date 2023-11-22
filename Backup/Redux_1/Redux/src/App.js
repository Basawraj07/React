import React, { Component } from 'react'
import Message from './message/message'
import { store } from '../../../../myapp/src/redux/store'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}/>
      <h3>App component</h3>

      <Message/>
      <Provider/>
      
      </div>
    )
  }
}

export default App