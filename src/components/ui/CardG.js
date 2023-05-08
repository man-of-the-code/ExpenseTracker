import React from 'react' ;
import './CardG.css';

const CardG = (props) => {
    let classes = 'cardg ' + props.className 
  return (
    <div className={classes} >{props.children}</div>
  )
}

export default CardG