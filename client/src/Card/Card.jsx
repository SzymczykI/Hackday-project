import React from 'react';
import './Card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ card, myFavAdd }) => {

  const addHandler = (e) => {
    e.preventDefault();
    myFavAdd(card.name, card.photo)
  }

  return (
    <article>
    <div className={(card) ? "card__show" : "card__notshow"}>
      <div className="tile">
        <img src={card.photo} alt={card.name} />
        <div className="text">
          <h1>{card.name}</h1>
          <p className="animate-text">{card.descr}</p>
          <h2 className="animate-text">directions</h2>
          <p className="animate-text">{card.direct}</p>
          <div className='link'>
        <a className="animate-text" href={card.link} target='_blank' rel="noreferrer">OFFICIAL PAGE</a>
          </div>
        <FavoriteIcon sx={{ fontSize: 50, opacity: 0.7 }} onClick={addHandler}/>
        </div>
      </div>
    </div>
    </article>

  )
}

export default Card;