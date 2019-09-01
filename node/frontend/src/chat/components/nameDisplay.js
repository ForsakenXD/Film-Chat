import React from 'react'

const NameDisplay = props => {
    return(
        <div>
            <h4 style={{textAlign:'center',color:'lightgrey'}}>{props.username}</h4>
        </div>
    )
}

export default NameDisplay;