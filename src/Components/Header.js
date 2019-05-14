import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function NavigationBar(){
  return(
    <div className = "flex">
    <Navbar bg="" expand="lg"  id="navbar" className="lg " >
      <img href="#home" alt="logo" src="logo.png"></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ">
      <Nav.Link className="intro" href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Movies</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline className="">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="" className="nav-search">Search for a movie</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>)
}

export default NavigationBar
