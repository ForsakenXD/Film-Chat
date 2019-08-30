import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {  Redirect } from 'react-router'


class RandomGenre extends Component{
    constructor(){
      super()
      this.state = { redirectToReferrer:false }
      this.random_genre()
    }
    chat = (name) => {
        this.props.show(true)
        this.props.roomName(name)
        this.props.triggerModal()
      }
  
    ReadMore = (id) => {
      this.setState({ 
        id,
        redirectToReferrer: true 
      })
    }

    random_genre = () => {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const Random_number = Math.floor((Math.random() * data.genres.length))
          const rand_gen = data.genres[Random_number]
          const name = rand_gen.name
          const movie_id = rand_gen.id
          this.setState(({ genre:name,id:movie_id }))
          this.genre_movies()
        })
    }

    genre_movies(){
      const genre_url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.state.id}`
      fetch(genre_url)
        .then(res => res.json())
        .then(data => {
          const background_poster = []
          const gradient = {background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)',backgroundColor:"transparent"}
          data.results.forEach((movie,index) => {
            if(index<=13){
              if(movie.poster_path !== null){ 
                const image = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                const mov = <figure className="imghvr-blur" style={{backgroundColor: 'transparent'}} key={movie.original_title}>
                                <img alt={(movie.original_title)} src={image}   key={(movie.original_title)} className="poster"/>
                                <figcaption style={gradient}>
                                  <h3 className="ih-fade-down ih-delay-sm" style={{fontSize:'1.25rem'}}>{movie.original_title}</h3>
                                      <div className="d-flex flex-row" >
                                        <Button onClick={()=>   this.ReadMore(movie.id)} variant="danger sm" style={{marginRight:'1em',backgroundColor:'crimson',borderColor:'crimson'}}>View</Button>
                                        <Button onClick={() =>  this.chat(movie.original_title)}variant="success"   style={{backgroundColor:'black',borderColor:'black'}}>Chat!</Button>
                                      </div>
                                      <h6>Release Date:{movie.release_date}</h6>
                                      <h6>Rating:{movie.vote_average}/10</h6>
                                </figcaption>
                            </figure>
                background_poster.push(mov)
            }}
          })
          this.setState({ PopularRow:background_poster })
        })
    }


    render(){
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer)
      return   <Redirect to={`/film/${this.state.id}`}/>
    return(
        <section style={{marginTop:'3em',marginBottom:'8em'}}>
          <h1 className="popular-movies-text">Random genre we think you should explore: <span>{this.state.genre}</span></h1>
          {this.state.PopularRow}
        </section>
      )
    }
  }




export default RandomGenre
