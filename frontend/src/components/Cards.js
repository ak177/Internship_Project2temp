import React from 'react';
import './Cards.css';
import CardItem from './Card_new';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC ArtWorks!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Radha-Krishna.webp'
              text='Set Your Heart upon your work but never its reward'
              label='Religious'
              path='/products'
            />
            <CardItem
              src='images/dhoni.webp'
              text="You don't play for the crowd, you play for the country"
              label='Sports'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ganesha.webp'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='images/peacock.webp'
              text='The pride of the peacock is the glory of God'
              label='Nature'
              path='/products'
            />
            <CardItem
              src='images/watch.webp'
              text='Art is not what you see, but what you make others see'
              label='Wall Painting'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
