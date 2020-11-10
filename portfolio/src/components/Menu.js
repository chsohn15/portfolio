import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CSLogo from '../images/CSLogo4.png'
import GitHub from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'


const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="#home" style={{marginLeft: '30px', marginTop: '-1px'}}>
                <img
                alt=""
                src={CSLogo}
                width="57"
                height="33"
                className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#my-story">My Story</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
            <MailOutlineIcon style={{color:'white', marginTop: '3px', marginRight: '20px'}}/>
            <LinkedInIcon style={{color:'white', marginTop: '3px', marginRight: '20px'}}/>
            <GitHub style={{color:'white', marginTop: '3px', marginRight: '20px'}}/>
            <FontAwesomeIcon icon={faMedium} style={{color:'white', marginTop: '3px', marginRight: '10px', fontSize: '23px'}}/>
            
  </Navbar>
    )
}

export default Menu