import React, { Component } from 'react'

class ThemeButton extends Component{
    constructor(){
        super()
        this.state = {
            color:'dark'
        }
    }

    cssVarManipulation = (fontColor1,fontColor2,backgroundColor1,scrollBody,scrollThumb) => {
        document.documentElement.style.setProperty('--fontColor1', fontColor1);
        document.documentElement.style.setProperty('--fontColor2', fontColor2);
        document.documentElement.style.setProperty('--background-color1', backgroundColor1);
        document.documentElement.style.setProperty('--scrollbar-body', scrollBody);
        document.documentElement.style.setProperty('--scrollbar-thumb1', scrollThumb);
    }

    onClick = () => {
        if(this.state.color === 'dark'){
            this.setState({ color: 'white' })
            this.cssVarManipulation('black','black','white','lightgrey','grey')
            this.props.changeLogo(false)
        } else {
            this.setState({ color: 'dark' })
            this.cssVarManipulation('lightgrey','lightgrey','rgb(20,24,29)','rgba(0,0,0,0.2)','crimson')
            this.props.changeLogo(true)
        }
    }


    render(){
        return(
            <div style={{gridArea:'z',gridColumn:'1',marginBottom:'2em'}}>
                <label className="switch" >
                    <input type="checkbox" onClick={() => this.onClick()}/>
                    <span className="slider"></span>
                </label>
            </div>
            
        )
    }
}

export default ThemeButton
