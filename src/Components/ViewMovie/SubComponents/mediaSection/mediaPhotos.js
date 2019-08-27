import React from 'react'

function MediaPhotos(props){
    return(
        <figure className="imghvr-blur" style={{backgroundColor: 'transparent',cursor:'pointer'}} onClick={() => window.open(`https://image.tmdb.org/t/p/original/${props.image.file_path}`)}>
                    <img  style={{marginRight:'1em',marginBottom:'1em'}} width={props.current_section === 'posters' ? 200 : 250} src={`https://image.tmdb.org/t/p/original/${props.image.file_path}`} alt={props.image.vote_count} /> 
                                <figcaption style={{backgroundColor:'transparent'}} />
                </figure>
    )
}

export default MediaPhotos