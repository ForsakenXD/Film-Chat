import React, { Component } from 'react'
import Castcrew from './castSection/cast-crew'
import Media from './mediaSection/media'
import { Carousel } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import ChatApp from '../../../chat/chat-App'
import Rodal from 'rodal';


class Details extends Component{

    constructor(){
        super()
        this.state={visible:false}
    }

    chat(name){
        this.setState({ visible:true })
        this.props.triggerModal()
        this.props.roomSet(name)
        
    }
    
    componentWillUnmount(){
        this.setState({ visible:false })
    }
    
    render(){
        let content
        console.log(this.state.visible)
        if(this.props.data){
            content = <section style={{paddingTop:'400px',backgroundImage:'none'}}>
                        <div className="content-wrap">
                            <div className="content-grid">
                                <div>
                                    {this.props.data.images.posters[0].file_path ? <img width="250" src={`https://image.tmdb.org/t/p/original//${this.props.data.images.posters[0].file_path}`} alt={this.props.data.title} style={{marginRight:'2em'}}/> : null}
                                    <h2 style={{color:'lightgrey',fontSize:'1.2rem'}}>Rating:<span style={{color:'grey'}}>{this.props.data.vote_average}/10</span></h2>
                                    <h2 style={{color:'lightgrey',fontSize:'1.2rem'}}>Runtime:<span style={{color:'grey'}}>{this.props.data.runtime}minutes</span></h2>
                                    {this.props.data.belongs_to_collection ? <h2 style={{fontSize:'1.2rem'}}>{this.props.data.belongs_to_collection.name}</h2> : null}
                                    <Button variant="danger" style={{backgroundColor:'black'}} onClick={() => this.chat(this.props.data.title)}>CHAT NOW</Button>
                                    <img style={{marginLeft:'0.4em',cursor:'pointer'}} onClick={() => window.open(`https://www.themoviedb.org/movie/${this.props.data.id}`)} width="50" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" />
                                </div>
                                <div style={{marginRight:'0.3em'}}>
                                    <h1 style={{color:'white'}}>{this.props.data.title}</h1>
                                    <div style={{display:'flex'}}>
                                        {this.props.data.genres.map((genre,index) => {  
                                        return <h6 style={{color:'grey',marginRight:'0.6em'}}>{genre.name}</h6>
                                        })}
                                    </div>    
                                    <h3 style={{color:'#292d33'}}>Release date:{this.props.data.release_date}</h3>
                                    {this.props.data.tagline ? <h4 style={{color:'grey'}}>“{this.props.data.tagline}”</h4> : null }
                                    <h2 style={{color:'lightgrey'}}>{this.props.data.overview}</h2>

                                </div>
                                <div >
                                    <h2 style={{color:'#292d33'}}>Directed by<span style={{color:'grey'}}> {this.props.data.credits.crew[0].name}</span></h2>

                                </div>
                                <div className="cast-item1">
                                    <iframe id="ytplayer" type="text/html" width="100%" height="460" 
                                    src={`https://www.youtube.com/embed/${this.props.data.videos.results[0].key}?enablejsapi=1&autoplay=1&color=white&loop=1&mute=1&playlist=${this.props.data.videos.results[0].key}`}
                                    frameBorder="0" align="middle" className="ytube" />                                   
                                </div>
                                <Castcrew cast={this.props.data.credits.cast} crew={this.props.data.credits.crew}/>
                                <Media images={this.props.data.images} videos={this.props.data.videos.results}/>
                            </div>
                        </div>
                        <Rodal className="modall" visible={this.state.visible} onClose={() => this.setState({ visible: false })} width={80} height={80} measure={'%'} animation={'zoom'}>
                            <ChatApp ModalbigClose={() => this.setState({ visible:false })} chatTrigger={this.state.visible} roomName={this.props.roomName} handler={this.temp} roomSet={this.props.roomSet} />
                        </Rodal>
                        {/* <section className="backdrop-container" style={{top:'0%',zIndex:'-22'}}>
                    <div className="backdrop" style={{left:'unset'}}>
                        <div className="backdrop-placeholder" />
                        <div className="backdropimage" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/m1LUdsYnFThcrbvRzlpbsFioEQT.jpg)`,backgroundPosition:'center 0px'}}></div>                        <div className="backdropmask" />
                    </div>
            </section> */}
                    </section>
        }
        return(
           <React.Fragment>
               {content}
           </React.Fragment>
        )
    }
}

export default Details

{/* <iframe id="ytplayer" type="text/html" width="100%" height="360" src="https://www.youtube.com/embed/n4pHZ_IrKDk?enablejsapi=1&autoplay=1&mute=1&controls=0" 
frameBorder="0" align="middle" className="ytube" ></iframe> */}