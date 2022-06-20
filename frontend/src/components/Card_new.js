
import React from 'react';
import { Link } from 'react-router-dom';


function Card_new(props) {
    var clas="cards__item "
  clas=clas+(props.cl ?`${props.cl}`:"")
  var pr=props.price?`Rs. ${props.price}`:null;
  return (
    <>
      <li className={clas}>
        <Link className='cards__item__link' to={props.path && null}>
          <figure className='cards__item__pic-wrap' data-category={props.label || pr }>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card_new