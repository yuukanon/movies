import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Favorite from './components/Favorite';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moviesInfo: [],
      myFavorite:[],
    }
    
  }

  componentDidMount() {
    fetch(`https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`)
      .then(res=> res.json())
      .then(data => this.setState({ 
        moviesInfo: data.movies,
        myFavorite: [],
       })
       )

  };

  addToFavoriteHandler = (clickedMovie) => {
    // console.log('clicked')

    this.setState({ favoriteInfo: [... this.state.favoriteInfo, clickedMovie]})
  }
 

  render() {
    const {moviesInfo, favoriteInfo} = this.state
    return (
      <div className="App">
        <Movies addToFavorite={this.addToFavoriteHandler}moviesInfo={moviesInfo}/>
        <Favorite favoriteInfo={favoriteInfo} />
      </div>
    );

  }

}

export default App;
