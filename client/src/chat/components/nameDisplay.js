import React from 'react'

const NameDisplay = (props) => {
    return(
        <div>
            <h3 style={{textAlign:'center',borderBottom:'1px solid rgb(153, 170, 187)'}}>{props.username}</h3>
        </div>
    )
}

export default NameDisplay;