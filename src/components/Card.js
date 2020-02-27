import React from 'react';
import Image from './Image';
import Car from './Car';
import Information from './Information';
import Stock from './Stock';
import Rrp from './RRP';

const Card = (props) =>{
    return(
      <div className="cards">
        <Image src={props.src} alt={props.alt} />
        <Car content={props.content} price={props.price} />
        <Information info={props.info}/>
        <Stock stock ={props.stock}/>
        <Rrp rrp={props.rrp}/>
      </div>
    )
  }

  export default Card;