import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavHeader from './NavHeader';

//reactstrap styles
import {Container,
    Collapse,
    Navbar,
   NavbarToggler,
   NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

const HomePage = () => {
          //navBar states
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            {/* <Container className = "p-0" fluid={true} >
      <Navbar style={{opacity: ".8"}}  color="light"  light expand="md">
      <NavbarBrand href="/">Med-Cabinet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link style={{color:"black", fontSize: "2rem"}} className = "nav-link"   to = "/login">Login</Link>
            </NavItem>
            <NavItem>
            <Link style={{color:"black", fontSize: "2rem"}} className = "nav-link" to = "/signup">Sign-up</Link>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Container> */}
        
        <NavHeader />
        <h2>
          Please Fill Out
        </h2>
        </div>
    )
}

export default HomePage;