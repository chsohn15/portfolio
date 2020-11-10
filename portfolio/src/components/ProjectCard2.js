import React, { useState } from 'react'
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
import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';


import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  paper: {
    border: '1px solid',
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProjectCard2 = () => {

  const [isOpen, openModal] = useState(false)

  const classes = useStyles();
  const theme = useTheme();

  // Code for stepper 1
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Code for popper
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


return (
<Container style={{marginTop: "60px"}}>
  <Card>
    <Row>
      <Col sm={5} style={{marginLeft: '0px'}}>
        <Card.Body>
          <Card.Title>The Harry Potter Writing App
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='IDtMxssicik' onClose={() => openModal(false)} />
            <YouTubeIcon onClick={openModal} style={{cursor: 'pointer', fontSize: '30px', marginLeft: '15px'}}>Youtube</YouTubeIcon>
            <GitHubIcon style={{ marginLeft: '10px'}} aria-describedby={id} type="button" onClick={handleClick}/>
            <Popper id={id} open={open} anchorEl={anchorEl} >
              <Typography anchorEl={anchorEl} onClick={() => {
                handleClick()
                window.open("https://github.com/chsohn15/book_quest_frontend/tree/master/book-quest-react", "_blank")}} className={classes.paper} style={{cursor: 'pointer'}}>Github Frontend</Typography>
              <Typography anchorEl={anchorEl} onClick={() => {
                handleClick()
                window.open("https://github.com/chsohn15/book_quest_backend", "_blank")}} className={classes.paper} style={{cursor: 'pointer'}}>Github Backend</Typography>
          </Popper>
          </Card.Title>
          <Card.Text>
          <em>An app designed to engage students in writing and connect students with their teachers</em><br/><br/>
          <div>Technologies: </div>
          <ul>
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>JSON Web Tokens, OAuth</li>
            <li>Material UI, Bootstrap, Semantic UI, CSS</li>
          </ul>
          </Card.Text>
        </Card.Body>
      </Col>
      <Col sm={7} >
      <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        style={{marginRight: '0px'}}
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
    </Row>
  </Card>

  </Container>

            
    )
}

export default ProjectCard2