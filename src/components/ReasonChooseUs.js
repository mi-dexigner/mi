import React from 'react'
import iconOne from '../assets/icons/reasons/icon-1.png';
import iconTwo from '../assets/icons/reasons/icon-2.png';
import iconThree from '../assets/icons/reasons/icon-3.png';
import iconFour from '../assets/icons/reasons/icon-4.png';
import iconFive from '../assets/icons/reasons/icon-5.png';
import iconSix from '../assets/icons/reasons/icon-6.png';
import iconSeven from '../assets/icons/reasons/icon-7.png';
import iconEight from '../assets/icons/reasons/icon-8.png';

export default function ReasonChooseUs() {
    return (
        <>
            <section className="reason-choose">
                <div className="container">
                    <div className="row justify-content-center heading">
                        <div className="col-md-9">
                            <h3>reasons to choose us</h3>
                            <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconOne} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">Low prices, high quality and on-time completion.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconTwo} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">We offer great support to all customers.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconThree} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">Non Disclosure agreements on request.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconFour} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">Proper testing and Bug free delivery.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconFive} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">Ultra responsive compatibility to all devices.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconSix} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">1000's of clients from all over the world.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconSeven} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">Proper planning for all projects till delivery..</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div class="media">
                                <img class="mr-3" src={iconEight} alt="Icon" />
                                <div class="media-body">
                                    <h5 class="mt-0">We don't disclose client's works for marketing purposes.</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
