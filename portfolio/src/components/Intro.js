import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';

const Intro = () => {

    const Title = styled.h1`
    padding-top: 100px; 
    color: purple; 
    padding-left: 20px;
    `;

    return (
        <Jumbotron fluid id="jumbotron" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&w=1000&q=80')", backgroundSize: 'cover'}}>
            <Title>Hi, My Name is Christina, and I am a Full Stack Developer</Title>
        </Jumbotron>
    )
}

export default Intro