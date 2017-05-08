import React from 'react'
import { Link } from 'react-router'

class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return(
      <div className="card-container row">
        <div id="img-1" className="col m7 show-image">
          <a href={this.props.link} target="_blank"><img width="700" src={this.props.image} /></a>
        </div>
        <div className="col m4 project-blurb container">
          <a href={this.props.link} target="_blank"><h4 className="center">{this.props.title}</h4></a>
          <p className="center">{this.props.description} <a href={this.props.github}
              target="_blank">here!</a></p><u><p className="center">Tech Stack</p></u>
          <p className="center">{this.props.stack}</p>
        </div>
      </div>
    )
  }
}
export default Project
