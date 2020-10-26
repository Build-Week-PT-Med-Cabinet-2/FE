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
          
        
        <NavHeader />
        <h2>
          Please Fill Out
        </h2>
        </div>
    )
}

export default HomePage;