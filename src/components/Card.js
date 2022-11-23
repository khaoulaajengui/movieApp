import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      {
        data.map((movie, i) => (

          <div className="movie" key={i}>
            <img src={movie.poster} alt="movie" />
            <h3 >{movie.title} </h3>
            <p >{movie.description} </p>
            <hr></hr>
            <h6 > recommandé à {movie.rating} % </h6>


          </div>


        ))
      }

    </div>
  )
}

  ;



export default MovieCard;