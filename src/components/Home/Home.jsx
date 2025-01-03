import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link} from "react-router-dom";
import './home.css'
import MovieList from "../MovieList/MovieList";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  const filterMovies = popularMovies.filter((movie)=>{
    return movie.backdrop_path !== null
  })

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoFocus={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
        >
          {filterMovies.map((movie,index) => (
            <Link key={index} style={{textDecoration:"none",color:"white"}} to={`movie/${movie.id}`}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                />
              </div>
              <div className="posterImage_Overlay">
                <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                <div className="posterImage_runtime">
                  {movie ? movie.release_date: ""}
                  <span className="posterImage_rating">
                  <i className="fa-solid fa-star"></i>
                    {movie ? movie.vote_average: ""}
                  </span>
                </div>
                <div className="posterImage_description">{movie ? movie.overview: ""}</div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList/>
      </div>
    </>
  );
}

export default Home;
