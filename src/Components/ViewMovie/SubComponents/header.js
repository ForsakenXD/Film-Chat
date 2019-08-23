import React, { Component } from 'react'

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        let image;
        if(this.props.data){
            image = <div className="backdropimage" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//${this.props.data.backdrop_path})`,backgroundPosition:'center 0px'}}></div>
        }
        return(
            <React.Fragment>
            <section className="backdrop-container">
                <div className="backdrop">
                    <div className="backdrop-placeholder" />
                    {image}
                    <div className="backdropmask" />
                </div>
            </section>
            </React.Fragment>
        )
    }
}


export default Header

{/* <iframe id="ytplayer" type="text/html" width="100%" height="360"
src="https://www.youtube.com/embed/n4pHZ_IrKDk?enablejsapi=1&autoplay=1&mute=1&controls=0"
frameBorder="0" align="middle" className="ytube" ></iframe> */}

//http://api.themoviedb.org/3/movie/11104?api_key=1adbe5b9d80d1dc5e9cd90c2e0c31900&append_to_response=videos,images// https://image.tmdb.org/t/p/original//fsudYlZ4bpXimQ34DwH8nf4R77p.jpg