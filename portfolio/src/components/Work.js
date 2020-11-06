import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Work = () => {
    return (
        <Row style={{marginLeft: '30px', marginTop: '50px', marginRight: '30px'}}>
        <Col>
          <Card>
            <Card.Header>Work Experience</Card.Header>
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
    )
}

export default Work