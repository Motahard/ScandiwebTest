import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ShopItem } from '../shop-item/ShopItem'


import './shop.css'

const Shop = () => {
    const location = useLocation()

    const items = useSelector((state) => {
        const indexOfSlash = location.pathname.lastIndexOf('/');
        const value = location.pathname.slice(indexOfSlash + 1);
        return state[`${value}`];
    })

    if(!items) return <h2>Loading..</h2> 
    return (
        <div className='shop'>
            <h2 className='shop-title'>Category name</h2>
            <div className="category-items">
                {items.map((item, index) => <ShopItem item={item} key={item.id}/>)}
            </div>
        </div>
  )
}

export default Shop;