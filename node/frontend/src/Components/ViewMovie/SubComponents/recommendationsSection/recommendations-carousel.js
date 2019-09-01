import React, { useState,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactHtmlParser from 'react-html-parser';



const modArr = (array) => {
    let modified_cast = ''
    let temp = 0
    if(array.length !== 1){
        const amount = 4
        for(let i = amount;i < array.length  ; i = i + amount){
            modified_cast += '<Carousel.Item><div class="cast-item1 cast-subgrid">'
            for(let j = temp ; j < array.length ; j++){
                const src = array[j].poster_path ? `https://image.tmdb.org/t/p/original/${array[j].poster_path}` : '../person.png'
                if(j < i){
                        modified_cast += `<div class="inner-grid-cast">
                                                <h2 style=color:lightgrey;font-size:1.3rem;>${array[j].original_title}</h2>
                                                <h2 style=color:grey;font-size:1rem; >${array[j].release_date}</h2>
                                                <img width=220 style=margin-top:auto; src=${src} alt=cheeto />
                                        </div>`  
                }
            }
            temp = i
            modified_cast += '</div></Carousel.Item>'
        }
    } else {
        const src = array[0].profile_path ? `https://image.tmdb.org/t/p/original/${array[0].poster_path}` : '../person.png'
        modified_cast += `<Carousel.Item><div class="cast-item1 ">
                                <h2 style=color:lightgrey;font-size:1.3rem;>${array[0].original_title}</h2>
                                <h2 style=color:grey;font-size:1rem; >${array[0].release_date}</h2>
                                <img width=220 style=margin-top:auto; src=${src} />
                            </div></Carousel.Item>`
    }
    return ReactHtmlParser(modified_cast)
};

const Recommendations = props =>  {
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
      
    const Current = modArr(props.recommendations)
    return(
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} width="220" className="cast-item1 " >
        {Current}
    </Carousel>
        )
    }

export default Recommendations

