
import React,{ useState } from 'react'
import {  Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

const chat = (cls) => {
    console.log(cls)
    cls.show()
    cls.roomName(cls.name)
    cls.triggerModal()
  }


function CarouselItem(props){
    const [redirectToReferrer,redirect] = useState(false)

    const gradient = {
        background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)',
        backgroundColor:"transparent"
      }

    if (redirectToReferrer)
      return   <Redirect to={`/film/${props.id}`}  />
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
                    <Button onClick={()=> redirect(true)} variant="danger sm" style={{marginRight:'1em',backgroundColor:'crimson',borderColor:'crimson',position:'relative'}}>View</Button>
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