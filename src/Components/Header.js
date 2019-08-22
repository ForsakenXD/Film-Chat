import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from "react-scroll";




class NavigationBar extends Component{
    constructor(){
      super()
      this.state = {
        searchVal: ''
      }
    }


    onSubmit(e){
      e.preventDefault();
      if(this.state.searchVal !== ""){
        window.location.hash="/"
        this.props.performSearch(this.state.searchVal)
        window.location.hash="section1"
      }
    
    }
    
    onType(searchVal){
      this.setState({
        searchVal
      })
    }



    render(){
      return(
        <div className = "flex">
        <Navbar bg="" expand="lg"  id="navbar" className="lg " >
          <img href="#home" alt="logo" src="logo2.png" style={{cursor:'pointer'}} onClick={() => window.location.reload(false)}></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
          

        </Nav>
        <Form inline className="" onSubmit={(e) => this.onSubmit(e)}>
          <FormControl type="text" placeholder="Ichi the killer" className="mr-sm-2" onChange={(e) => this.onType(e.target.value)}/>
          <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={0} >
            <Button variant="" className="nav-search" onClick={(e) => this.onSubmit(e)}>Search for a movie</Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>)
    }
  }

export default NavigationBar
