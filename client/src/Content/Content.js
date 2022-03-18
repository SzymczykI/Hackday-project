import React from 'react'
import ParkList from '../ParkList/ParkList'
import Card from '../Card/Card'
import './Content.css'
import { useNavigate } from 'react-router-dom'

const Content = ({fetchData, display, card, myFavAdd}) => {

  const navigate = useNavigate();

  const myFavButton = () => {
    navigate('/favourites')
  }
 
  return (
    <div>
       <header className='myFav__heeader'>
        <h1>America's 20 Most Popular National Parks</h1>
      </header>
      <main className='main'>
        <nav className='sidebar'>
          <ParkList fetchData={fetchData} display={display} />
      <button onClick={() => myFavButton()}><span>My Favourite Parks Gallery</span></button>
        </nav>
        <div className='content'>
          <Card card={card} myFavAdd={myFavAdd}/>
        </div>
      </main>
    </div>
  )
}

export default Content