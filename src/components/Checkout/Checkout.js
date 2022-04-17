import React, { useEffect,useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import Item from '../Item/Item';

import './Checkout.css';

const Checkout = () => {
    const selected = JSON.parse(localStorage.getItem('services'));
    console.log('selected:', selected);

    const [services, setServices] = useState([])

    useEffect(()=>{
             fetch('services.json')
             .then(res=>res.json() )
             .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h2>You have added the following item(s) in your cart:</h2>
            <div className='selected'>
               <h3>Total Due:    {services[selected[0]-1]?.price} taka </h3>
               <p>Service ID: <b>{selected[0]}</b></p>
               <p>Service Title: <b>{services[selected[0]-1]?.title}</b></p>
               <p>Service Description: <b>{services[selected[0]-1]?.desc}</b></p>

              
            </div>
        </div>
    );
};

export default Checkout;