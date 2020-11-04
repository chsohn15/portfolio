import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="https://www.freepnglogos.com/uploads/c-letter-logo-png-0.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
      Christina Sohn
      <Nav className="mr-auto">
      <Nav.Link href="#my-story">My Story</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#work">Work</Nav.Link>
      <Nav.Link href="#contact-me">Contact Me</Nav.Link>
    </Nav>
    </Navbar.Brand>
  </Navbar>
    )
}

export default Header