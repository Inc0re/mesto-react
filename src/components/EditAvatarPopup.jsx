import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({onClose, isOpen}) {
  return (
    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
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
  );
}

export default EditAvatarPopup;