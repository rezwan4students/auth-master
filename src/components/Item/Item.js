import React from 'react';

const Item = (params) => {
    const {id, title, price, desc} = params.s;
    return (
        <div>
            <p> ID: {id}</p>
            <p> Item: {title}</p>
        </div>
    );
};

export default Item;