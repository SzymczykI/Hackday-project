import React from 'react'
import Favs from './Favs'
import './MyFav.css'

const myFav = ({ myFavs, myFavRemove }) => {

  const favourites = myFavs.map((item, index) => <Favs  myFavs={myFavs} myFavRemove={myFavRemove} key={index} name={item.name} 
  id={item.id} img={item.image}/>)

  return(
    <div>
      <header className='myFav__heeader'>
        <h1>My Favourites Parks</h1>
      </header>
      <div className='myFav__list-container'>
      {favourites}
      </div>
    </div>
  )
} 

export default myFav;