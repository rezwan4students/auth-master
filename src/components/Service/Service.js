import React from 'react';
import './Service.css';
import { useNavigate } from "react-router-dom";

const Service = (params) => {
    let itemIDs = JSON.parse(localStorage.getItem('services') ) || [];
    let navigate = useNavigate(); 

    const goToCheckOut = (id) =>{
        let path = "/checkout/"; 
        navigate(path);
        itemIDs.push(id.id);
        localStorage.setItem("services", JSON.stringify(itemIDs));
        
           }

    const {title,img,desc,price,id} = params.service;
    return (
        <div className='service-style'>
           <h3 style={{color:'grey'}}> {title} </h3>
           <img src={img} alt="" /> <br/>
           <p>{desc}</p>
           <h3 style={{color:'grey'}}>Price: {price} taka</h3>
           <br/><br/>
           <button onClick={()=>goToCheckOut({id})}className="btn-style"> <span className='btn-text'><b>Avail This Service </b></span></button>
        </div>
    );
};

export default Service;