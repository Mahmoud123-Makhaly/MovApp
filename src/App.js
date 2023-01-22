import Reac, { useEffect, useState } from 'react'
import Navs from './components/Navs'
import CardList from "./components/CardList"
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import CardDetails from './components/CardDetails'

const App = () => {
const[product , setProduct] = useState([])
const[pageCount , setPageCount] = useState(0)
//Get All People
const getAllProduct = async()=>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=52ef927bbeb21980cd91386a29403c78&language=enn`)
  setProduct(res.data.results)
setPageCount(res.data.total_pages)
}
useEffect(()=>{getAllProduct()} , [])
//search In Movies
const getSearch = async(word)=>{
  if(word===""){
    getAllProduct()
  }
else{
  const res = await axios.get(`
  https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&query=${word}`)
setProduct(res.data.results)
setPageCount(res.data.total_pages)
}
}
//pagination
const getPage = async(page)=>{
  const res = await axios.get(`
  https://api.themoviedb.org/3/movie/top_rated?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`)
setProduct(res.data.results)
setPageCount(res.data.total_pages)
}
  return (
    <div>
   <Navs getSearch={getSearch}/>
<Routes>
<Route path='/' element={<CardList product={product} getPage={getPage} pageCount={pageCount}/>}/>
<Route path='/product/:id' element={<CardDetails/>}/>
</Routes>

   </div>

  )
}

export default App
