import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions/actions'
import { Link } from "react-router-dom";
import * as yup from "yup";

import {Container,
  Col,
  Row, 
  Collapse,
  Navbar,
 NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
   Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
  
const Signup = (props) => {
            //navBar states
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    const [formState, setFormState] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(formState.username && formState.password){            
            props.createUser(formState)
            return history.push('/login')
        }

        return setFormState({
            username: "",
            password: ""
        })
    }

    
    

   

    
    return (
      <>
       <Container className = "p-0" fluid={true} >
          <Navbar style={{opacity: ".8"}}  color="light"  light expand="md">
            <NavbarToggler onClick={toggle} />
           
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <Link style={{color:"black", fontSize: "2rem"}} className = "nav-link" to = "/login">Login In</Link>
                </NavItem>

              </Nav>

            </Collapse>

          </Navbar>
        </Container>
        <Container className="App p-5">
          <h2>Register</h2>
          <Form className="form" onSubmit={handleSubmit} >
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={formState.username}
                  onChange={handleChange}
                  placeholder="username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Button> Submit </Button>
          </Form>
        </Container>
        </>
      );
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { createUser })(Signup)
