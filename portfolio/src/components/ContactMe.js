import React from 'react' 
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'

const ContactMe = (props) => {
    
    const Header = props.Header
    return(
        <Container id ="contact" style={{marginTop: '75px'}}>
            <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                <SectionHeader Header={props.Header} title={"Contact Me"}/>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default ContactMe