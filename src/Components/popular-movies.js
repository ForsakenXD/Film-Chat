import React from 'react'
import {Button} from 'react-bootstrap'
import {  Redirect } from 'react-router'



const gradient = {
  //background:'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(249,249,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 77%, rgba(51,255,222,0.3) 94%)'
  background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(51,255,222,0.3) 100%)',
  backgroundColor:"transparent"
  //background: 'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
}

class PopularMovies extends React.Component{
  constructor(){
    super()
    this.state={ redirectToReferrer: false}
    this.show()
  }

  chat(name){
    this.props.show(true)
    this.props.roomName(name)



  }
  async ReadMore(id){
    this.setState({ id,redirectToReferrer: true })
  }


  show(){
    const urlString = "https://api.themoviedb.org/3/movie/popular?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&language=en-US&page=1"
    fetch(urlString)
      .then(function(response) {return response.json(); })
      .then(function(data){
        const background_poster = []
        let counter = 1
        data.results.forEach((movie) => {
          if(counter<=14) //(how many movies will be show on the popular movies list)
          {
            if(movie.poster_path !== null)
            {
              const url2 = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
              const url1 = "https://www.themoviedb.org/movie/" + movie.id
              const mov = <figure className="imghvr-blur" style={{backgroundColor: 'transparent'}} key={movie.original_title}>
                              <img alt={(movie.original_title)} src={url2}   key={(movie.original_title)} className="poster"/>
                              <figcaption style={gradient}>
                                <h3 className="ih-fade-down ih-delay-sm" style={{fontSize:'25px'}}>{movie.original_title}</h3>
                                    <div className="d-flex flex-row" >
                                    <Button onClick={()=> this.ReadMore(movie.id)} variant="danger sm" style={{marginRight:'1em',backgroundColor:'crimson',borderColor:'crimson'}}>View</Button>
                                    <Button onClick={() =>  this.chat(movie.original_title)} variant="success"   style={{backgroundColor:'black',borderColor:'black'}}>Chat!</Button>
                                    </div>
                                    <h6>Release Date:{movie.release_date}</h6>
                                    <h6>Rating:{movie.vote_average}/10</h6>
                              </figcaption>
                          </figure>
              background_poster.push(mov)
              counter++
            }
         }
        })
        this.setState({PopularRow:background_poster})
      }.bind(this))
  }





  render(){
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true)
      return   <Redirect to={`/film/${this.state.id}`}  />
    return(
      <div>
        <h1 className="popular-movies-text">Popular Movies Today</h1>
        {this.state.PopularRow}
    </div>
    )
  }


}

export default PopularMovies
