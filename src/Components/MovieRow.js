import React from 'react'
import {Button} from 'react-bootstrap'

class MovieRow extends React.Component {

    viewMovie(){
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      const win = window.open(url,'_blank')
      win.focus();
    }

    render(){
      return(
          <div style={{borderBottom:'2px solid #2c3440',marginTop:'2em'}}>
          <div className="grid-container" key={this.props.movie.id} >
          <img alt={`${this.props.movie.title} Image`} width='120' src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} className="img-search"/>
            <div className="item-2 " >
              <h4 className="item">{this.props.movie.title}</h4>
              <p className="item">{this.props.movie.overview}</p>
              <Button variant="warning" onClick={this.viewMovie.bind(this)} style={{backgroundColor:'crimson',borderColor:'crimson',color:'white',marginRight:'1em'}}>View</Button>
              <Button variant="danger" onClick={this.viewMovie.bind(this)} className="button-search">Chat with a random fan about this movie!</Button>
            </div>
          </div>
          </div>
          )




    }
}

export default MovieRow
