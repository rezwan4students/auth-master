import React from 'react';
import './Client.css';

const Client = (params) => {
    const {text, img,name} = params.client
    return (
        <div className='client-style'>
            <h4>Client: {name}</h4>
            <div style={{display:'flex'}}>
            <img src={img} alt="client pic"/><br/>
            <p>"{text}"</p>
            </div>
            
        </div>
    );
};

export default Client;