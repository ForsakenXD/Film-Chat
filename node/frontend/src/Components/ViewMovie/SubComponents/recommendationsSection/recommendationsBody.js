import React from 'react'
import RecommendationsCarousel from './recommendations-carousel'


const Castcrew = props => {
    return(
        <div className="cast-item1" >
            <div style={{display:'flex'}}>
                <h2 style={{color:'lightgrey'}}>Recommendations</h2>   
            </div>
            <RecommendationsCarousel recommendations={props.recommendations}/>
        </div>
    )
}

export default Castcrew