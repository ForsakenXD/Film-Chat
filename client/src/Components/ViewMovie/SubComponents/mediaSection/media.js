import React, { Component } from 'react'
import MediaContent from './mediaContent'

class Media extends Component{
    constructor(){
        super()
        this.state={ current:'posters' }
    }
    render(){
        return(
            <section className="media media-subgrid" >
                <h1 style={{color:'crimson'}}>Media</h1>
                <div style={{display:'flex'}} >
                    {this.state.current === 'posters' ? <h2 style={{marginRight:'0.5em',color:'crimson'}}>Posters</h2> : <h2 style={{marginRight:'0.5em',cursor:'pointer'}} onClick={() => this.setState({ current:'posters'})}>Posters</h2> }   
                    {this.props.images.backdrops.length > 0 ? this.state.current === 'backdrops' ? <h2 style={{marginRight:'0.5em',color:'crimson'}}>Backdrop images</h2> : <h2 style={{marginRight:'0.5em',cursor:'pointer'}} onClick={() => this.setState({ current:'backdrops'})}>Backdrop images</h2> : null }
                    {this.props.videos.length > 1 ? this.state.current === 'videos' ? <h2 style={{marginRight:'0.5em',color:'crimson'}}>Videos</h2> : <h2 style={{marginRight:'0.5em',cursor:'pointer'}} onClick={() => this.setState({ current:'videos'})}>Videos</h2> : null}
                </div>
                <MediaContent videos={this.props.videos} images={this.props.images} current={this.state.current}/>
            </section>
        )
    }
} 

export default Media