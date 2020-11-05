import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';


const Intro = () => {

    //set initital state of phrase to be transitioned
    const[phrase, changePhraseState] = useState("web pages")

    useEffect(() => {
        //transitionPhrases()
      }, [])
    
    let transitionPhrases = () => {
        let i = 0
        let l = 3 //length of array

        setInterval(() => {
            let phraseArray = ["web pages", "Ruby on Rails backends", "React apps"]

            if (i < l){
                changePhraseState(phraseArray[i])
                i+=1
            }
            else {
                i = 0
                changePhraseState(phraseArray[i])
                i+=0
            }
            

        }, 3000)
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