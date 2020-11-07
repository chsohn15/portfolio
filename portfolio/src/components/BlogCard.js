import React from 'react';
import Card from 'react-bootstrap/Card'
import { BrowserRouter, Link } from 'react-router-dom'
//import sanitizeHtml from 'sanitize-html';

const BlogCard = (props) => {

console.log(props.blog)

const { title, thumbnail, content, link } = props.blog

let pTag = content.search('<p>')
let stringStart = pTag + 3

const preview = content.slice(stringStart, stringStart + 150)


return(
    <Card>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {preview + "..."}
                <a href={link} style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer">more</a>
            </Card.Text>
        </Card.Body>
  </Card>
    )
}

export default BlogCard
