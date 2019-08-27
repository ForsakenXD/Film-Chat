import React, { Component } from 'react'

// SUB COMPONENTS
import Header from './SubComponents/header'
import Navbar from '../navbar'
import Details from './SubComponents/details'

class Body extends Component{
    constructor(props){
        super(props)
        const id = props.props.match.params.id
        this.state = {
            id,
            data:null
        }
    }


    findGetParameter = (parameterName) => {
        var result = null,
            tmp = [];
        window.location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    init = () => {
        const movie_id = this.state.id
        fetch(`http://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIE_DB}&append_to_response=credits,videos,images`)
            .then( res => res.json())
            .then( data => this.setState({ data }))
    }

    componentWillMount = () => {
        this.init()
    }
    
    

    render(){
        document.documentElement.style.setProperty('--backgroundcolor', 'rgb(20,24,29)');
        return(
            <React.Fragment>
                <nav style={{position:'relative',zIndex:'22'}}>
                    <Navbar performSearch={this.props.performSearch}/>
                </nav>
                <Header data={this.state.data}  />
                <Details triggerModal={this.props.triggerModal} data={this.state.data} show={this.props.show}  roomName={this.props.roomName} roomSet={this.props.roomSet}/>
            </React.Fragment>   
        )
    }
}

export default Body