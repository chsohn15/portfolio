import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const BlogCard = () => {

return(
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
  </Card>
    )
}

export default BlogCard
