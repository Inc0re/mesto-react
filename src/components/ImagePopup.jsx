export default function ImagePopup(props) {
  return (
    <div
      className={`popup popup_bg-opacity_90 ${
        props.card ? 'popup_opened' : null
      }`}
      id='picture-popup'
    >
      <figure className='popup__image-figure'>
        <button className='popup__close' type='button' onClick={props.onClose}/>
        <img
          alt=''
          className='popup__image'
          src={props.card && props.card.link}
        />
        <figcaption className='popup__image-caption'>
          {props.card && props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}
