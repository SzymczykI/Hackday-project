import React, { useEffect } from 'react'
import './Favs.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Favs = ({ name, img, id, myFavRemove, myFavs }) => {

  const clickHandler = () => {
    myFavRemove(id)
  }
  useEffect(() => {
    localStorage.setItem('myFav', JSON.stringify(myFavs))
  }, [myFavs])

  return(
    <div  className="polaroid">
  <img onClick={clickHandler} src={img} alt={name}></img>
  <div className="container">
  <p>{name}</p>
      <HighlightOffIcon onClick={clickHandler} />
  </div>
 </div>
  )
} 

export default Favs;