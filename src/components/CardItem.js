import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({item}) => {
  return (
    <div className='col-sm-6 col-lg-3'>
  <Link to={`/product/${item.id}`}>
  <div className='card my-3'>
<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
<div className='card-desc'>
  <div className='card-desc-info'>
  <h6 className='mb-2'>اسم الفيلم:</h6> 
  <h6 className='mb-2'>تاريخ الاصدار:</h6>
  <h6 className='mb-2'>عدد المقيمين:</h6>
  <h6 className='mb-2'>التقييم:</h6>
  </div>
</div>
        </div>
  </Link>
    </div> 
  )
}

export default CardItem
