import React,{Component} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Navbar1 from './Navbar/Navbar-1'
import About from './Navbar/components/About'
import Product from './Navbar/components/Product'
import Services from './Navbar/components/Services'
import Home from './Navbar/components/Home'
import Employee from './Navbar/components/Employee'
import Contact from './Navbar/components/Contact'


class App extends Component{
  render(){

  
  return (
    <div>
    <Router>
    <Navbar1/>
    <Switch>
    <Route path="/About" component={About}/>
    <Route path="/Product" component={Product}/>
    <Route path="/Services" component={Services}/>
    <Route path="/Home" component={Home}/>
    <Route path="/Employee" component={Employee}/>
    <Route path="/Contact" component={Contact}/>



    </Switch>
    
    </Router>

    </div>
  )
}
}
export default App