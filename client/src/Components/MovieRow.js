import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {  Redirect } from 'react-router'


class MovieRow extends Component {
    constructor(){
      super()
      this.state = { redirectToReferrer: false }
    }


    viewMovie = () => {
      this.setState({ redirectToReferrer: true})
    }


    chat = (name) => {
      this.props.show()
      this.props.roomName(name)
      this.props.triggerModal()
    }


    render(){
      const redirectToReferrer = this.state.redirectToReferrer;
      if (redirectToReferrer)
        return   <Redirect to={`/film/${this.props.movie.id}`}  />
      return(
          <div style={{borderBottom:'2px solid #2c3440',marginTop:'2em'}}>
            <div className="grid-container" key={this.props.movie.id} >
              <img alt={this.props.movie.title} width='120' src={`https://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} className="img-search"/>
                <div className="item-2" >
                  <h4 className="item">{this.props.movie.title}</h4>
                  <p className="item" size="sm">{this.props.movie.overview}</p>
                  <Button variant="light" onClick={this.viewMovie} className="button-search1"><span>View</span></Button>
                  <Button variant="danger" onClick={() => this.chat(this.props.movie.title)} className="button-search2"><span>Chat with a random fan about this movie!</span></Button>
                </div>
            </div>
          </div>
          )
    }
}

export default MovieRow
