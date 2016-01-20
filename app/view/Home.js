/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { IndexRoute } from 'react-router'
import '../../node_modules/semantic-ui/dist/semantic.min.css'
import '../../node_modules/semantic-ui/dist/components/reset.min.css'
import '../../node_modules/semantic-ui/dist/components/container.min.css'
import '../../node_modules/semantic-ui/dist/components/site.min.css'
import '../../node_modules/semantic-ui/dist/components/header.min.css'
import '../../node_modules/semantic-ui/dist/components/grid.min.css'
import '../../node_modules/semantic-ui/dist/components/reset.min.css'
import '../../node_modules/semantic-ui/dist/components/menu.min.css'
import '../../node_modules/semantic-ui/dist/components/button.min.css'
import '../../node_modules/semantic-ui/dist/components/message.min.css'
import '../../node_modules/semantic-ui/dist/components/icon.min.css'
import '../../node_modules/semantic-ui/dist/components/item.min.css'
import '../../node_modules/semantic-ui/dist/components/segment.min.css'
import '../../node_modules/semantic-ui/dist/components/sidebar.min.css'
import '../../node_modules/semantic-ui/dist/components/transition.min.css'
import '../../node_modules/semantic-ui/dist/components/image.min.css'
import './main.css'
import '../../node_modules/semantic-ui/dist/components/visibility.min'
import '../../node_modules/semantic-ui/dist/components/sidebar.min'
import '../../node_modules/semantic-ui/dist/components/transition.min'
import '../../node_modules/jquery/dist/jquery.min'

export default class Home extends React.Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="#" className="header item">
                            BigData Analysis Platform
                    </a>
                    <a className="active item">Home</a>
                    <Link className="item" to="/about">Management</Link>
                    <Link className="item" to="/form">Create Service</Link>
                    <Link className="item" to="/about">About</Link>

                    <div className="right menu">
                        <div className="item">
                            <a cclassNamelass="ui button">Log in</a>
                        </div>
                        <div className="item">
                            <a className="ui primary button">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
