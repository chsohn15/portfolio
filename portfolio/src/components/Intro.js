import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';


const Intro = () => {

    let phrases = ["web pages", "Ruby on Rails backends", "React apps"]
    //set initital state of phrase
    const[phrase, changePhraseState] = useState(phrases[0])

    useEffect((phrases) => {
        //transitionPhrases(phrases)
        console.log("PHRASES:" + phrases)
      }, [])
    
    let transitionPhrases = (phraseArray) => {
        let i = 0
        let phrases = phraseArray
        setInterval((phrases) => {
            if (i < phrases.length -1){
                i++
            }
            else {
                i = 0
            }
            changePhraseState(phrases[i])

        }, 2000)
    }

    //Set interval so that 
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

    // let i = 0 

    // const phrase = (phrases) => {
    //     setInterval(() => {
    //         let displayedPhrase = phrases[i]
    //         if (i >= phrases.length){
    //             i = 0
    //         }
    //         else{
    //             i++
    //         }
    //         return displayedPhrase
    //     }, 2000)


    //}

    return (
        <Jumbotron fluid id="jumbotron" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&w=1000&q=80')", backgroundSize: 'cover', height:'100vh'}}>
            <Subtitle>Hello, my name is </Subtitle>
            <Title>Christina Sohn.</Title>
            <Title>I create and design {phrase}.</Title>
        </Jumbotron>
    )
}

export default Intro