import React,{ Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { Link } from "react-scroll";
import posed from 'react-pose';
import Rodal from 'rodal';

//JS IMPORTS
import MovieRow from './Components/MovieRow.js'
import NavigationBar from './Components/navbar.js'
import PopularMovies from './Components/popular-movies.js'
import RandomGenre from './Components/random-genre.js'
import Carousel from './Components/carousel.js'
import ChatApp from './chat/chat-App.js'
import Body from './Components/ViewMovie/body.js'

//CSS IMPORTS
import 'rodal/lib/rodal.css';
import './imagehover.min.css';
import './css/root.css';
import './css/chat.css'

const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 150
  },
  closed: { x: '-100%', delay: 300 }
});



class App extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false,
      visible:false,
      trigger:false
    }
    this.image()
    this.performSearch("John Wick")
  }


    
  //Callbacks
  setRoom = (roomName) => {this.setState({roomName})}
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  triggerModal = () => {this.setState({trigger:true})}
  show = () => {this.setState({ visible: true })}
  hide = () => { this.setState({ visible: false })}



  performSearch = (searchTerm) => {
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US&page=1&include_adult=false&query=${searchTerm}` 
    fetch(urlString)
      .then(res => res.json())
      .then(data => {
        var movieRows = []
        data.results.forEach(movie => {
          if(movie.poster_path !== null){
            const movieRow = <MovieRow key={movie.id} movie={movie} show={this.show} visible={this.state.visible} roomName={this.setRoom}  triggerModal={this.triggerModal}/>
            movieRows.push(movieRow)
          }
        })
        this.setState({ rows:movieRows })
      })
  }

  searchChangeHandler = (event) => {
    const searchTerm = event.target.value
    if(event.target.value !== '')
      this.performSearch(searchTerm)
  }


  image = () => {
    const urlString = `https://api.themoviedb.org/3/list/111790?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US`
    fetch(urlString)
      .then(res => res.json())
      .then(data => {
        const background_poster = []
        data.items.forEach((movie) => {background_poster.push(movie.original_title)})
        this.setState({ background:background_poster[0] })
      })
  }

  AllChatrooms = () => {
    this.show()
    this.triggerModal()
  }
  

  // BUTTONS ANIMATION
  componentDidMount() {
    setTimeout(this.toggle, 350);
  }

  render(){
    const { isOpen } = this.state;
    return (
      <Switch>
        <Route exact path="/"   render={()=>  
            <div >
              <NavigationBar performSearch={this.performSearch}/>
              <header>
              <div className="noir-background "></div>
                <div className="noir-background-text-border ">
                  <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                    <h1 className="noir-background-text-header">Filmchat</h1>
                    <p className="noir-background-text-paragraph">A Website where Film-fans through out the World can privately and Anonymously Chat about their favourite movies in chatrooms created on the spot!</p>
                    <Link   activeClass="active"   to="Search"  spy={true}   smooth={true} offset={-70} duration={0} >
                      <Button size="lg" id="button1" >search for a specific movie</Button>
                    </Link>
                    <Button size="lg" id="button2" onClick={() => this.AllChatrooms()}>See all chatrooms</Button>
                  </Sidebar >
                  <p id="movie-title">{this.state.background + '(2003)'}</p>
                  <img src="arrow.png" alt="arrow" width="50" />
                </div>
              </header>
              <section className="popular-movies">
                <h1 className="headline1">You can either start chatting or view information about the movies by hovering your mouse over them.Time to get social!</h1>
                  <h1 className="popular-movies-text">Popular Movies Today</h1>
                  <PopularMovies show={this.show}  roomName={this.setRoom} triggerModal={this.triggerModal}/>
                  <h1 className="popular-movies-text">Daily staff picks</h1>
                  <Carousel show={this.show} roomName={this.setRoom} triggerModal={this.triggerModal}/>
                  <RandomGenre show={this.show} roomName={this.setRoom} triggerModal={this.triggerModal}/>                
                  <h1 className="headline1">Search for your favourite movie and chat with others down bellow!</h1>
                  <div className="search-background search__container" >
                      <div>
                        <input className="searchBar search__input" placeholder="Search for a movie!" onChange={this.searchChangeHandler.bind(this)}/>
                      </div>
                      {this.state.rows}
                  </div>
              </section>
              <footer id="Search" style={{textAlign:'center'}}>
                <h2 style={{color:'grey',fontSize:'0.8rem'}}>© 2019 Copyright: KARVOUNAKHS NIKOS</h2>
              </footer>
              <Rodal className="modall" visible={this.state.visible} onClose={this.hide} width={80} height={80} measure={'%'} animation={'zoom'}>
                  <ChatApp roomName={this.state.roomName} chatTrigger={this.state.trigger} ModalbigClose={this.hide} roomSet={this.setRoom}/>
              </Rodal>
            </div> }/>
            <Route  path="/film/:id" render={(props) => <Body props={props} 
            performSearch={this.performSearch} 
            show={this.show}  
            roomName={this.state.roomName}
            roomSet={this.setRoom} 
            triggerModal={this.triggerModal} />} />
        </Switch>
    );
  }}




export default App;
