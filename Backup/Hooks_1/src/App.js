import React, { Component } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './User/Home'
import Contact from './User/Contact'
import User from './User/User'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import RegiForm from './HookEx/RegiForm'
import Fact from './HookEx/Fact'
class App extends Component {
  render() {
    
    return <>
            <Provider store={store}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/refhook" element={<RegiForm/>}/>
                    <Route path="/memo" element={<Fact/>}/>
                </Routes>
           </Router>
           </Provider>
          </>
  }
}

export default App