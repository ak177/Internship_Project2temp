import React from 'react';
import { Link } from 'react-router-dom';

function Card_Item(props) {

  var clas="cards__item "
  clas=clas+(props.cl ?`${props.cl}`:"")
  var pr=props.price?`Rs. ${props.price}`:null;
  {console.log(props.imageUrl)}
  return (
    
    <>
      <li className={clas}>
        {/* <Link className='cards__item__link' to={props.path && null}> */}
          <figure className='cards__item__pic-wrap' data-category={props.label || pr }>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.imageUrl}
            />
          </figure>

          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.description}</p>
          </div>
          <Link to={`/product/${props.productId}`} className="info__button">
          View
        </Link>
        {/* </Link> */}
      </li>
    </>
  );
}

export default Card_Item;
