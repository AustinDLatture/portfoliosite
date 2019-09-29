import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import suitshot2 from '../images/suitshot2.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Austin D. Latture</h2>
                        <hr/>
                        <img 
                            className="avatar-img-contact"
                            src={suitshot2}
                            alt="avatar"
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            My journey as a developer has been unconventional. In college I was able to embrace my passion for science through my studies of biomedical science. Upon graduation, I felt a desire to be creative and inventive. I wanted to solve real problems and then build those solutions.
                        </p>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            This desire to create drove me deeper into another passion of mine: technology. In this realm, I discovered a fulfilling and challenging blend of science and art that has left me embracing a whole new career path.
                        </p>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I wish to design, engineer, and implement solutions on the largest possible scale throughout this career that I have been so fortunate to discover.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me </h2>
                        <hr/>
                        <List className="contact-list">
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: 'white', justifyContent: 'left'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    austin.latture@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: 'white', justifyContent: 'left'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (810) 965-6026
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', justifyContent: 'left'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    <a 
                                        style={{color: 'white'}}
                                        href="https://www.linkedin.com/in/austin-latture-448a0a99/" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                    > 
                                        LinkedIn
                                    </a>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;