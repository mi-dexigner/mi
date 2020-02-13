import React,{ useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardSubtitle,ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';
import { FaCheck } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
        <>
        <section className="pricing">
          <div className="heading">
        <div className="container">
        <div className="row justify-content-center">
                <div className="col-md-9 text-center">
                <h3>Start Your Project With
An Amazing Quality</h3>
                <h6>We offers High Quality and Professional output...! 
100% Satisfaction Guaranteed...!!!</h6>
<Nav tabs className="justify-content-center">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
          Logo Packages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
          Web Packages
          </NavLink>
        </NavItem>
      </Nav>
                </div>
                </div>
            </div>
            </div>
        <div className="container">
            
            <div className="row">
            <TabContent activeTab={activeTab} className=" col-md-12">
        <TabPane tabId="1" >
        <Row>
            <Col sm="4">
              <Card body className='pricing_table cyan'>
                <CardTitle>BASIC</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText><span className="currency">$</span>17.99 <span className="less-price"><s>$9.99</s><span className="only">Only</span></span></CardText>
                <ListGroup>
      <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 24-48 Hrs Tumaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> Free Colour and Grayscale options</ListGroupItem>
      <ListGroupItem><FaCheck/> 100% Ownership Rights</ListGroupItem>
    </ListGroup>
    <div className="call-discuss itemmain">
                      <span><FaPhone/> 0203 129 0853</span>
                      <span><a href="javascript:;" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</a></span>
                      </div>
    <Button className="btn-white m-auto">Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body  className='pricing_table cyan-dark'>
                <CardTitle>PROFESSIONAL</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText><span className="currency">$</span>17.99 <span className="less-price"><s>$9.99</s><span className="only">Only</span></span></CardText>
                <ListGroup>
                <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 24-48 Hrs Tumaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> Free Colour and Grayscale options</ListGroupItem>
      <ListGroupItem><FaCheck/> 100% Ownership Rights</ListGroupItem>
    </ListGroup>
    <div className="call-discuss itemmain">
                      <span><FaPhone/> 0203 129 0853</span>
                      <span><a href="javascript:;" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</a></span>
                      </div>
    <Button className="btn-white m-auto">Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body  className='pricing_table cyan'>
                <CardTitle>ULTRA</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText><span className="currency">$</span>17.99 <span className="less-price"><s>$9.99</s><span className="only">Only</span></span></CardText>
                <ListGroup>
                <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 24-48 Hrs Tumaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> Free Colour and Grayscale options</ListGroupItem>
      <ListGroupItem><FaCheck/> 100% Ownership Rights</ListGroupItem>
    </ListGroup>
    <div className="call-discuss itemmain">
                      <span><FaPhone/> 0203 129 0853</span>
                      <span><a href="javascript:;" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</a></span>
                      </div>
    <Button className="btn-white m-auto">Order Now</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="4">
            <Card body  className='pricing_table cyan'>
                <CardTitle>BEGINNER'S</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText><span className="currency">$</span>17.99 <span className="less-price"><s>$9.99</s><span className="only">Only</span></span></CardText>
                <ListGroup>
                <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 24-48 Hrs Tumaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> Free Colour and Grayscale options</ListGroupItem>
      <ListGroupItem><FaCheck/> 100% Ownership Rights</ListGroupItem>
    </ListGroup>
    <div className="call-discuss itemmain">
                      <span><FaPhone/> 0203 129 0853</span>
                      <span><a href="javascript:;" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</a></span>
                      </div>
    <Button className="btn-white m-auto">Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
            <Card body  className='pricing_table cyan-dark'>
                <CardTitle>BEGINNER'S PLUS</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText><span className="currency">$</span>17.99 <span className="less-price"><s>$9.99</s><span className="only">Only</span></span></CardText>
                <ListGroup>
                <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 24-48 Hrs Tumaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> Free Colour and Grayscale options</ListGroupItem>
      <ListGroupItem><FaCheck/> 100% Ownership Rights</ListGroupItem>
    </ListGroup>
    <div className="call-discuss itemmain">
                      <span><FaPhone/> 0203 129 0853</span>
                      <span><a href="javascript:;" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</a></span>
                      </div>
    <Button className="btn-white m-auto">Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
            <Card body  className='pricing_table cyan'>
                <CardTitle>SPECIAL BUSINESS</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText><span className="currency">$</span>17.99 <span className="less-price"><s>$9.99</s><span className="only">Only</span></span></CardText>
                <ListGroup>
                <ListGroupItem><FaCheck/> 2 custom Logo Design Concepts</ListGroupItem>
      <ListGroupItem><FaCheck/> Dedicated Designer</ListGroupItem>
      <ListGroupItem><FaCheck/> Revisions</ListGroupItem>
      <ListGroupItem><FaCheck/> 24-48 Hrs Tumaround Time</ListGroupItem>
      <ListGroupItem><FaCheck/> Free Colour and Grayscale options</ListGroupItem>
      <ListGroupItem><FaCheck/> 100% Ownership Rights</ListGroupItem>
    </ListGroup>
    <div className="call-discuss itemmain">
                      <span><FaPhone/> 0203 129 0853</span>
                      <span><a href="javascript:;" title="Live Chat" target="_self" ><IoIosChatbubbles/>Chat Live</a></span>
                      </div>
    <Button className="btn-white m-auto">Order Now</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
            </div>
        </div>    
        </section>    
        </>
    )
}
