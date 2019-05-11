import React,{ Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'

class App extends Component {
  constructor(){
    super()
    this.state = {}
    // console.log("This is my initializer")

//     const movies = [
//       {id: 0,poster_src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",title:"Avengers:The endgame",overview:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},
//       {id: 1,poster_src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",title:"Avengers",overview:"This is my second overview"},
//
// ]
//
//     let movieRows = []
//     movies.forEach((movie) => {
//       console.log(movie.title)
//       let movieRow = <MovieRow movie={movie}/>
//       movieRows.push(movieRow)
//     })
//
//     this.state = {
//       rows:movieRows
//     }

      this.performSearch = this.performSearch.bind(this)
      //this.searchChangeHandler = this.searchChangeHandler.bind(this)


  }
  performSearch(searchTerm){
    console.log("PerformSearch using MOVIEDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&language=en-US&page=1&include_adult=false&query=" + searchTerm


    fetch(urlString)
      .then(function(response) {return response.json(); })
      .then(function(data){
        let results = data.results
        var movieRows = []
        results.forEach((movie) => {
          //console.log(movie)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows:movieRows})
      }.bind(this))


  }


searchChangeHandler(event){
  console.log(event.target.value)
  const boundObject = this
  const searchTerm = event.target.value
  if(event.target.value != '')
  boundObject.performSearch(searchTerm)
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
      <div>

        <div className="noir-background">


        </div>
        <img className="noir-collage "src = "collage.jpg" />
      </div>
    </div>
  );
}}


//      <input className="searchBar" placeholder="Enter Search Term" onChange={this.searchChangeHandler.bind(this)}/>
//       {this.state.rows}



export default App;
