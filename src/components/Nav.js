import React from 'react'
import { Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap'
import '../App.css'

import logo from '../logo.png'

const NavigationBar = () => {
    return (
        <Navbar bg="white" style={{
            "borderRadius": "0px 0px 20px 20px", "height": "100px"}} expand="lg">
        <Navbar.Brand className="DD" href="#home">
            <h1 style={{"color": "#743caf", "fontWeight": "200", "paddingLeft": "30px", "paddingTop": "10px", "fontFamily": "Montserrat, sans-serif"}}>Digit Dynasty</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="link" href="#blog">Blog</Nav.Link>
            <NavDropdown className="link" title="The League" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Standings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Player Search</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Team Search</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="link" title="Analytics" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Player Comparison</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Trade Machine</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blacktop</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
