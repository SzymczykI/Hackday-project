import React from 'react'
import './Favs.css'

const Favs = ({ name, img }) => {

  return(
    <div className="polaroid">
  <img src={img} alt={name}></img>
  <div className="container">
  <p>{name}</p>
  </div>
 </div>
  )
} 

export default Favs;