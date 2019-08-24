import React from 'react'

function MediaVideos(props){
    return(
        <iframe id="ytplayer" type="text/html" width="30%" height="360" 
        src={`https://www.youtube.com/embed/${props.video.key}?enablejsapi=1&autoplay=0&color=white`} 
        frameBorder="0" align="middle" className="ytube" />
    )
}

export default MediaVideos