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
           
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <Link style={{color:"black", fontSize: "1.5rem"}} className = "nav-link"   to = "/login">Login |</Link>
                </NavItem>

                <NavItem>
                  <Link style={{color:"black", fontSize: "1.5rem"}} className = "nav-link" to = "/signup">Sign-up |</Link>
                </NavItem>

              </Nav>

            </Collapse>

          </Navbar>
        </Container>
        
        <div style={{ padding: "50px 0"}}>
            <br />
            <h1> Strain Suggester</h1>
            <br />
            <h3>
                Login or signup to find the strain that's perfect for your needs!<br/>
                No matter what ails you or effects you're looking for , we have the strain for you!
            </h3>
        </div> 
        <div>
            <h2>Checkout Our Promo Pages</h2>
              <NavbarBrand style ={{color:"white", fontSize: "2rem"}} href="https://ant-bestbuds.netlify.app/index.html"  target="_new">Promo Page 1</NavbarBrand>
              <NavbarBrand style ={{color:"white", fontSize: "2rem"}} href="https://build-week-pt-med-cab-angela.netlify.app/" target="_new">Promo Page 2</NavbarBrand>
        </div>
      </div>
    )
}
export default Home