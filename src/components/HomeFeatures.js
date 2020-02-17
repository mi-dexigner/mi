import React from 'react'
import CustomerSupport from '../assets/icons/24X7-customer-support.png';
import OwnershipRights from '../assets/icons/100%-Ownership-Rights.png';
import MoneyBackGuarantee from '../assets/icons/Money-Back-Guarantee.png';
import IndustrySpecificDesigners from '../assets/icons/Industry-Specific-Designers.png';

export default function HomeFeatures() {
    return (
        <>
         <section className="features">
        
         <div className="container">
         <div className="row justify-content-center heading">
                <div className="col-md-9">
                <h3> mi dexigner features</h3>
                <h6>We offers High Quality and Professional output...! 
100% Satisfaction Guaranteed...!!!</h6>
                </div>
            </div>
            <div className="row">
            <div className="col-md-3">
                <div className="card single-content">
  <img src={CustomerSupport} alt="..." />
  <div className="card-body">
    <p className="card-text">24 X 7
Customer Support</p>
  </div>
</div>
  </div>
            <div className="col-md-3">
                <div className="card single-content">
  <img src={OwnershipRights} alt="..." />
  <div className="card-body">
    <p className="card-text">100%
Ownership Rights</p>
  </div>
</div>
  </div>
            <div className="col-md-3">
                <div className="card single-content">
  <img src={MoneyBackGuarantee} alt="..." />
  <div className="card-body">
    <p className="card-text">Money Back Guarantee</p>
  </div>
</div>
  </div>
            <div className="col-md-3">
                <div className="card single-content">
  <img src={IndustrySpecificDesigners} alt="..." />
  <div className="card-body">
    <p className="card-text">Industry Specific Designers</p>
  </div>
</div>
  </div>
            </div>
         </div>
        </section>   
        </>
    )
}
