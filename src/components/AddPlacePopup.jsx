import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isAddPlacePopupOpen, closeAllPopups}) {
  return (
    <PopupWithForm
        name='add-place'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Создать'
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
  );
}

export default AddPlacePopup;