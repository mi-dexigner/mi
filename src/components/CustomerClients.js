import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';
  import SliderCaption from './SliderCaption';
  const items = [
    {
      clientName: 'mark morik',
      clientPosition: 'ceo sparktech',
      clientDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '
    },
    {
      clientName: 'mark morik',
      clientPosition: 'ceo sparktech',
        clientDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      clientName: 'mark morik',
      clientPosition: 'ceo sparktech',
        clientDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
  ];
export default function CustomerClients(props) {
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
            key={item.clientName}
          >
          <SliderCaption>
       
      
        <div className="post__content" dangerouslySetInnerHTML={{__html: item.clientDesc}}></div>
        <div className="client-info">
        <h5>{item.clientName}</h5>
        <h6>{item.clientPosition}</h6>
        </div>
        </SliderCaption>
          </CarouselItem>
        );
      });
    return (
        <>
        <section className="customer-clients">
            <div className="container">
            <div className="row justify-content-center heading">
                <div className="col-md-9">
                <h3>what our clients say</h3>
                <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</h6>
                </div>
            </div>
            <div className="row">
            <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="client-slide"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
            </div>
            </div>
        </section>
        </>
    )
}

