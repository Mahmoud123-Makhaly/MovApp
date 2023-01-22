import React from 'react'
import Notfound from '../Notfound'
import CardItem from './CardItem'
import Paginate from './Paginate'
const CardList = ({product,getPage , pageCount}) => {
  return (
  <div className='container'>
      <div className='row'>
      {
        product.length?(
          product.map((item)=>{
return(<CardItem item={item} key={item.id}/>)
          })
        ):(<Notfound/>)
      }
    </div>
{product.length?(    <Paginate getPage={getPage} pageCount={pageCount}/>):(null)
}
  </div>
  )
}

export default CardList
