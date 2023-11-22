import React, { Component } from 'react'
import  Product  from './product/Product'
import { store } from './redux/store'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
      <h3>App component</h3>

      <Product/>
      </Provider>
      
      </div>
    )
  }
}

export default App