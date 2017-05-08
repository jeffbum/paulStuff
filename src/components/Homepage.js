import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Project from './Project'
import Footer from './Footer'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
          // TODO: map projects from restful App-intro
          // TODO: import styling (can't remember how to do this atm, need to look at current students')

        <div className="container">
          <Header name="Paul Wathome" />
          <Project link='https://foneswapper.herokuapp.com/' image='assets/fsshow.png' title='Foneswappr' description='This project was inspired by sites such as ebay and craigslist. I wanted the UI to be as clean and easy to navigate as possible. This is a place where users can buy, sell and trade their gently used smartphones. Check out the code' github='https://github.com/paulkiio/foneswappr' stack='Ruby, Ruby on Rails, jQuery, HTML, Javascript, SASS/CSS, Heroku, Postgres, AWS'/>
          <Project />
          <Footer />
        </div>
        )
    }
}

export default Homepage
