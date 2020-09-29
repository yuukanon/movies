import React from 'react';
import Movies from './Movies';

const Home = ({movies}) => {
  return (
    <div>
      <Movies movies={movies} />
    </div>
  )
}

export default Home;