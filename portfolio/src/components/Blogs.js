import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Blogs = () => {

    return (
        <Row style={{marginLeft: '30px', marginTop: '50px', marginRight: '30px'}}>
        <Col>
          <Card>
            <Card.Header>Blogs</Card.Header>
            <Row >

                <Card.Body>
                  <Card.Text>
                  Blogs
                </Card.Text>
                </Card.Body>
            
            </Row>
          </Card>
        </Col>
      </Row>
    )
}

export default Blogs