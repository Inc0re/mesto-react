import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
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
  );
}

export default EditProfilePopup;