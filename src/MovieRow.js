import React from 'react'

class MovieRow extends React.Component {

    viewMovie(){
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = url
    }

    render(){
      return(
        <div className="grid-container" key={this.props.movie.id}>
        <img alt={`${this.props.movie.title} Image`} width='120' src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} className="item"/>
          <div className="item-2">
            <h4 className="item">{this.props.movie.title}</h4>
            <p className="item">{this.props.movie.overview}</p>
            <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
          </div>
        </div>


      )
    }
}

export default MovieRow
