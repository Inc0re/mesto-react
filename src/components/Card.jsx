import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? 'element__like_active' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className='element'>
      {isOwn && <button type='button' className='element__delete' />}
      <img
        className='element__image'
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className='element__control'>
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__like-wrapper'>
          <button type='button' className={cardLikeButtonClassName}></button>
          <p className='element__like-counter'>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
