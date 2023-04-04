import React from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCurrentUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });

    api.getInitialCards().then(data => {
      setCards(data);
    });
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div
          className='profile__avatar'
          style={{
            backgroundImage: `url(${userAvatar})`,
          }}
        >
          <button
            className='profile__avatar-edit'
            onClick={props.onEditAvatar}
          />
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <button
            className='profile__edit-button'
            onClick={props.onEditProfile}
            type='button'
          />
          <p className='profile__job'>{userDescription}</p>
        </div>
        <button
          className='profile__add-button'
          onClick={props.onAddPlace}
          type='button'
        />
      </section>
      <section>
        <ul className='elements'>
          {cards.map(card => {
            return <Card card={card} key={card._id} />;
          })}
        </ul>
      </section>
    </main>
  );
}
