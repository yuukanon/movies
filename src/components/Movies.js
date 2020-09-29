import React from 'react';
import MovieCard from './MovieCard'

const Movies = ({ moviesInfo, addToFavorite }) => {
  // console.log(moviesInfo)
  return (
    <div className="movieList">
      { moviesInfo.map(movie => <MovieCard movieInfo={movie}
      addToFavorite={addToFavorite} />)}
    </div>
  )
}

export default Movies;