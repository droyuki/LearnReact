/**
 * Created by WeiChen on 2016/1/21.
 */
import React from 'react'
import { Link } from 'react-router'
import './main2.css'
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
import '../../node_modules/semantic-ui/dist/components/visibility.min'
import '../../node_modules/semantic-ui/dist/components/sidebar.min'
import '../../node_modules/semantic-ui/dist/components/transition.min'
import '../../node_modules/semantic-ui/dist/components/visibility.min'
import '../../node_modules/semantic-ui/dist/components/sidebar.min'
import '../../node_modules/semantic-ui/dist/components/transition.min'
import '../../node_modules/jquery/dist/jquery.min'
export default class Home2 extends React.Component{
    render(){
        return(

            <div className="ui inverted vertical masthead center aligned segment">

                <div className="ui container">
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <a className="active item">Home</a>
                        <a className="item">Work</a>
                        <a className="item">Company</a>
                        <a className="item">Careers</a>
                        <div className="right item">
                            <a className="ui inverted button">Log in</a>
                            <a className="ui inverted button">Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className="ui text container">
                    <h1 className="ui inverted header">
                        Imagine-a-Company
                    </h1>
                    <h2>Do whatever you want when you want to.</h2>
                    <Link to="/form" className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
                </div>

            </div>
        )
    }
}