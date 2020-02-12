import React,{ useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardSubtitle } from 'reactstrap';
import classnames from 'classnames';

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
        <>
        <section className="pricing">
        <div className="container">
            <div className="row justify-content-center heading">
                <div className="col-md-9">
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
            <div className="row">
            <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
            <Col sm="4">
              <Card body>
                <CardTitle>BASIC</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>PROFESSIONAL</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>ULTRA</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Order Now</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle>BEGINNER'S</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>BEGINNER'S PLUS</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Order Now</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>SPECIAL BUSINESS</CardTitle>
                <CardSubtitle>Limited Time Offer</CardSubtitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Order Now</Button>
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
