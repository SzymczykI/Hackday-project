import React from 'react'
import ParkList from './ParkList/ParkList'
import fetchData from './httpClient'

const App = () => {


  return (
    <div>
      <ParkList fetchData={fetchData}/>
    </div>
  )
}

export default App