import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  

const Help = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    const classes = useStyles();
  return (
    <div className="mt-5">
        <Container style={{ color: "#eee", paddingTop: "5rem", fontSize: "1.2rem" }}>
            <Row>
                <div className={classes.root}>
            <Accordion>
            <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                How do I see the events?
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Login to view your events at Events Home <a target="_blank" href="/events">here</a>. View Technical events timeline <a target="_blank" href="/events-technical">here</a> and Cultural Events timeline <a target="_blank" href="/events-cultural">here</a>.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                How do I register at the event?
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Click on "Register" button in the timeline, or navigate to "More Details" to view the individual page. Click on "Register" therein to view the page.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                My friend has registered for an event. How do I join his team?
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Ask for the invite code from your teammate. Click on the "Join Team" button in the event details page to join his/her team.
                </Typography>
                </AccordionDetails>                
            </Accordion>
            <Accordion>
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                I am a club organizer. I want to check all the teams registered for my event. What should I do?
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Navigate to My Teams page here: <a  target="_blank" href="/myteams/">here</a>. Enter your event code and secret key to view the teams registered for your event. To get secret key, contact Shivaan Sehgal: 8529473299.
                    <br/>
                    Please do NOT share it to anyone else.
                </Typography>
                </AccordionDetails>                
            </Accordion>            
          </div>
          </Row>
      </Container>        

    </div>
  );
}

export default Help;
