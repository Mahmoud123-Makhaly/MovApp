import React from 'react'
import logo from "../images/logo.png"
const Navs = ({getSearch}) => {
  const onSearch = (word)=>{
getSearch(word)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="#" style={{color:"#fff"}}>
<a href="/"><img src={logo} className="nav-img"/></a>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
        <form className="d-flex nav-form" role="search">
          <input onChange={(e)=>{onSearch(e.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navs
