/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'

import Home from './View/home'
import Form from './Form/index'
const Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
})

//const routeConfig = [
//    { path: '/',
//        component: Home,
//        indexRoute: { component: Dashboard },
//        childRoutes: [
//            { path: 'about', component: About },
//            { path: 'create_service', component:Form}
//        ]
//    }
//]
const About = React.createClass({
    render() {
        return <h1>About</h1>
    }
})
ReactDOM.render((
    <Router>
        <Route path="/" component={Home}>
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.getElementById("app"))