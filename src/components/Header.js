import React from 'react'
import {Link, browserHistory, Router, Component} from 'react-router'

class Header extends React.Component {
  // TODO: get rid of a tags, and replace with Link tags
  componentDidMount() {
    console.log(this.props)
  }
render(){

  return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
            <Link to='#!'className="brand-logo">{this.props.name}</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="fa fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="https://medium.com/@paulkiio" target="_blank">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="https://medium.com/@paulkiio" target="_blank">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}
}
export default Header
