import React from 'react'
import ParkList from '../ParkList/ParkList'
import Card from '../Card/Card'
import './Content.css'

const Content = ({fetchData, display, card}) => {

 
  return (
    <div>
      <main className='main'>
        <nav className='sidebar'>
          <ParkList fetchData={fetchData} display={display} />
        </nav>
        <div className='content'>
          <Card card={card} />
        </div>
      </main>
    </div>
  )
}

export default Content