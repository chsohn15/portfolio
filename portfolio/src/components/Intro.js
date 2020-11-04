import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Intro = () => {
    return (
        <Jumbotron id="jumbotron" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&w=1000&q=80')"}}>
            <h2>Hello, My Name is Christina, and I am a Full Stack Developer</h2>
        </Jumbotron>
    )
}

export default Intro