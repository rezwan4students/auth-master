import React from 'react';
import notFound from '../../images/404-error-page-not-found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='NotFound-style'>
            <img width="550px" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;