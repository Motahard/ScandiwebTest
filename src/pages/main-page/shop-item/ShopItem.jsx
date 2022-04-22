import React from 'react'
import { Link } from 'react-router-dom'
import { ShopItemIcon } from './ShopItemIcon'
import './shop-item.css'

export const ShopItem = ({ item }) => {
  return (
    <div className='item'>
        <Link to={`/clothes/${item.id}`}>
          <div className="imgDress">
            <img src={item.srcImg} alt='clothes'/>
          </div>
        </Link>
        <p className='dressName'>{item.name}</p>
        <p className='dressPrice'>$ {item.price.toFixed(2)}</p>
        <div className='addToCart'>
          <ShopItemIcon/>
        </div>
    </div>
  )
}
