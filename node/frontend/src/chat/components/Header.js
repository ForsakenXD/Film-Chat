import React,{ useState } from 'react'
import ThemeButton from './ThemeButton'
import NameDisplay from './nameDisplay'

const Header = props => {
    const [dark,changeLogo] = useState(true)
    const color = getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-thumb1'); 
    return(
        <React.Fragment>
            <div style={{gridArea:'z',gridColumn:'1',display:'flex',marginLeft:'0.7em'}}>
                <h4 style={{color,marginRight:'0.5em'}}> {dark ? 'Dark' : 'Light' } </h4>
                <ThemeButton changeLogo={changeLogo}/>
            </div>
            <div style={{gridArea:'z',gridColumn:'2',display:'flex',marginLeft:'0.7em'}}>
                <h4 style={{color,marginRight:'0.1em'}}>username:</h4>
                <NameDisplay  username={ props.username } />
            </div>
            <div style={{gridArea:'z',gridColumn:'4'}}>
                <img  href="#home" alt="logo" src={dark ? "https://i.ibb.co/qYynBFf/logo2.png"  : "https://i.ibb.co/qBbCmKg/logo-black.png"} style={{cursor:'pointer'}}  />
            </div> 
        </React.Fragment>
    )
    
}

export default Header