import React, { Component } from 'react'

// SUB COMPONENTS
import Header from './SubComponents/header'
import Navbar from '../Header'
import Details from './SubComponents/details'

class Body extends Component{
    constructor(){
        super()
        this.state = {
            data:null
        }
    }
// 9323-ghost-in-the-shell 
// 18491
    init(){
        const movie_id = '9323-ghost-in-the-shell'
        const api_key = '1adbe5b9d80d1dc5e9cd90c2e0c31900'
        fetch(`http://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&append_to_response=credits,videos,images`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ data })
            })
    }

    componentWillMount(){
        this.init()
    }
    

    render(){
        document.documentElement.style.setProperty('--backgroundcolor', 'rgb(20,24,29)');
        return(
            <React.Fragment>
            <div style={{position:'relative',zIndex:'22'}}>
            <Navbar />
            </div>
            <Header data={this.state.data} />
            <Details data={this.state.data} />
            </React.Fragment>   
        )
    }
}

export default Body