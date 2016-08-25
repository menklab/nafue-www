'use strict';

import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap'

export class MainNavigation extends React.Component {
    render() {
        return (
            <Navbar fixedTop className="nafue-header">
                <Navbar.Header >
                    <Navbar.Brand>
                        <a href="">Nafue</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/how-it-works">How It Works</NavItem>
                        <NavItem eventKey={2} href="/apps">Apps</NavItem>
                        <NavItem eventKey={2} target="_blank" title="View previous campaigns" href="http://us12.campaign-archive2.com/home/?u=4845ba4aa1bc87b9521dd68e2&id=21c1ef62bd">Updates</NavItem>
                        <NavItem />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}