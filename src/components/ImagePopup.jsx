export default function ImagePopup({card, onClose}) {
  return (
    <div
      className={`popup popup_bg-opacity_90 ${
        card ? 'popup_opened' : null
      }`}
      id='picture-popup'
    >
      <figure className='popup__image-figure'>
        <button
          className='popup__close'
          type='button'
          onClick={onClose}
        />
        <img
          alt={card && card.name}
          className='popup__image'
          src={card && card.link}
        />
        <figcaption className='popup__image-caption'>
          {card && card.name}
        </figcaption>
      </figure>
    </div>
  );
}
