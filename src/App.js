import React,{ Component } from 'react';
import './App.css';
import './imagehover.min.css'
import MovieRow from './Components/MovieRow.js'
import NavigationBar from './Components/Header.js'
import PopularMovies from './Components/popular-movies.js'
import RandomGenre from './Components/random-genre.js'
import ChatApp from './chat/chat-App.js'
import {Button,Form} from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import posed, { PoseGroup } from 'react-pose';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';


//  ANIMATION CONSTANTS
const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 150
  },
  closed: { x: '-100%', delay: 300 }
});
// enter exit transition constants//

// enter exit transition constants//
//  ANIMATION CONSTANTS


class App extends Component {
  constructor(){
    super()
    this.state = {isOpen: false,visible:false}
    this.updateText1 = this.updateText1
    this.performSearch = this.performSearch.bind(this)
    this.image = this.image.bind(this)
    this.image()
    this.performSearch("John Wick")
  }
  // BUTTONS ANIMATION
  componentDidMount() {
      setTimeout(this.toggle, 350);

    }
room = (roomName) => {this.setState({roomName})}



  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  //BUTTONS ANIMATION


  updateText1 = (visible) => {this.setState({ visible })}



  show() {

     this.setState({ visible: true });


 }

 hide() {

     this.setState({ visible: false});
 }



  performSearch(searchTerm){
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
            const movieRow = <MovieRow key={movie.id} movie={movie} show={this.updateText1} visible={this.state.visible} roomName={this.room}/>
            movieRows.push(movieRow)
          }
        })
        this.setState({rows:movieRows})
      }.bind(this))
  }


searchChangeHandler(event){
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
                <Button size="lg" id="button1" >search for a specific movie</Button>
                </Link>
            <Button size="lg" id="button2" onClick={this.show.bind(this)}>See all chatrooms</Button>
          </Sidebar >
          <p id="movie-title">{this.state.background + '(2003)'}</p>
          <img src="arrow.png" alt="arrow" width="50" />
        </div>

      </div>
      <div className="popular-movies">
      <h1 className="headline1">You can either start chatting or view more information about the movies by hovering your mouse over them.Time to get social!!</h1>
        <PopularMovies show={this.updateText1}  roomName={this.room}/>
        <RandomGenre show={this.updateText1} roomName={this.room}/>
        <h1 className="headline1">Search for your favourite movie and chat with others down bellow!</h1>
        <div className="search-background search__container" id="section1">
          <input className="searchBar search__input" placeholder="Search for a movie!" onChange={this.searchChangeHandler.bind(this)}/>
            {this.state.rows}
        </div>
      </div>


                 <Rodal className="modall" visible={this.state.visible} onClose={this.hide.bind(this)} width={80} height={80} measure={'%'} animation={'zoom'}>
                     <ChatApp roomName={this.state.roomName} id={'nikos'}/>
                 </Rodal>



    </div>
  );
}}


//      <input className="searchBar" placeholder="Enter Search Term" onChange={this.searchChangeHandler.bind(this)}/>
//       {this.state.rows}



export default App;
