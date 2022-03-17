import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'


const Homepage = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/parks')
  }
 
  return (
    <main>
      <div  className='Homepage'>
      <h1 className='Homepage__title'>US National Parks</h1>
      <p className='Homepage__subtitle'>Jump right in and explore most beautifull American National Parks</p>
      <button type='button' onClick={() => buttonHandler()} className='Homepage__entry-bnt'><span>View Parks</span></button>
      </div>
    </main>
  )
}

export default Homepage