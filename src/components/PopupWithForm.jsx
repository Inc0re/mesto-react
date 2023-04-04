export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className='popup__container'>
        <button className='popup__close' type='button' onClick={props.onClose}/>
        <form
          action='#'
          className='edit-form'
          method='post'
          name={props.name}
          noValidate
        >
          <h2 className='edit-form__title'>{props.title}</h2>
          {props.children}
          <button className='edit-form__btn-save' type='submit'>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
