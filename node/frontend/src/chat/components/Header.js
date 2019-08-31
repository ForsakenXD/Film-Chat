import React,{ useState } from 'react'
import ThemeButton from './ThemeButton'

const Header = () => {
    const [dark,changeLogo] = useState(true)
    const color = getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-thumb1'); 
    return(
        <React.Fragment>
            <div style={{gridArea:'z',gridColumn:'1',display:'flex',marginLeft:'0.7em'}}>
                <h4 style={{color,marginRight:'0.5em'}}> {dark ? <h4>Dark</h4> : <h4>Light</h4>} </h4>
                <ThemeButton changeLogo={changeLogo}/>
            </div>
            <div style={{gridArea:'z',gridColumn:'4'}}>
                <img  href="#home" alt="logo" src={dark ? "https://i.ibb.co/qYynBFf/logo2.png"  : "https://i.ibb.co/qBbCmKg/logo-black.png"} style={{cursor:'pointer'}}  />
            </div> 
        </React.Fragment>
    )
    
}

export default Header