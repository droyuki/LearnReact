/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        )
    }
}
