import React from 'react'
import {Button} from 'react-bootstrap'
import {  Redirect } from 'react-router'






class MovieRow extends React.Component {
    constructor(){
      super()
      this.state = { redirectToReferrer: false}
    }

    async viewMovie(){
      await this.props.setID(this.props.movie_id)
      this.setState({ redirectToReferrer: true})
      // const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      // const win = window.open(url,'_blank')
      // win.focus();
    }
    chat(name){
      this.props.show(true)
      this.props.roomName(name)
    }


//https://api.themoviedb.org/3/movie/245891/credits?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900
//https://api.themoviedb.org/3/credit/245891?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900
    render(){
      const redirectToReferrer = this.state.redirectToReferrer;
      if (redirectToReferrer === true)
        return   <Redirect to={`/film/${this.props.movie.id}`}  />
      return(
          <div style={{borderBottom:'2px solid #2c3440',marginTop:'2em'}}>
          <div className="grid-container" key={this.props.movie.id} >
          <img alt={`${this.props.movie.title}`} width='120' src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} className="img-search"/>
            <div className="item-2 " >
              <h4 className="item">{this.props.movie.title}</h4>
              <p className="item" size="sm">{this.props.movie.overview}</p>


              <Button variant="light" onClick={this.viewMovie.bind(this)} className="button-search1"><span>View</span></Button>
              <Button variant="danger" onClick={() => {this.chat(this.props.movie.title)}} className="button-search2"><span>Chat with a random fan about this movie!</span></Button>
            </div>


          </div>
          </div>

          )




    }
}

export default MovieRow
