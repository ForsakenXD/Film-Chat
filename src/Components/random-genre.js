import React from 'react'
import {Button} from 'react-bootstrap'


const gradient = {
  //background:'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(249,249,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 77%, rgba(51,255,222,0.3) 94%)'
  background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
  //background: 'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
}

class RandomGenre extends React.Component{
    constructor(){
      super()
      this.state = {}

      this.random_genre = this.random_genre.bind(this)
      this.genre_movies = this.genre_movies.bind(this)

      this.random_genre()

    }

    random_genre(){
      const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&language=en-US"
      fetch(url)
        .then(function(response) {return response.json(); })
        .then(function(data) {
          const Random_number = Math.floor((Math.random() * data.genres.length))
          const rand_gen = data.genres[Random_number]
          const name = <span>{rand_gen.name}</span>
          const movie_id = rand_gen.id
          this.setState(({genre:name,id:movie_id}))
          this.genre_movies()
        }.bind(this))
    }

    genre_movies(){
      const genre_url = "https://api.themoviedb.org/3/discover/movie?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + this.state.id
      fetch(genre_url)
        .then(function(response) {return response.json(); })
        .then(function(data) {
                const background_poster = []
                let counter=1;
          data.results.forEach((movie) => {
            if(counter<=6)
            {
            const url2 = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
            const url1 = "https://www.themoviedb.org/movie/" + movie.id
            const mov = <figure className="imghvr-blur" style={{backgroundColor: 'transparent'}} key={movie.original_title}>
                            <img alt={(movie.original_title)} src={url2}   key={(movie.original_title)} className="poster"/>
                            <figcaption style={{backgroundColor:"transparent"},gradient}>
                              <h3 className="ih-fade-down ih-delay-sm" style={{fontSize:'25px'}}>{movie.original_title}</h3>
                                  <div className="d-flex flex-row" >
                                  <Button onClick={()=> window.open(url1, "_blank")} variant="danger sm" style={{marginRight:'1em',backgroundColor:'crimson',borderColor:'crimson'}}>View</Button>
                                  <Button variant="success"   style={{backgroundColor:'black',borderColor:'black'}}>Chat!</Button>
                                  </div>
                                  <h6>Release Date:{movie.release_date}</h6>
                                  <h6>Rating:{movie.vote_average}/10</h6>
                            </figcaption>
                        </figure>
            background_poster.push(mov)
            counter++;
          }
          })
          this.setState({PopularRow:background_poster})
        }.bind(this))


    }


    render(){



      return(

        <div style={{marginTop:'3em',marginBottom:'8em'}}>
          <h1 className="popular-movies-text">Random genre we think you should explore:{this.state.genre}</h1>
          {this.state.PopularRow}
        </div>
      )
    }

}




export default RandomGenre
