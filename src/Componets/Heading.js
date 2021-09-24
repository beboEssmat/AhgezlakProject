import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavbarBrand, Container} from 'reactstrap'
export const Heading = () => {
    return (
       <Navbar color="dark" dark>
           <Container>
               <NavbarBrand href="/">My Team</NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link to="/addGoverment" className="btn btn-primary">Add Goverment</Link>
                   </NavItem>
               </Nav>
           </Container>
       </Navbar>
    )
}
