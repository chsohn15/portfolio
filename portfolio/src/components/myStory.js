import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MyStory = () => {
    return (
        <div>
        <Row style={{marginLeft: '30px'}}>
        <Col>
          <Card>
            <Card.Header>My Story</Card.Header>
            <Row >
              <Col md="8">
                <Card.Body>
                  <Card.Text>
                  <p>Full stack web developer with experience in Ruby and Javascript frameworks. Through my experience as a high school English teacher for five years, I crafted creative lessons and projects to appeal to a diversity of students and meet their learning goals. My detailed attention to the voice of the consumer, my love of language construction, and my interest in an intuitive and transformative user experience translate seamlessly into the coding world.   </p>
                    <p>Here is a list of some of the technologies I have been using recently:</p>
                <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Javascript</li>
                <li>Ruby on Rails</li>
                <li>HTML and CSS</li>
                <li>Material UI, Bootstrap UI, Semantic UI</li>
            </ul>
                  </Card.Text>
 
                </Card.Body>
              </Col>
              <Col md="4">
                <Card.Img
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
            
        </div>
    )
}

export default MyStory