import React, { useState } from 'react';
import {
    Container,
    Navbar,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import  {Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import requestACustomQuote from '../assets/icons/request-a-custom-quote.png';
import startLiveChat from '../assets/icons/start-live-chat.png';
import callTollFree from '../assets/icons/call-toll-free.png';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <>
        <Navbar light expand="lg" className="d-block site__navigation">
            
            <Container>
                
          <NavbarBrand href="/"><img src={logo} alt=""/></NavbarBrand>
          
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <div className="topbar">
                  <ul className="list-inline">
                      <li className="list-inline-item"><Link to="/"><img src={requestACustomQuote} alt=""/><span>Request a</span><strong>Custom Quote</strong></Link></li>
                      <li className="list-inline-item"><Link to="/"><img src={startLiveChat} alt=""/><span>Start</span><strong>Live Chat</strong></Link></li>
                      <li className="list-inline-item"><Link to="/"><img src={callTollFree} alt=""/><span>Call Toll Free</span><strong>+92 324 2340 583</strong></Link></li>
                  </ul>
              
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">What We Do</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   Logo Design
                  </DropdownItem>
                  <DropdownItem>
                  Website Design
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  Web Development
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> 
              <NavItem>
              <NavLink href="/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/">Pricing</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/">Contact</NavLink>
              </NavItem>
              
              <NavItem>
              <NavLink href="/">Order now</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Navigation;
