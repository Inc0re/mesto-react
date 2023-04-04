import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handelEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handelEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className='edit-form__wrapper'>
          <input
            className='edit-form__field'
            name='name'
            type='text'
            placeholder='Имя'
            required
            minLength='2'
            maxLength='40'
          />
          <span className='edit-form__error' />
        </div>
        <div className='edit-form__wrapper'>
          <input
            className='edit-form__field'
            name='job'
            type='text'
            placeholder='Место работы'
            required
            minLength='2'
            maxLength='200'
          />
          <span className='edit-form__error' />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name='add-place'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className='edit-form__wrapper'>
          <input
            className='edit-form__field'
            name='name'
            type='text'
            placeholder='Название'
            required
            minLength='2'
            maxLength='30'
          />
          <span className='edit-form__error' />
        </div>
        <div className='edit-form__wrapper'>
          <input
            className='edit-form__field'
            name='link'
            type='url'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='edit-form__error' />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name='edit-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className='edit-form__wrapper'>
          <input
            className='edit-form__field'
            name='link'
            type='url'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='edit-form__error' />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
    </>
  );
}

export default App;
