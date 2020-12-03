import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

//import logo from '../../Marca-uc.svg'

function NavBar() {
    return(
     <Navbar bg="light" expand="lg">
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end navbar" >
            <Nav.Item>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="marco">Marco Teorico</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="simulador">Simulador</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="aplicaciones">Aplicaciones</Nav.Link> 
            </Nav.Item>    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar