import React from 'react';
import imm from '../../images/immigration-banner.jpg';
import './Services.css';

const Services = () => {
    return (
        <div className='servicesStyle'>
            <div>
                  <img src={imm} alt="immigration banner" />
            </div>
            <div>
                <h3>RA Immigration Consultancy Services</h3>
                <h4>Out 1 stop solution provider for Immigration Consultany Needs!</h4>
            </div>


            

        </div>
    );
};

export default Services;