import React, { useState } from 'react'
import fetchData from './httpClient'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Content from './Content/Content'

function App() {

  const [card, setCard] = useState('');

  const cardDisplayHandler = (id, name, descr, direct, lon, lat, link, photo, gallery) => {
    setCard({ id: id, name: name, descr: descr, direct: direct, lon: lon, lat: lat, link: link, photo:photo, gallery: gallery })
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/parks' element={<Content fetchData={fetchData} display={cardDisplayHandler}  card={card} />} />
        <Route path='/favourite' element={<Content />} />
      </Routes>
    </div>
  )
}

export default App