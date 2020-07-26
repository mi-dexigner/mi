import React, { Component } from 'react'
import Head from '../components/Head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import CallToAction from '../components/CallToAction';
import ContentArea from '../components/ContentArea';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import HomeFeatures from '../components/HomeFeatures';
import ReasonChooseUs from '../components/ReasonChooseUs';
import CustomerClients from '../components/CustomerClients';
import AwardReconized from '../components/AwardReconized';

class Main extends Component {
    render() {
        return (
            <>
            <Head  title="Professional Logo Design By MI Dexigner | We Sprit Of Logo Design" description="A GREAT CORPORATE IDENTITY THAT CONNECTS WITH YOUR AUDIENCE INSTANTLY!"  />
            <Header/>
            <Slider />
            <CallToAction/>
            <ContentArea/>
            <Pricing/>
            <HomeFeatures/>
            {/* <section>Main package</section>
            <section>Recent Project</section>*/}
           <ReasonChooseUs/>
            <CustomerClients /> 
             <AwardReconized/>
            <Footer />
            </>
        )
    }
}
export default Main;