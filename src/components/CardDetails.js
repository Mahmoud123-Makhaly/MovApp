import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import man from "../images/man.jpeg"
const CardDetails = () => {
    const[item , setItem] = useState([])
    const param = useParams()
 const myDetails = async()=>{
    await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
    .then(response => response.json())
    .then(json =>setItem(json))
 }
 useEffect(()=>{myDetails()} , [])
  return (
<div className='details p-3'>
    <div className='details-top'>
        <img src={man} className="mx-4"/>
        <div className='details-top-desc'>
            <h5>FilmName:{item.title}</h5>
            <h5>ReleaseDate:{item.release_date}</h5>
            <h5>voteCount:{item.vote_count}</h5>
            <h5>vote_average:{item.vote_average}</h5>
        </div>
    </div>
    <div className='details-center p-3 py-3'>
        <h4>Story:</h4>
        <h6>{item.overview}</h6>
        </div>
        <div className='details-btn py-4 justify-content-center d-flex'>
         <Link to="/">   <button className='btn btn-primary mx-1'>Go To Home</button></Link>
         <a href={item.homepage}>   <button className='btn btn-primary mx-1'>Show Film</button></a>
        </div>
        </div>
  )
}

export default CardDetails
