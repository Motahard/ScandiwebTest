import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>ItemPage</div>
  )
}
