import React from 'react'
import  {Link } from 'react-router-dom';
export default function CallToAction() {
    return (
        <>
        <section className="call-to-action">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <ul className="list-inline left-area-action">
  <li className="list-inline-item"><strong>50,000+</strong><span>SATISFIED CLIENTS</span><span>Logo & Web Projects</span></li>
  <li className="list-inline-item"><Link to='/'>Order <br/> now</Link></li>
  <li className="list-inline-item"><strong>50,000+</strong><span>Custom Logo <br/>
Design</span></li>
  <li className="list-inline-item"><strong>6048+</strong><span>Single Page <br/>
Websites ( Parallax)</span></li>
  <li className="list-inline-item"><strong>7040+</strong><span>Responsive<br/>
websites</span></li>
</ul>
        </div>
        </div>
        </div>    
        </section>   
        </>
    )
}
