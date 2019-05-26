import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function NavigationBar(){
  return(
    <div className = "flex">
    <Navbar bg="" expand="lg"  id="navbar" className="lg " >
      <img href="#home" alt="logo" src="logo2.png"></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ">
      <Nav.Link href="#link">Movies</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Project's github</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Developmental difficulties/project blog</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Talking about film chat's potential</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">About me</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline className="">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="" className="nav-search" onClick={() => console.log('1')}>Search for a movie</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>)
}

export default NavigationBar
