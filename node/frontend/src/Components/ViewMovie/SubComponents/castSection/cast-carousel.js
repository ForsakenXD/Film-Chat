import React, { useState,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactHtmlParser from 'react-html-parser';



const modArr = (array) => {
    let modified_cast = ''
    let temp = 0
    console.log(`length->${array.length}`)
    if(array.length !== 1){
        for(let i = 4;i < array.length  ; i = i + 4){
            modified_cast += '<Carousel.Item><div class="cast-item1 cast-subgrid">'
            for(let j = temp ; j < array.length ; j++){
                if(j < i){
                        modified_cast += `<div class="inner-grid-cast">
                                                <h2 style=color:lightgrey;font-size:1.3rem;>${array[j].character || array[j].job}</h2>
                                                <h2 style=color:grey;font-size:1rem; >${array[j].name}</h2>
                                                `  
                    if(array[j].profile_path){
                        modified_cast += `<img width=220 style=margin-top:auto; src=https://image.tmdb.org/t/p/original/${array[j].profile_path} alt=cheeto />
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
    } else {
        const src = array[0].profile_path ? `https://image.tmdb.org/t/p/original/${array[0].profile_path}` : '../person.png'
        modified_cast += `<Carousel.Item><div class="cast-item1 ">
                                <h2 style=color:lightgrey;font-size:1.3rem;>${array[0].character || array[0].job}</h2>
                                <h2 style=color:grey;font-size:1rem; >${array[0].name}</h2>
                                <img width=220 style=margin-top:auto; src=${src} />
                            </div></Carousel.Item>`
    }
    return ReactHtmlParser(modified_cast)
};

export default function CastCarousel(props) {
    const [index, setIndex] = useState(0);
    const [carouselCurrent,changeCurrent] = useState('cast')
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    useEffect(() => {
        if(props.current !== carouselCurrent){
            changeCurrent(props.current)
            setIndex(0)
        }
      },[props,carouselCurrent]);
      
    const Current = props.current === 'cast' ? modArr(props.cast) : modArr(props.crew)
    return(
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} width="220" className="cast-item1 " >
        {Current}
    </Carousel>
        )
    }

