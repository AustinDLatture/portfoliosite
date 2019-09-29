import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import suitshot from '../images/suitshot.jpg'
import resume from '../images/Resume2019Sept29PDF.pdf'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={suitshot}
                            alt="avatar"
                            className="avatar-img"
                        />    
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | Redux | Node.js | Python | Java | Flutter</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/austin-latture-448a0a99/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Resume */}
                                <a href={resume} download>
                                    <i className="fa fa-file-pdf-o" aria-hidden="true"/>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/AustinDLatture" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;