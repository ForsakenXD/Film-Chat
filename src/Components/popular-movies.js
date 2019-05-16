import React from 'react'






const gradient = {
  //background:'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(249,249,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 77%, rgba(51,255,222,0.3) 94%)'
  background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(51,255,222,0.3) 100%)'
  //background: 'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
}

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
            console.log(movie)
            let url2 = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
            const mov = <figure class="imghvr-blur" style={{backgroundColor: 'transparent'}}>
                            <img alt={(movie.original_title)} src={url2}   key={(movie.original_title)} className="poster"/>
                            <figcaption style={{backgroundColor:"transparent"},gradient}>
                              <h3 className="ih-fade-down ih-delay-sm" style={{fontSize:'25px'}}>{movie.original_title}</h3>


                            </figcaption>
                            <a href="#"></a>
                        </figure>
            background_poster.push(mov)
            counter++
          }
        })
        this.setState({PopularRow:background_poster})
      }.bind(this))
  }













  render(){
    return(
      <div>{this.state.PopularRow}</div>
    )
  }


}

export default PopularMovies
