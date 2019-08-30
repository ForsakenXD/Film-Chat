import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router'


class PopularMovies extends Component{
  constructor(){
    super()
    this.state={ redirectToReferrer: false }
    this.show()
  }

   chat = (name) => {
     this.props.show()
     this.props.triggerModal()
     this.props.roomName(name)
  }

   ReadMore = (id) => {
    this.setState({ id,redirectToReferrer: true })
  }


  show = () => {
    const urlString = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US&page=1`
    fetch(urlString)
      .then(res => res.json())
      .then(data => {
        const background_poster = []
        const gradient = {
          background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(51,255,222,0.3) 100%)',backgroundColor:"transparent"
        }
        data.results.forEach((movie,index) => {
          if(index<=13){
            if(movie.poster_path !== null){
              const image = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              const mov = <figure className="imghvr-blur" style={{backgroundColor: 'transparent'}} key={movie.original_title}>
                              <img alt={(movie.original_title)} src={image}   key={(movie.original_title)} className="poster"/>
                              <figcaption style={gradient}>
                                <h3 className="ih-fade-down ih-delay-sm" style={{fontSize:'1.25rem'}}>{movie.original_title}</h3>
                                    <div className="d-flex flex-row" >
                                      <Button onClick={()=> this.ReadMore(movie.id)} variant="danger sm" style={{marginRight:'1em',backgroundColor:'crimson',borderColor:'crimson'}}>View</Button>
                                      <Button onClick={() =>  this.chat(movie.original_title)} variant="success"   style={{backgroundColor:'black',borderColor:'black'}}>Chat!</Button>
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
      return   <Redirect to={`/film/${this.state.id}`}  />
    return(
      <section>
        {this.state.PopularRow}
      </section>
    )
  }


}

export default PopularMovies
