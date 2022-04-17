import React from 'react';
import './About.css';
import lady from '../../images/lady.jpg'

const About = () => {
    return (
        <div className='about-style'>
            <p>Hi, this is Raina Alia. I am a 2nd year BBA student at BUP. I have huge passion for web development. I hope to learn web dev this year. Before I graduate, I would love to have good skills aquired with React JS and other relevant web technologies. I'm dadicated and hardworking. I love to make friends and watch movies!</p>
            <img src={lady} alt="" />
            
        </div>
    );
};

export default About;