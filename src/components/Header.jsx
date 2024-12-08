import React from 'react'
import { Link } from 'react-router-dom'

const Header=()=> {
  return (
    <header className="flex font-bold text-white bg-black gap-10 pl-10 p-3 border-solid border-2 border-black w-full">
        <h1 className="text-red-700 text-2xl">
        FilmVault
        </h1>
        <Link to="movies/popular" style={{textDecoration: "none"}}>Popular</Link>
        <Link to="movies/top_rated" style={{textDecoration: "none"}}>Top rated</Link>
        <Link to="movies/upcoming" style={{textDecoration: "none"}}>Upcoming</Link>
        {/* <input type="search" className="rounded-xl w-4/12 text-black p-1" /> */}
      </header>
  )
}

export default Header