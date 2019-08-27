import React, { Component } from 'react'
import MediaVideos from './mediaVideos'
import MediaPhotos from './mediaPhotos'



class MediaContent extends Component{
    constructor(props){
        super(props)
        let pages = []
        for(let i=0;i< (props.images.posters.length / 10) ;i++){
            pages.push(i)
        }
        this.state = { 
            pages,
            current_page:pages[0],
            current_section:props.current,
            current_array:props.images.posters
         }
    }

    Pagination = (array) => {
        let pages = []
        for(let i=0;i<  (array.length / 10) ;i++){
            pages.push(i)
            console.log((array.length/10)-1)
        }
        
        this.setState({
            pages,
            current_page:pages[0]
        })
    }

    async componentDidUpdate(){
        if(this.props.current !== this.state.current_section){
            this.setState({ current_section: this.props.current})
            let current
            if(this.props.current === 'posters'){
                current =  this.props.images.posters
            } else if(this.props.current === 'backdrops'){
                await this.setState({ current_array:[] }) 
                current = this.props.images.backdrops
            } else {
                current =  this.props.videos
            }
            this.Pagination(current)
            this.setState({ current_array:current })
        }
    }

    render(){
    return(
        <div style={{backgroundColor:'#29313B',padding:'1.5em',marginBottom:'2em',border:'1px solid crimson'}} className="paper">
            <div>
           { this.state.current_array.map((image,index) => {
               return this.state.current_section !== 'videos' ? 
                        index >= this.state.current_page * 10 && index<  this.state.current_page * 10 + 10 ?  
                            <MediaPhotos key={index} current_section={this.state.current_section} image={image}/> : null
                      : <MediaVideos key={index} video={image} />
           })}
           </div>
           <div style={{display:'flex',justifyContent:'center'}}>
                <img alt="left-arrow" width="25" src="../left.svg" style={{color:'lightgrey',marginRight:'0.2em',cursor:'pointer'}} onClick={() => this.setState({ current_page:  this.state.current_page === 0 ? this.state.pages[this.state.pages.length-1] : this.state.current_page-1 })} />
                {this.state.pages.map((page,index) => {
                    return index === this.state.current_page ? <h3 key={index} style={{color:'crimson',marginRight:'0.2em'}} onClick={() => this.setState({ current_page: page})}>{page}</h3> : <h3 key={index} style={{color:'grey',marginRight:'0.2em',cursor:'pointer'}} onClick={() => this.setState({ current_page: page})}>{page}</h3>
                })}
                <img alt="right-arrow" width="25" src="../right.svg" style={{color:'lightgrey',marginRight:'0.2em',cursor:'pointer'}} onClick={() => this.setState({ current_page: this.state.current_page === this.state.pages[this.state.pages.length-1] ? 0 : this.state.current_page+1})} />
           </div>
        </div>
    )}
}

export default MediaContent