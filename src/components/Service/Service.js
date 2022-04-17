import React from 'react';
import './Service.css';

const Service = (params) => {
    const {title,img,desc,price} = params.service;
    return (
        <div className='service-style'>
           <h3 style={{color:'grey'}}> {title} </h3>
           <img src={img} alt="" /> <br/>
           <p>{desc}</p>
           <h3 style={{color:'grey'}}>Price: {price} taka</h3>
           <button> purchase ...</button>
        </div>
    );
};

export default Service;