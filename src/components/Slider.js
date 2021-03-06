import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
 
} from 'reactstrap';
import  {Link } from 'react-router-dom';
import SliderCaption from './SliderCaption';
import webDevelopmentImg from '../assets/web-development.png';
import graphicDesignImg from '../assets/graphic-design.png';
import mobileDevelopmentImg from '../assets/mobile-development.png';
import socialMediaImg from '../assets/social-media.png';
const items = [
  {
    src: webDevelopmentImg,
    heading: 'web ',
    subtitle: 'development',
    caption: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> ',
    buttonLink:'#',
    buttonText:'Get Started'
  },
  {
    src: graphicDesignImg,
    heading: 'Graphic ',
    subtitle: 'Design',
    caption: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> ',
    buttonLink:'#',
    buttonText:'Get Started'
  },
  {
    src: mobileDevelopmentImg,
    heading: 'Mobile App ',
    subtitle: 'Development',
    caption: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> ',
    buttonLink:'#',
    buttonText:'Get Started'
  },
  
  {
    
    src: socialMediaImg,
    heading: 'SOCIAL MEDIA ',
    subtitle: 'MARKETING',
    caption: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> ',
    buttonLink:'#',
    buttonText:'Get Started'
  }
  
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="background-gradient"
      >
       <Container className="caption-text">
         <Row  md="2">
           <Col> 
        <SliderCaption>
        <h2>{item.heading}</h2>
        <h3>{item.subtitle}</h3>
      
        <div className="post__content" dangerouslySetInnerHTML={{__html: item.caption}}></div>
        <Link className="btn btn-white" to={item.buttonLink}>{item.buttonText}</Link>
        </SliderCaption></Col>
           <Col><img src={item.src} alt={item.heading} /></Col>
         </Row>
       </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="main-slider"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      
    </Carousel>
  );
}

export default Slider;