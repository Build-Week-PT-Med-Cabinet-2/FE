import React, {useState} from 'react';
import NavHeader from "./NavHeader"
import { Link } from "react-router-dom";
//reactstrap styles
import {Container,
    Col,
    Row, 
    Collapse,
    Navbar,
   NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
    return (
        <div className = "flex-column d-flex justify-content-center align-items-center">
        
        <Container className = "p-0" fluid={true} >
      <Navbar style={{opacity: ".8"}}  color="light"  light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand style ={{color:"black", fontSize: "2rem"}} href="https://ant-bestbuds.netlify.app/index.html">Marketing Page</NavbarBrand>
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
        </Container>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", padding: "50px 0"}}>
                <br />
                <h2>The Best Strain Suggester</h2>
                <br />
                <h3>
                    Login or signup to find the strain that's perfect for your needs!<br/>
                    No matter what ailes you or effects you're looking for , we have the strain for you!</h3>
            </div> 
        </div>
    )
}
export default Home