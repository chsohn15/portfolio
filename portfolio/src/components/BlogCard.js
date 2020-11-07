import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const BlogCard = (props) => {

console.log(props.blog)

const { title, thumbnail, content } = props.blog
const preview = content.slice(0, 150)

return(
    <Card>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {preview + "..."}
            </Card.Text>
        </Card.Body>
  </Card>
    )
}

export default BlogCard
