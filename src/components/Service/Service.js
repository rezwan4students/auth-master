import React from 'react';
import './Service.css';
import { useNavigate } from "react-router-dom";

const Service = (props) => {
    let newItem = props.service;
    console.log("service from props", props.service);
    let items = JSON.parse(localStorage.getItem('services') ) || [];
    let navigate = useNavigate(); 

    const goToCheckOut = (item) =>{
        let path = "/checkout/"; 
        navigate(path);
        items.push(props.service);
        localStorage.setItem("services", JSON.stringify(items));
        
           }

    const {title,img,desc,price,id} = props.service;
    return (
        <div className='service-style'>
           <h3 style={{color:'grey'}}> {title} </h3>
           <img src={img} alt="" /> <br/>
           <p>{desc}</p>
           <h3 style={{color:'grey'}}>Price: {price} taka</h3>
           <br/><br/>
           <button onClick={()=>goToCheckOut({newItem})}className="btn-style"> <span className='btn-text'><b>Avail This Service </b></span></button>
        </div>
    );
};

export default Service;