import React, { useState } from 'react'
import './currency-showdown.css'

export const CurrencyShowdown = ({ activeShowdownCurrency }) => {
  return (
    <div className={`currency-showdown ${activeShowdownCurrency ? 'visibleCurrency' : 'unvisibleCurrency'}`}>
        <p className='active-currency'>$ USD</p>
        <p>€ EUR</p>
        <p>¥ JPY</p>
    </div>
  )
}
