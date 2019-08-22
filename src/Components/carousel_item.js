
import React from 'react'
import {Button} from 'react-bootstrap'

function chat(cls){
    console.log(cls)
    cls.show(true)
    cls.roomName(cls.name)
  }


function CarouselItem(props){
    const gradient = {
        //background:'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(249,249,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 77%, rgba(51,255,222,0.3) 94%)'
        background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)',
        backgroundColor:"transparent"
        //background: 'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
      }
    return(
        <figure className="imghvr-blur " style={{backgroundColor: 'transparent',width:'30%',zIndex:props.zIndex,marginRight:'1em'}} >
          <img
            className="d-block "
            src={props.image}
            alt="First slide"
            style={{width:'100%'}}

            />
                              <figcaption style={gradient} className="hovers">
                                <h3 className="ih-fade-down ih-delay-sm" style={{fontSize:'2rem',position:'relative'}}>{props.name}</h3>
                                    <div className="d-flex flex-row" >
                                    <Button onClick={()=> console.log('xd')} variant="danger sm" style={{marginRight:'1em',backgroundColor:'crimson',borderColor:'crimson',position:'relative'}}>View</Button>
                                    <Button onClick={() =>  chat(props)} variant="success"   style={{backgroundColor:'black',borderColor:'black',position:'relative'}}>Chat!</Button>
                                    </div>
                                    <h5 style={{position:'relative'}}>{props.description}</h5>
                                    <h5 style={{position:'relative'}}>Release Date:{props.releaseDate}</h5>
                                    <h5 style={{position:'relative'}} >Rating:{props.rating}</h5>
                              </figcaption>
            </figure>

    )
}

export default CarouselItem