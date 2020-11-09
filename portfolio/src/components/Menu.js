import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CSLogo from './CSLogo4.png'

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
 
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={CSLogo}
                width="55"
                height="35"
                className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#my-story">My Story</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
   
  </Navbar>
    )
}

export default Menu