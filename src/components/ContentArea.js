import React from 'react'
import iconsTechnologies from '../assets/icons/icons-technologies.png';
import iconsCustomer from '../assets/icons/icons-customer.png';
import iconsQuality from '../assets/icons/icons-quality.png';
export default function ContentArea() {
    return (
        <>
        <section className="content-area">
        <div className="container">
            <div className="row justify-content-center heading">
                <div className="col-md-9">
                <h3>We are a bunch of hard workers!</h3>
                <h6>We have <strong>1000,s</strong> of satisfies <strong>customers</strong> all over <strong>the world</strong>, We trus in quality and support, 
world best features and qualities in affordable price. <strong> Many resons to choose us</strong>...!</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <div className="card single-content">
  <img src={iconsTechnologies} alt="We Working With The Latest  <br/>
Technologies...!" />
  <div className="card-body">
    <p className="card-text">We Working With The Latest  <br/>
Technologies...!</p>
  </div>
</div>
  </div>
                <div className="col-md-4">
                <div className="card single-content">
  <img src={iconsCustomer} alt="Best Support We Provide to The<br/>
Customers...!" />
  <div className="card-body">
    <p className="card-text">Best Support We Provide to The<br/>
Customers...!</p>
  </div>
</div>
  </div>
                <div className="col-md-4">
                <div className="card single-content">
  <img src={iconsQuality} alt="Fast Delivery With Perfect <br/>
Quality...!" />
  <div className="card-body">
    <p className="card-text">Fast Delivery With Perfect <br/>
Quality...!</p>
  </div>
</div>
  </div>
            </div>
        </div>    
        </section>    
        </>
    )
}
