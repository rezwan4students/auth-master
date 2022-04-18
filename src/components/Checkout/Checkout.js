import React, { useEffect,useState } from 'react';


import { useHistory, useNavigate, useParams } from 'react-router-dom'
import Item from '../Item/Item';

import './Checkout.css';

const Checkout = () => {

    
    
   
    const fromLocal = JSON.parse(localStorage.getItem('services'))||[];
    

    

    return (
        <div>
            <h3>You have added the following item(s) in your cart:</h3>
            
            
            <div className='selected'>
                { fromLocal.map(selected=><Item key={selected.id} selected={selected}></Item>)
                }
               

              
            </div>
        </div>
    );
};

export default Checkout;