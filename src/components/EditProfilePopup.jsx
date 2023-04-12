import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className='edit-form__error' />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
