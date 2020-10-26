import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom"

//reactstrap styles
import {Container, 
    Collapse,
    Navbar,
   NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

const NavHeader = () => {
      //navBar states
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
    return(
        <Container className = "p-0" fluid={true} >
      <Navbar style={{opacity: ".8"}}  color="light"  light expand="md">
        {/* <NavbarBrand href="/">Med-Cabinet</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link style={{color:"black", fontSize: "1.5rem"}} className = "nav-link"  to = "/">Home |</Link>
            </NavItem>
            <NavItem>
            <Link style={{color:"black", fontSize: "1.5rem"}} className = "nav-link"  to = "/nav-saved">View Saved Strains |</Link>
            </NavItem>
            <NavItem>
            <Link style={{color:"black", fontSize: "1.5rem"}} className = "nav-link"  to = "/nav-suggestions">Recommendations</Link>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Container>
    )
}

export default NavHeader;
