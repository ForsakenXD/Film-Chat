import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



function modArr(props){
    
    const html = props.cast.map((member,index) => {
                    return index % 4`<img src=${member.profile_path} alt=${member.name} />`                    
                })
    return <Carousel.Item>{ ReactHtmlParser(html) } </Carousel.Item>;

    
};

export default function CastCarousel(props) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    let modified_cast = ''
    let temp = 0
    for(let i = 4;i < props.cast.length  ; i = i + 4){
        modified_cast += '<Carousel.Item><div class="cast-item1 cast-subgrid">'
        for(let j = temp ; j < props.cast.length ; j++){
            if(j < i){
                modified_cast += `<div class="inner-grid-cast">
                                        <h2 style=color:lightgrey;font-size:1.3rem;>${props.cast[j].character}</h2>
                                        <h2 style=color:grey;font-size:1rem; >${props.cast[j].name}</h2>
                                        `
                if(props.cast[j].profile_path){
                    modified_cast += `<img width=220 style=margin-top:auto; src=https://image.tmdb.org/t/p/original/${props.cast[j].profile_path} alt=cheeto />
                                  </div>`
                } else {
                    modified_cast += `<img style=margin-top:auto; width=220 src=../person.png alt=cheeto />
                                  </div>`
                }       
            }
        }
        temp = i
        modified_cast += '</div></Carousel.Item>'
    }
    
    modified_cast = ReactHtmlParser(modified_cast)


    return(
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} width="220" className="cast-item1 " >
        {modified_cast}
    </Carousel>
        )
    }




// return index < 3  ? <div style={{marginRight:'0.6em'}}><h2 style={{color:'grey'}}>{member.name}</h2>
//                                         <img width="220" src={`https://image.tmdb.org/t/p/original/${member.profile_path}`} alt={member.name} /></div> : null


{/*  <Carousel.Item width="220">
<div>
    <h2 style={{color:'grey',fontSize:'1rem'}}>{props.cast[0].name}</h2>
    <h2 style={{color:'lightgrey',fontSize:'1.3rem'}}>{props.cast[0].character}</h2>
    <img width="220" src={`https://image.tmdb.org/t/p/original/${props.cast[0].profile_path}`} alt={props.cast[0].name} />
</div>
</Carousel.Item> */}


{/* <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} width="220" className="cast-item1 " >
        
{
    props.cast.map((member,index) => {
        return <Carousel.Item>
             {index < 4 ? <div className="cast-item1 cast-subgrid">
            <h2 style={{color:'grey',fontSize:'1rem'}}>{member.name}</h2>
            <h2 style={{color:'lightgrey',fontSize:'1.3rem'}}>{member.character}</h2>
            <img width="220" src={`https://image.tmdb.org/t/p/original/${member.profile_path}`} alt={member.name} />
        </div> : null}
        </Carousel.Item>
    })
}

</Carousel>
)
} */}
