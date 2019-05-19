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
          <img alt={`${this.props.movie.title}`} width='120' src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} className="img-search"/>
            <div className="item-2 " >
              <h4 className="item">{this.props.movie.title}</h4>
              <p className="item">{this.props.movie.overview}</p>
              <Button variant="light" onClick={this.viewMovie.bind(this)} className="button-search1"><span>View</span></Button>
              <Button variant="danger" onClick={this.viewMovie.bind(this)} className="button-search2"><span>Chat with a random fan about this movie!</span></Button>
            </div>
          </div>
          </div>
          )




    }
}

export default MovieRow
