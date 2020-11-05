import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';

const Intro = () => {

    const Subtitle = styled.h6`
    padding-top: 200px; 
    color: purple; 
    margin-left: 50px;
    `;
    const Title = styled.h1`
    padding-top: 10px; 
    color: purple; 
    margin-left: 50px;
    `;

    return (
        <Jumbotron fluid id="jumbotron" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&w=1000&q=80')", backgroundSize: 'cover', height:'100vh'}}>
            <Subtitle>Hello, my name is </Subtitle>
            <Title>Christina Sohn.</Title>
            <Title>I create and design *web pages*.</Title>
        </Jumbotron>
    )
}

export default Intro