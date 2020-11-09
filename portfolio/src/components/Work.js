import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'

const Work = (props) => {

  const Header = props.Header
    return (
      <Container id="work" style={{marginTop: '75px'}}>
      <Row style={{marginLeft: '0px', marginRight: '0px'}}>
        <SectionHeader Header={props.Header} title={"Work Experience"}/>
      </Row>
        <Row style={{marginLeft: '100px', marginTop: '0px', marginRight: '100px'}}>
        <Col>
          <Card>
            <Row >

                <Card.Body>
                  <Card.Text>
                  <p>English Teacher, South County High School, Lorton, VA					       	08/2016 - 06/2020</p>
            <ul>
                <li>Successfully engaged students in grades 10-12 through varied methods including small group work, effective moderating of class discussion, and authentic assessments</li>
                <li>Collaborated with grade-level teams to create cohesive literary units centered around engaging topics</li>
                <li>Incorporated technology such as Google Suite and Canva into lesson plans</li>
                <li>Set measurable and attainable goals for student progress in writing throughout the year</li>
            </ul>
                </Card.Text>
                </Card.Body>
            
            </Row>
          </Card>
        </Col>
      </Row>
      </Container>
    )
}

export default Work