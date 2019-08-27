import React from 'react'

function Header(props){
    let image;
    if(props.data){
        image = <div className="backdropimage" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//${props.data.backdrop_path})`,backgroundPosition:'center 0px'}}></div>
    }
    return(
        <React.Fragment>
            <section className="backdrop-container">
                <div className="backdrop">
                    <div className="backdrop-placeholder" />
                        {image}
                    <div className="backdropmask" />
                </div>
            </section>
        </React.Fragment>
    )
}


export default Header
