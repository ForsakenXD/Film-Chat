import React,{ Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'

class App extends Component {
  constructor(){
    super()
    console.log("This is my initializer")

    const movies = [
      {id: 0,poster_src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",title:"Avengers:The endgame",overview:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},
      {id: 1,poster_src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",title:"Avengers",overview:"This is my second overview"},

]

    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      let movieRow = <MovieRow movie={movie}/>
      movieRows.push(movieRow)
    })

    this.state = {
      rows:movieRows
    }

  }
  render(){
  return (
    <div >
      <header>
          <nav id="navbar">
              <img alt="film-chat icon" width="50" height="50" src="Media/Images/Film-icon.png"  />
              <h1 className = "item">Movies DB Search</h1>
          </nav>
      </header>
      <input className="searchBar" placeholder="Enter Search Term" />
      {this.state.rows}
    </div>
  );
}}

export default App;
