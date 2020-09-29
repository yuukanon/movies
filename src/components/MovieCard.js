import React from 'react';

const MovieCard = ({ movieInfo, addToFavorite }) => {

  return (
    <div className="movieCard">
      <img src={movieInfo.posterUrl} 
      alt="movie poster" 
      onError={(e)=>{e.target.onerror = null; e.target.src="https://images.app.goo.gl/GVwTrFw9mTmTDEJ66"}}/>
      <div>{movieInfo.title}</div>
      <div>{movieInfo.genres}</div>
      <div>{movieInfo.plot}</div>
      <button onClick={() => addToFavorite(movieInfo)}>Add to Favorite</button>
    </div>
  )
}

export default MovieCard;