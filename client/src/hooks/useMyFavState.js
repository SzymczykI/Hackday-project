import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const UseMyFavState = (initialFav) => {

  const [myFavs, setMyFavs] = useState(initialFav);
  return {
    myFavs,
    myFavAdd: (name, image) => {
      setMyFavs(prevFav => [...prevFav,
      {id: uuidv4(), name: name, image: image}
    ])   
    },
    myFavRemove: (id) => {
      const updateFav = myFavs.filter(fav => fav.id !== id)
      setMyFavs(updateFav)
    }
  }
}

export default UseMyFavState;