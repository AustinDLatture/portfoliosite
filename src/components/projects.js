import React, { Component } from 'react';
import { 
    Cell, 
    Card, 
    Button,
    CardTitle, 
    CardText,
    CardActions, 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,  
    Tabs, 
    Tab, 
} from 'react-mdl';

import reactLogo from '../images/reactLogo.jpg'
import truck from '../images/truck.jpg'
import nodeLogo from '../images/nodeLogo.jpg'
import mapsLogo from '../images/mapsLogo.jpg'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0, openDialog: false };
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.openGitHubLink = this.openGitHubLink.bind(this);
    }

    handleOpenDialog() {
        this.setState({
          openDialog: true
        });
    }
    
    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    openGitHubLink(target) {
        let url = "";
        switch(target) {
            case "backdrop":
                url = 'https://github.com/AustinDLatture/Backdrop'
                window.open(url, '_blank');
                break;
            case "portfolio":
                url = 'https://github.com/AustinDLatture/portfoliosite'
                window.open(url, '_blank');
                break;
            case "basicchat":
                url = 'https://github.com/AustinDLatture/BasicChat'
                window.open(url, '_blank');
                break;
            default:
                break;
        }
    }


    toggleCategories() {
        switch(this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{margin: 'auto', width: '25%'}}>
                            <CardTitle style={{color: 'white', height: '176px', background: `url(${reactLogo}) center / cover`}}>
                                Personal Website
                            </CardTitle>
                            <CardText>
                                This website has been developed in React using react-mdl components.
                            </CardText>
                            <CardActions border>
                                <Button colored onClick={ () => this.openGitHubLink('portfolio')}>GitHub</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={5} style={{margin: 'auto', width: '25%'}}>
                            <CardTitle style={{color: 'white', height: '176px', background: `url(${truck}) center / cover`}}>
                                FreightBuilder
                            </CardTitle>
                            <CardText>
                                A logistics industry web application used by thousands of people that allows them to plan and manage shipments as they are built into loads and shipped worldwide.
                            </CardText>
                            <CardActions border>
                                <Button colored onClick={this.handleOpenDialog} ripple>About</Button>
                            </CardActions>
                            <Dialog style={{width: '35%'}}open={this.state.openDialog}>
                                <DialogTitle>Employer Property</DialogTitle>
                                <DialogContent>
                                    <p>
                                        I am fortunate enough to be a part of a team of developers working on this product for our employer and therefore I cannot disclose any additional information about it. 
                                    </p>
                                </DialogContent>
                                <DialogActions>
                                    <Button type='button' onClick={this.handleCloseDialog}>Understood</Button>
                                </DialogActions>
                            </Dialog>
                        </Card>
                        <Card shadow={5} style={{margin: 'auto', width: '25%'}}>
                            <CardTitle style={{color: 'white', height: '176px', background: `url(${reactLogo}) center / cover`}}>
                                Next Project
                            </CardTitle>
                            <CardText>
                                My next React project is a secret, but it is coming soon.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                        </Card>
                    </div>
                );
            case 1:
                return (
                    <Card shadow={5} style={{margin: 'auto', width: '25%'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: `url(${nodeLogo}) center / cover`}}>
                            BasicChat
                        </CardTitle>
                        <CardText>
                            A simple, real-time chat application using socket.io for learning web sockets.
                        </CardText>
                        <CardActions border>
                            <Button colored onClick={ () => this.openGitHubLink('basicchat')}>GitHub</Button>
                        </CardActions>
                    </Card>
                );
            case 2:
                return (
                    <Card shadow={5} style={{margin: 'auto', width: '25%'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: `url(${mapsLogo}) center / cover`}}>
                            Backdrop
                        </CardTitle>
                        <CardText>
                            A mobile application that allows users to discover amazing places to take photos with their friends and family utilizing the Google Maps SDK and Google Places API.
                        </CardText>
                        <CardActions border>
                            <Button colored onClick={ () => this.openGitHubLink('backdrop')}>GitHub</Button>
                        </CardActions>
                    </Card>
                );
            default:
                return (
                <div><h1> PROJECTS </h1></div>
                );
        }
    }

    render() {
        return (
            <div className="category-tabs general-gradient">
                <Tabs
                    style={{fontFamily: 'Anton, sans-serif'}} 
                    activeTab={this.state.activeTab} 
                    onChange={(tabId) => this.setState({ activeTab: tabId})} 
                    ripple
                >
                    <Tab style={{color: 'white'}}>React</Tab>
                    <Tab style={{color: 'white'}}>Node.js</Tab>
                    <Tab style={{color: 'white'}}>Flutter</Tab>
                </Tabs>

                <section>
                    <Grid className="projects/grid">
                        <Cell col={12}>
                            <div className="content"/>
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default Projects;