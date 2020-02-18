import React, { Component } from 'react'
import paymentGateway from "../assets/payment-gateway.png"
import logoWhite from "../assets/logo-white.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <h5>Logo Design</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="#">Packages</Link></li>
                                    <li><Link to="#">Logo Design Portfolio</Link></li>
                                    <li><Link to="#">Logo Design Reviews</Link></li>
                                    <li><Link to="#">Why Choose Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <h5>Web Design</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="#">Packages</Link></li>
                                    <li><Link to="#">Web Design Portfolio</Link></li>
                                    <li><Link to="#">Web Design Reviews</Link></li>
                                    <li><Link to="#">Why Choose Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <h5>OTHER SERVICES</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="#">Mobile Apps</Link></li>
                                    <li><Link to="#">Banner Design</Link></li>
                                    <li><Link to="#">Brochure Design</Link></li>
                                    <li><Link to="#">Stationery Design</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h5>Contact &amp; Legal</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 last">
                                <img src={logoWhite} alt="" />
                                <ul className="list-unstyled">
                              
                                    <li>  <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=923242340583&text=Hello,%20please%20share%20details%20of%20your%20Project" target="_blank" ><FaWhatsapp /><span>+(92) 3242340583</span></a></li>
                                    <li><a rel="noopener noreferrer" href="tel:+923242340583"><MdPhone /> <span></span>+(92) 3242340583 </a></li>
                                    <li><a rel="noopener noreferrer" href="mailto:hello@midexigner.com"><FaEnvelope /><span>hello@midexigner.com</span></a></li>
                                    <li><a rel="noopener noreferrer" href="skype:midexigner?call"><FaSkype /><span>midexigner</span></a></li> 
                                </ul>
                            </div>
                        </div>
                        <div className="row copyright">
                            <div className="col-md-6 text-md-left text-center">
                                <p>© 2020 MI Dexigner. All rights reserved</p>
                                 <ul className="list-inline">
                                    <li className="list-inline-item"><a  rel="noopener noreferrer"href="https://facebook.com/midexigner" target="_blank"><FaFacebookF /></a></li>
                                    <li className="list-inline-item"><a  rel="noopener noreferrer" href="https://twitter.com/midexigner" target="_blank"><FaTwitter /></a> </li>
                                    <li className="list-inline-item"><a  rel="noopener noreferrer" href="https://www.instagram.com/midexigner" target="_blank"><FaInstagram /></a></li>
                                </ul> 
                            </div>
                            <div className="col-md-6 text-md-right text-center">
                                <img src={paymentGateway} alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
                <section className="disclaimer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h5>Disclaimer</h5>
                            <p>The logo, name and graphics of MI Dexigner and its products & services are the trademarks of MI Dexigner. All other company names, brand names, trademarks and logos mentioned on this website are the property of their respective owners and do not constitute or imply endorsement, sponsorship or recommendation thereof by MI Dexigner and do not constitute or imply endorsement, sponsorship or recommendation of MI Dexigner by the respective trademark owner. owner.</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
