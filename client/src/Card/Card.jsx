import React from 'react';
import './Card.css'


const Card = ({ card }) => {


  return (
    <article>
    <div className={(card) ? "card__show" : "card__notshow"}>
      <div className="tile">
        <img src={card.photo} alt={card.name} />
        <div className="text">
          <h1>{card.name}</h1>
          <p className="animate-text">{card.descr}</p>
          <h2 className="animate-text">DIRECTIONS</h2>
          <p className="animate-text">{card.direct}</p>
          <div className='link'>
        <a className="animate-text" href={card.link} target='_blank' rel="noreferrer">OFFICIAL PAGE</a>
          </div>
        </div>
      </div>
    </div>
    </article>

  )
}

export default Card;