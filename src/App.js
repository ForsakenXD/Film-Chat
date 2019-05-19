import React,{ Component } from 'react';
import './App.css';
import './imagehover.min.css'
import MovieRow from './Components/MovieRow.js'
import NavigationBar from './Components/Header.js'
import PopularMovies from './Components/popular-movies.js'
import RandomGenre from './Components/random-genre.js'
import Chat from './chat-section/src/App.js'
import {Button} from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import posed from 'react-pose';



//  ANIMATION CONSTANTS
const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 150
  },
  closed: { x: '-100%', delay: 300 }
});



//  ANIMATION CONSTANTS


class App extends Component {
  constructor(){
    super()
    this.state = {isOpen: false}
    this.performSearch = this.performSearch.bind(this)
    this.image = this.image.bind(this)
    this.image()
    this.performSearch("John Wick")
  }
  // BUTTONS ANIMATION
  componentDidMount() {
      setTimeout(this.toggle, 350);
    }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  //BUTTONS ANIMATION


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
          if(movie.poster_path !== null)
          {
            const movieRow = <MovieRow key={movie.id} movie={movie} />
            movieRows.push(movieRow)
          }
        })
        this.setState({rows:movieRows})
        console.log(this.state.rows)
      }.bind(this))
  }


searchChangeHandler(event){
  console.log(event.target.value)
  const boundObject = this
  const searchTerm = event.target.value
  if(event.target.value !== '')
    boundObject.performSearch(searchTerm)
}


// future image and title changing function //
image(){
  const urlString = "https://api.themoviedb.org/3/list/111790?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&language=en-US"
  fetch(urlString)
    .then(function(response) {return response.json(); })
    .then(function(data){
      const background_poster = []
      data.items.forEach((movie) => {background_poster.push(movie.original_title)})
      this.setState({background:background_poster[0]})
    }.bind(this))
}
// future image and title changing function //



  render(){
    const { isOpen } = this.state;
  return (
    <div >
      <NavigationBar />
      <div>
      <div className="noir-background"></div>

        <div className="noir-background-text-border">
          <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
            <h1 className="noir-background-text-header">Filmchat</h1>
            <p className="noir-background-text-paragraph">A Website where Film-fans through out the World can privately and Anonymously Chat about their favourite movies in chatrooms created on the spot!</p>

              <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  >
                <Button size="lg" id="button1">search for a specific movie</Button>
                </Link>
            <Button size="lg" id="button2">See all chatrooms</Button>
          </Sidebar >
          <p id="movie-title">{this.state.background + '(2003)'}</p>
          <img src="arrow.png" alt="arrow" width="50" />
        </div>

      </div>
      <div className="popular-movies">
      <h1 className="headline1">You can either start chatting or view more information about the movies by hovering your mouse over them.Time to get social!!</h1>
        <PopularMovies />
        <RandomGenre />
        <h1 className="headline1">Search for your favourite movie and chat with others down bellow!</h1>
        <div className="search-background search__container" id="section1">
          <input className="searchBar search__input" placeholder="Search for a movie!" onChange={this.searchChangeHandler.bind(this)}/>
            {this.state.rows}
        </div>
      </div>
      <div id="igor"></div>
    </div>
  );
}}


//      <input className="searchBar" placeholder="Enter Search Term" onChange={this.searchChangeHandler.bind(this)}/>
//       {this.state.rows}



export default App;
