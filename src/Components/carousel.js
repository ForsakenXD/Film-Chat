import Carousel from 'react-bootstrap/Carousel'
import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import CarouselItem from './carousel_item'




function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    const gradient = {
        //background:'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(249,249,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 77%, rgba(51,255,222,0.3) 94%)'
        background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)',
        backgroundColor:"transparent"
        //background: 'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
      }

    
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} style={{width:'100%'}}>
        <Carousel.Item>
        <div style={{display:'flex'}}>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://image.tmdb.org/t/p/original/9UkQyYKvqFZyEo9ztLBx0yPEQwS.jpg"} name={'Chunking Express'} rating={"8.1/10"} releaseDate={1994} zIndex={10} description={"Two melancholy Hong Kong policemen fall in love: one with a mysterious female underworld figure, the other with a beautiful and ethereal server at a late-night restaurant he frequents."}/>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://image.tmdb.org/t/p/original/aqCpkOvZ7hNdTT70sSnGSRxmYxv.jpg"} name={"Fallen Angels"} rating={"8/10"} releaseDate={1995} description={"In this bifurcated crime narrative, a disillusioned hitman attempts to escape from his violent lifestyle against the wishes of his partner, who is infatuated with him, and an eccentric mute repeatedly encounters, then subsequently falls for, a depressed woman looking for the prostitute who supposedly stole her ex-boyfriend’s affections."}/>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://image.tmdb.org/t/p/original/3l8fOAwiN3N5n3hHnZ51eog7Zu2.jpg"} name={"A brighter summer day"} rating={"8/10"} releaseDate={1994} description={"A boy experiences first love, friendships and injustices growing up in 1960s Taiwan."} />
          </div>
  
          <Carousel.Caption>
            <h3>Melancholy</h3>
            <p>Essential melancholy for people who'd love to bedew in sadness, full of contemplation as we then witness these characters at their crossroads</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div style={{display:'flex'}}>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://100patrz.files.wordpress.com/2018/10/tag_poster_goldposter_com_2.jpg"} name={'Tag'} zIndex={10} rating={"6.4/10"} releaseDate={2015} description={"ALL HIGH SCHOOL GIRLS OUT THERE YOU ARE A LITTLE TOO OBNOXIOUS SO WE DECIDED TO REDUCE YOUR NUMBERS.Female highs school students, including Mitsuko, Keiko and Izumi, become the targets of ghosts with various appearances including a groom with a pig's face and female teacher with a machine gun."}/>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://images-na.ssl-images-amazon.com/images/I/91PupLLGyMS._SL1500_.jpg"} name={"Tokyo Gore Police "} rating={"6.2/10"} releaseDate={2008} description={"Set in a future-world vision of Tokyo where the police have been privatized and bitter self-mutilation is so casual that advertising is often specially geared to the “cutter” demographic, this is the story of samurai-sword-wielding Ruka and her mission to avenge her father’s assassination. Ruka is a cop from a squad whose mission is to destroy homicidal mutants known as “engineers” possessing the ability to transform any injury into a weapon."}/>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://m.media-amazon.com/images/M/MV5BODdlZmM2YTctNDc4Ny00OGE3LWI0YjEtMDViNGVmOWE2YWZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"} name={"The Machine Girl"} rating={"6/10"} releaseDate={2008} description={"IT’S PAYBACK TIME!The life of a young, Japanese schoolgirl is destroyed when her family is killed by a Ninja-Yakuza family. Her hand cut off, she replaces it with various machines-of-death, and seeks revenge"}/>
        </div>

        
          <Carousel.Caption>
            <h3 style={{color:'white'}}>Japanese Gore</h3>
            <p>Japanese cult gore that will most defenetly "shake" you up</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            
        <div style={{display:'flex'}}>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://image.tmdb.org/t/p/original/5JYzfyKBwReaQ41WFhqXgOZnPWV.jpg"} zIndex={10} name={'Neon Genesis Evangelion:The End of Evangelion'} rating={"8.6/10"} releaseDate={1997} description={"The second of two theatrically released follow-ups to the Neon Genesis Evangelion series. Comprising of two alternate episodes which were first intended to take the place of episodes 25 and 26, this finale answers many of the questions surrounding the series, while also opening up some new possibilities."}/>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://image.tmdb.org/t/p/original/ylkqgfgZ6wtGztvvXR9CbdJNzcX.jpg"} name={"Akira"} rating={"8.2/10"} releaseDate={1988} description={"NEO-TOKYO IS ABOUT TO E.X.P.L.O.D.E.A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop."}/>
            <CarouselItem show={props.show} roomName={props.roomName} image={"https://image.tmdb.org/t/p/original/a4EPetwSkXI1dg9wF5agbnkuisc.jpg"} name={"Ghost in the shell"} rating={"7.8/10"} releaseDate={1995} color={'black'} description={'In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as ‘The Puppetmaster’ begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.'}/>
          </div>
  
          <Carousel.Caption>
            <h3>Animation</h3>
            <p>
              Modern animation masterpieces
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default ControlledCarousel