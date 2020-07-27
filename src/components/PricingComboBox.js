import React from 'react'
import {Button,ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"
import { IoIosChatbubbles } from "react-icons/io";

export default function PricingComboBox() {
    return (
        <>
         <section className="pricing-combobox">
            <div className="container">
            <div className="row">
                <div className="combobox">
                   <h3>COMPLETE  BRAND SOLUTION</h3>
                   <h4> ULTIMATE ENTERPRISE STARTUP PACKAGE</h4> 
                   <div className="combobox-cols">
                    <div className="combo-list-wrapper">
                      <div  className="combo-list">
                          <h6>logo design</h6>
                          <ListGroup>
      <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> 2 Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Unlimited Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 48-72 Hrs Turnaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> All Formats (for print and digital use</ListGroupItem>
    </ListGroup>
                      </div>  
                      <div  className="combo-list">
                          <h6>web design</h6>
                          <ListGroup>
      <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> 2 Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Unlimited Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 48-72 Hrs Turnaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> All Formats (for print and digital use</ListGroupItem>
    </ListGroup>
                      </div>  
                      <div  className="combo-list">
                          <h6>social media</h6>
                          <ListGroup>
      <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> 2 Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Unlimited Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 48-72 Hrs Turnaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> All Formats (for print and digital use</ListGroupItem>
    </ListGroup>
                      </div>  
                      <div  className="combo-list">
                          <h6>special features</h6>
                          <ListGroup>
      <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> 2 Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Unlimited Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 48-72 Hrs Turnaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> All Formats (for print and digital use</ListGroupItem>
    </ListGroup>
                      </div>  
                    </div>
                    <div className="combo-price-wrapper">
<h2>$1200</h2>
<h6>70% DISSCOUNTED PRICE</h6>
<div className="call-discuss itemmain">
                      <span><Link to="#" title="Live Chat" target="_self" ><FaPhone/> +92 324 2340 583</Link></span>
                      <span><Link to="#" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</Link></span>
                      </div>
<Button className="btn-white ml-auto">Order Now</Button>
                    </div>
                   </div>
                </div>
            </div>
            </div>
        </section>   
        </>
    )
}
