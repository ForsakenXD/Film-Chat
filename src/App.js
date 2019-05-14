import React,{ Component } from 'react';
import './App.css';
import MovieRow from './Components/MovieRow.js'
import Navigation_Bar from './Components/Header.js'
import {ButtonToolbar, Button} from 'react-bootstrap'





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
  if(event.target.value !== '')
    boundObject.performSearch(searchTerm)
}



  render(){
  return (
    <div >
      <Navigation_Bar />
      <div>
      <div className="noir-background"></div>
        <div className="noir-background-text-border lg">
          <h1 className="noir-background-text-header">FILMCHAT</h1>
          <p className="noir-background-text-paragraph">A Website where Film-fans through out the World can privately and Anonymously Chat about their favourite movies in chatrooms created on the spot!</p>
          <Button size="lg" id="button1">search for a specific movie</Button>
          <Button size="lg" id="button2">See all chatrooms</Button>
      </div>

        <img className="noir-collage "src = "collage.jpg" />
      </div>
    </div>
  );
}}


//      <input className="searchBar" placeholder="Enter Search Term" onChange={this.searchChangeHandler.bind(this)}/>
//       {this.state.rows}



export default App;
