import React, { Component } from 'react'
import { Navbar, Nav,  Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-scroll";
import {  Redirect } from 'react-router'




class NavigationBar extends Component{
    constructor(){
      super()
      this.state = {
        searchVal: '',
        redirectToReferrer: false
      }
    }


     onSubmit = async (e) => {
      e.preventDefault();
      window.location.hash= "/"
      if(this.state.searchVal !== ""){
        if(window.location.pathname !== '/')
          await this.onLogoClick()
        await this.props.performSearch(this.state.searchVal)
        await this.wait(200)
        window.location.hash =  "Search"         
      }
    }

    wait = (ms) => {
      return new Promise((r => setTimeout(r, ms)));
    }
    
    onType = (searchVal) => {
      this.setState({ searchVal })
    }

    onLogoClick = () => {
        if(window.location.pathname !== '/')
          this.setState({ redirectToReferrer: true})
        else 
          window.location.reload()
    }



    render(){
      const { redirectToReferrer } = this.state;
      if (redirectToReferrer)
        return   <Redirect to={`/`}  />
      return(
          <Navbar bg="" expand="lg"  id="navbar" className="lg flex" >
            <img href="#home" alt="logo" src="https://i.ibb.co/qYynBFf/logo2.png" style={{cursor:'pointer'}} onClick={() => this.onLogoClick()}></img>
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
      )
    }
  }

export default NavigationBar
