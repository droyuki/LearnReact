import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import Form from '../Form/index'
import Footer from '../View/Footer'
import '../../node_modules/semantic-ui/dist/semantic.min.css'
import '../../node_modules/semantic-ui/dist/components/reset.min.css'
import '../../node_modules/semantic-ui/dist/components/container.min.css'
import '../../node_modules/semantic-ui/dist/components/site.min.css'
import '../../node_modules/semantic-ui/dist/components/grid.min.css'
import '../../node_modules/semantic-ui/dist/components/header.min.css'
import '../../node_modules/semantic-ui/dist/components/image.min.css'
import '../../node_modules/semantic-ui/dist/components/divider.min.css'
import '../../node_modules/semantic-ui/dist/components/list.min.css'
import '../../node_modules/semantic-ui/dist/components/segment.min.css'
import '../../node_modules/semantic-ui/dist/components/icon.min.css'
import '../../node_modules/semantic-ui/dist/components/menu.min.css'
import './app.css'
import './fixedBar.css'
import './main2.css'
class App extends React.Component {
    render() {
        return (
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="#" className="header item">
                            物聯網大數據研究中心
                        </a>
                        <Link to="/page1" className="item">Management</Link>
                        <Link to="/page2" className="item">About</Link>


                        <div className="right menu">
                            <div className="item">
                                <a className="ui button">Log in</a>
                            </div>
                            <div className="item">
                                <a className="ui primary button">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >

                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div className="Image" >
                <div className=" ui text container">
                    <h1 className="ui inverted header">
                        大數據分析平台 <span className="ui white label">Beta</span>
                    </h1>
                    <h2>Do whatever you want when you want to.</h2>
                    <Link to="/form" className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
                </div>

            </div>
        )
    }
}
class Page1 extends React.Component {
    render() {
        return (
            <div>
                <div className="Image ui main text container">
                    <h1>Management UI</h1>
                    <p>Rancher</p>
                </div>
            </div>
        )
    }
}

class Page2 extends React.Component {
    render() {
        return (
            <div className="Image ui main text container">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="page1" component={Page1}/>
            <Route path="page2" component={Page2}/>
            <Route path="form" component={Form}/>
        </Route>
    </Router>
), document.getElementById('app'))