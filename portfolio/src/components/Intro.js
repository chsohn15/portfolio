import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';


const Intro = () => {

    //set initital state of phrase to be transitioned
    const[phrase, changePhraseState] = useState("web pages")

    useEffect(() => {
        transitionPhrases()

        return () => clearInterval(transitionPhrases);
      }, [])
    
    let transitionPhrases = () => {
        let i = 0
        let l = 3 //length of array

        setInterval(() => {
            let phraseArray = ["web pages", "Ruby on Rails backends", "React apps"]

            if (i < l){
                changePhraseState(phraseArray[i])
            }
            else {
                i = 0
                changePhraseState(phraseArray[i])
               
            }
            i++

        }, 2000)
    }

    //Set interval so that 
    const Subtitle = styled.h5`
    padding-top: 200px; 
    color: purple; 
    margin-left: 50px;
    `;

    const Title = styled.h1`
    padding-top: 10px; 
    color: purple; 
    margin-left: 50px;
    font-size: 55px
    `;

    return (
        <Jumbotron fluid id="jumbotron" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&w=1000&q=80')", backgroundSize: 'cover', height:'100vh'}}>
            <Subtitle>Hello, my name is </Subtitle>
            <Title>Christina Sohn.</Title>
            <Title>I create and design <span>{phrase}</span>.</Title>
        </Jumbotron>
    )
}

export default Intro

//animated text: https://medium.com/@valentyn.vasylenko/typewriter-effect-with-alternating-text-in-pure-css3-72cf0c7e6c5