import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ReactPlayer from "react-player"
import BookQuest1 from '../images/BookQuest1.jpeg'
import BookQuest2 from '../images/BookQuest2.jpeg'
import BookQuest3 from '../images/BookQuest3.jpeg'
import BookQuest4 from '../images/BookQuest4.jpeg'
import BookQuest5 from '../images/BookQuest5.jpeg'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    imgPath: BookQuest1,
  },
  {
    imgPath: BookQuest2,
  },
  {
    imgPath: BookQuest3,
  },
  {
    imgPath: BookQuest4,
  },
  {
    imgPath: BookQuest5,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
  },
  img: {
    maxWidth: 600,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

const ProjectCard = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


return (
<Container >
  <Card>
    <Row>
      <Col sm={7}>
      <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
      </Col>
      <Col sm={4} style={{marginLeft: '0px'}}>
        <Card.Body>
          <Card.Title>BookQuest</Card.Title>
          <Card.Text>
          <em>An app designed to motivate young people to read and interact with books through a rewards system</em><br/><br/>
          <div>Technologies: </div>
          <ul>
            <li>React and Redux</li>
            <li>Ruby on Rails</li>
            <li>Google Books API and Embedded Viewer</li>
            <li>JSON Web Tokens, OAuth</li>
            <li>Material UI, Bootstrap, CSS</li>
          </ul>
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>

  <Card style={{marginTop: "60px"}}>
    <Row>
      <Col>
    <Card.Body>
      <Card.Title>The Harry Potter Writing App</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    </Col>
    <Col>
      <div style={{width: '100%'}}>
    <ReactPlayer 
        url="https://youtu.be/IDtMxssicik"
      />
      </div>
      </Col>
  </Row>
  </Card>

  <Card style={{marginTop: "60px"}}>
    <Row>
        <Col>
      <div style={{width: '100%'}}>
    <ReactPlayer 
        url="https://youtu.be/Bf8jipkXKlU"
      />
      </div>
      </Col>
      <Col>
    <Card.Body>
      <Card.Title>{"K & C Art Gallery"}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    </Col>
  </Row>
  </Card>
  </Container>

            
    )
}

export default ProjectCard