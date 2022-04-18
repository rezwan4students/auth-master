import React from 'react';
import './Item.css';

const Item = (props) => {
    const{id,title, desc, price, img} = props.selected;
    return (
        <div className='item-style'>
          <h4> Service Title: <span style={{color:'red'}}>{title}</span></h4>
          <p>Service ID: {id}</p>
          <p> {desc}</p>
          <p>Price: {price} taka</p>
        </div>
    );
};

export default Item;