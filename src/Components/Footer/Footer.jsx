import './footer.css';
import React from 'react';
import gitHub from '../../Images/GitHub-Mark-02.svg';
import linkEdin from '../../Images/linkedin.svg';

function Footer(){
    return (
        <section className="footer">
            <p> <span>Design & Front end by:</span> Jimmy Alejandro</p>
            <a href="https://github.com/iDeerBoy?tab=repositories" target="_blank" rel="noreferrer">
                <img src={gitHub} alt="github logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/jimmy-pulido/" target="_blank" rel="noreferrer">
                <img src={linkEdin} alt="linkein logo"></img>
            </a>
        </section>
    )
}

export default Footer;