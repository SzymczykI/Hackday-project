import React, { useEffect, useState } from 'react'
import fetchData from './httpClient'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Content from './Content/Content'
import UseMyFavState from './hooks/useMyFavState';
import MyFav from './MyFav/MyFav'

const App = () => {
  const initialFav = JSON.parse(localStorage.getItem("myFav") || '[]')
  const { myFavs, myFavAdd, myFavRemove } = UseMyFavState(initialFav)

useEffect(() => {
  localStorage.setItem('myFav', JSON.stringify(myFavs))
}, [myFavs])

  const [card, setCard] = useState('');

  const cardDisplayHandler = (id, name, descr, direct, lon, lat, link, photo, gallery) => {
    setCard({ id, name, descr, direct, lon, lat, link, photo, gallery })
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/parks' element={<Content fetchData={fetchData} display={cardDisplayHandler}  card={card} 
        myFavs={myFavs} myFavAdd={myFavAdd} />} />
        <Route path='/favourites' element={<MyFav myFavRemove={myFavRemove} myFavs={myFavs}/>} />
      </Routes>
    </div>
  )
}

export default App