import React from 'react'
import workOne from '../assets/icons/work/work-01.jpg';
import workTwo from '../assets/icons/work/work-02.jpg';
import workThree from '../assets/icons/work/work-03.jpg';
import workFour from '../assets/icons/work/work-04.jpg';
import workFive from '../assets/icons/work/work-05.jpg';
import workSix from '../assets/icons/work/work-06.jpg';
import workSeven from '../assets/icons/work/work-07.jpg';
import workEight from '../assets/icons/work/work-08.jpg';

export default function Portfolio() {
    return (
        <>
         <section className="recent-work">
         <div className="container">
         <div className="row justify-content-center heading">
                <div className="col-md-9">
                <h3> recent projects</h3>
                <h6>We offers High Quality and Professional output...! 
100% Satisfaction Guaranteed...!!!</h6>
                </div>
            </div>
            <div className="row no-gutters">
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workOne} alt="Card " />
             {/*    <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div> */}
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workTwo} alt="Card " />
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workThree} alt="Card " />
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workFour} alt="Card " />
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workFive} alt="Card " />
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workSix} alt="Card " />
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workSeven} alt="Card " />
</div>
  </div>
            <div className="col-md-3 filter-item vege">
                <div className="card bg-dark text-white single-portfolio">
                <img class="card-img" src={workEight} alt="Card " />
</div>
  </div>
          
            </div>
         </div>
        </section>   
        </>
    )
}
