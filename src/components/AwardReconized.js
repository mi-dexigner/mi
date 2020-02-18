import React from 'react'
import awardOne from '../assets/award1.png' 
import awardTwo from '../assets/award2.png' 
import awardThree from '../assets/award3.png' 
import awardFour from '../assets/award4.png' 

export default function AwardReconized() {
    return (
        <>
          <section className="award-reconized">
        <div className="container">
        <div className="row justify-content-center heading">
                <div className="col-md-9">
                <h3>awards and reconization</h3>
                <h6>We have been recognised for our excellent design portfolio globally.</h6>
                </div>
            </div>
            <div className="row">
                <ul>
                    <li><img src={awardOne} alt="award 1"/></li>
                    <li><img src={awardTwo} alt="award 2"/></li>
                    <li><img src={awardThree} alt="award 3"/></li>
                    <li><img src={awardFour} alt="award 4"/></li>
                </ul>
            </div>
        </div>
        </section>  
        </>
    )
}
