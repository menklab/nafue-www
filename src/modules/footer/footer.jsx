'use strict';

import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, Row, Col} from 'react-bootstrap'

export class Footer extends React.Component {
    render() {
        return (
            <Navbar fixedBottom className="nafue-footer">
                <Row className="footer-text-padding">
                    <Col sm={6} smOffset={3} >
                        <p className="text-center" >
                            &copy;&nbsp;2016 Nafue.com | View on <a href="https://github.com/menkveldj/nafue">Github</a>
                            &nbsp;|&nbsp;
                            <a href="/docs">Api Docs</a>
                        </p>
                    </Col>
                    <Col sm={1} smOffset={2}>
                        <p className="text-center"><i className="icon icon-canary"/></p>
                    </Col>
                </Row>
            </Navbar>
        );
    }
}