import React, { useEffect, useState } from 'react';
import imm from '../../images/immigration-banner.jpg';
import Client from '../Client/Client';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [clients, setClients] = useState([]);
    useEffect(()=>{
        fetch('clients.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
    } ,[])

    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json() )
        .then(data =>setServices(data))
    } ,[]);

    console.log(services.length);
    return (

        <div>
            <div className='servicesStyle'>
                <div>
                    <img src={imm} alt="immigration banner" />
                </div>
                <div className='banner-text'>
                    <h2>RA Immigration Consultancy Services</h2>
                    <hr />
                    <h4>Your 1 stop solution provider for Immigration Consultany Needs!</h4>
                </div>

            </div>

            <h2>&nbsp; &nbsp; &nbsp; &nbsp; Service List:</h2>
            <div className='service-section'>
             {
                 services.map(service=><Service key={service.id} service={service}></Service>)
             }
            </div>


            <h2>&nbsp; &nbsp; &nbsp; &nbsp;Clients Testimonials</h2>
           <div className="testimony-section">
               {
                   clients.map(client=> <Client key={client.id} client={client}></Client>)
               }

           </div>


        </div>
    );
};

export default Services;