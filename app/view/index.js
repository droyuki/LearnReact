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
            <div className="ui inverted vertical center aligned ">
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
            <div className="Image container header_css ">
                <div className="ui gray masthead center aligned">
                    <div className="ui text container">
                        <h1 className="ui blue center aligned icon header">
                            <div className="content">
                                大數據分析平台 <span className="ui blue label">Beta</span>
                            </div>
                        </h1>
                        <h2 className="ui gray center aligned icon header">
                            <div className="content">Do whatever you want when you want to.
                            </div>
                        </h2>
                    </div>
                </div>
                <div className="ui one column stackable center aligned page grid">
                    <div className="column twelve wide">
                        <Link to="/form" className="ui huge primary button">
                            Get Started <i className="right arrow icon"></i>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
class Page1 extends React.Component {
    render() {
        return (
            <div className="Image stripe">
                <div className="ui page grid">
                    <div className="sixteen wide column">
                        <h1>
                            <i className="settings icon"></i>
                            Management UI
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Page2 extends React.Component {
    render() {
        return (
            <div className="Image stripe">
                <div className="ui page grid">
                    <div className="sixteen wide column">
                        <h1>
                            <i className="users icon"></i>
                            About
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className="ui page grid">
                    <div className="sixteen wide column">
                        <div className="ui gray icon message">
                            <i className="notched circle loading icon"></i>

                            <div className="content">
                                <div className="header">
                                    網站開發中
                                </div>
                                <p>未來將提供大數據分析服務</p>

                                <p>目前此版本各項功能尚不穩定。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature ui vertical segment">
                    <div className="ui page grid">
                        <div
                            className="ui three column equal height center aligned divided relaxed stackable page grid">
                            <div className="row">
                                <div className="column">
                                    <h1 className="ui icon header">
                                        <i className="twitter icon"></i>
                                        文字探勘
                                    </h1>
                                    <p>
                                        串流文字分析服務
                                    </p>
                                </div>
                                <div className="column">
                                    <h1 className="ui icon header">
                                        <i className="line chart icon"></i>
                                        股市期貨
                                    </h1>
                                    <p>
                                        即時台股技術指標
                                    </p>
                                </div>
                                <div className="column">
                                    <h1 className="ui icon header">
                                        <i className="database icon"></i>
                                        巨量資料
                                    </h1>
                                    <p>
                                        提供多種資料來源
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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