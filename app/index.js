import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import HeaderView from './View/HeaderView'
import Form from './Form/index'
import About from './View/About'
import Home2 from './View/Home2'
import Footer2 from './View/Footer2'
const App = React.createClass({
    render() {
        return (
            <div>
                <Home2/>
                <div className="ui main text container">
                    <div className='row'>
                        <div className='col-xs-12'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer2/>
            </div>
        )
    }
})

//const About = React.createClass({
//    render() {
//        return <h3>About</h3>
//    }
//})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="form" component={Form}/>
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message}/>
            </Route>
        </Route>
    </Router>
), document.getElementById("app"))