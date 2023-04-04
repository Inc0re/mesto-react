export default function Card(props) {
  return (
    <li className='element'>
      <button type='button' className='element__delete' />
      <img className='element__image' alt='' src={props.card.link} />
      <div className='element__control'>
        <h2 className='element__title'>{props.card.name}</h2>
        <div className='element__like-wrapper'>
          <button type='button' className='element__like'></button>
          <p className='element__like-counter'>{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}