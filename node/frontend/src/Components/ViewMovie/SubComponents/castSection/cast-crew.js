import React, { useState } from 'react'
import CastCarousel from './cast-carousel'


function Castcrew(props){
    const [ current,changeCurrent ] = useState('cast')
    return(
        <div className="cast-item1" >
            <div style={{display:'flex'}}>
            {current === 'cast' ? <React.Fragment> <h2 style={{color:'crimson',marginRight:'0.5em'}}>Cast</h2>
            <h2 style={{color:'grey',cursor:'pointer'}} onClick={() => changeCurrent('crew')}>Crew</h2></React.Fragment> : 
            <React.Fragment>
                <h2 style={{color:'grey',marginRight:'0.5em',cursor:'pointer'}} onClick={() => changeCurrent('cast')}>Cast</h2>
                <h2 style={{color:'crimson'}}>Crew</h2>
            </React.Fragment>
            }   
        </div>
            <CastCarousel cast={props.cast} crew={props.crew} current={current}/>
        </div>
    )
}

export default Castcrew