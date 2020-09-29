import React from 'react';
import MovieCard from './MovieCard';

const Favorite = (favoriteInfo) => {
  // console.log(moviesInfo)
  return (
    <div className="movieList">
     {favoriteInfo.map(favorite => <MovieCard 
     movieInfo={favorite} 
     key={favorite.id} />)} 
    </div>
  )
}

export default Favorite;