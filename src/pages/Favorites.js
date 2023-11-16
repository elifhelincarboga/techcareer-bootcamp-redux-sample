import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../store/modules/product'

function Favorites() {
  const favorites = useSelector(state => state.product.favorites);
  const dispatch = useDispatch()

  const handleOnClick = (name) => {
    dispatch(removeFavorite(name))
  }

  return (
    <>
      {
        favorites.map((item, i) => {
          return <div key={i}>
            { item } <button onClick={() => handleOnClick(item)}>Remove</button>
          </div>
        })
      }
    </>
  )
}

export default Favorites