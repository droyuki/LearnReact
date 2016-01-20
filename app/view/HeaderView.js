/**
 * Created by WeiChen on 2016/1/17.
 */
import React from 'react'
import { Link } from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
export default class HeaderView extends React.Component{
    render() {
        return (
            <Navbar inverse staticTop={true} fluid={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>BigData Platform</h1>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem ><Link to="/about">About</Link></NavItem>
                    <NavItem ><Link to="/inbox">Inbox</Link></NavItem>
                    <NavItem ><Link to="/form">Form</Link></NavItem>
                </Nav>
            </Navbar>

        );
    }
}
