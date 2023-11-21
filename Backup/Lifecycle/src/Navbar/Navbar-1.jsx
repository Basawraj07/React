import React, { Component } from 'react'

 class Navbar1 extends Component {
  render() {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
    <a href="/home" className='navbar-brand'>Company Logo</a>
    <div className='ml-auto'>
    
    <ul className='navbar-nav'>
    <li><a href='/Home' className='nav-link'>Home</a>  </li>
    <li><a href='/About' className='nav-link'>About</a> </li>
    <li><a href='/Contact' className='nav-link'>Contact</a> </li>
    <li><a href='/Product' className='nav-link'>Product</a> </li>
    <li><a href='/Services' className='nav-link'>Services</a> </li>
    <li><a href='/Employee' className='nav-link'>Employee</a> </li>


    </ul>

    </div>
    </nav>
  }
}

export default Navbar1