import React from 'react'


class PopularMovies extends React.Component{
  constructor(){
    super()
    this.state={}

    this.show()

  }

  show(){
    console.log('eyy bo')
    const urlString = "https://api.themoviedb.org/3/movie/popular?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&language=en-US&page=1"
    fetch(urlString)
      .then(function(response) {return response.json(); })
      .then(function(data){
        console.log(data)
        const background_poster = []
        let counter = 1
        data.results.forEach((movie) => {
          if(counter<=10)
          {
            let url2 = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
            const mov = <img alt={(movie.original_title)} src={url2}   key={(movie.original_title)} className="poster"/>
            background_poster.push(mov)
            counter++
          }
        })
        this.setState({PopularRow:background_poster})

        console.log(this.state.PopularRow)

        // data.items.forEach((movie) => {background_poster.push(movie.original_title)})
        // this.setState({background:background_poster[0]})
        // console.log(this.state.background)
      }.bind(this))
  }













  render(){
    return(
      <div>{this.state.PopularRow}</div>
    )
  }


}

export default PopularMovies
