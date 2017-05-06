import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


//component imports
import App from './App'
import Homepage from './Homepage'






ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Homepage} />
        </Route>
    </Router>
    , document.getElementById('root')
)
