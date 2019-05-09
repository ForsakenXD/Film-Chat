import React from 'react'

class MovieRow extends React.Component {
    render(){
      return(
        <div className="grid-container" key={this.props.movie.id}>
        <img alt={`${this.props.movie.title} Image`} width='120' src={this.props.movie.poster_src} className="item"/>
          <div className="item-2">
            <h4 className="item">{this.props.movie.title}</h4>
            <p className="item">{this.props.movie.overview}</p>
          </div>
        </div>


      )
    }
}

export default MovieRow
