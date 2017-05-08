import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
  render(){
    return(
      <div className="footer center">
        <p className="copy-right">
      Designed by &copy; <a href="#" target="_blank">Paul Wathome</a>, coded in <a href="http://www.atom.io" target="_blank">Atom</a><br /> and hosted on <a href="http://www.github.com/" target="_blank">Github</a>
        </p>
      </div>
    )
  }
}
export default Footer
