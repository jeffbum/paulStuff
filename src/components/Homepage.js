import React from 'react'
import { Link } from 'react-router'

import Header from './Header'


class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
        <div className="container">
          <Header />
          <div>Hello World</div>
        </div>
        )
    }
}

export default Homepage
