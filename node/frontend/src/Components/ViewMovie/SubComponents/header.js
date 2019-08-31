import React from 'react'

function Header(props){
    let image;
    if(props.data){
        image = <div className="image-back" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//${props.data.backdrop_path})`,backgroundPosition:'center 0px'}}></div>
    }
    return(
        <React.Fragment>
            <section className="image-container">
                <div className="backdrop">
                    <div className="image-placeholder" />
                        {image}
                    <div className="imgmask" />
                </div>
            </section>
        </React.Fragment>
    )
}


export default Header
