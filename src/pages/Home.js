import React, { Component } from 'react'
import Head from '../components/Head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import CallToAction from '../components/CallToAction';
import ContentArea from '../components/ContentArea';
import Pricing from '../components/Pricing';
import HomeFeatures from '../components/HomeFeatures';
import PricingComboBox from '../components/PricingComboBox';
import Portfolio from '../components/Portfolio';
import ReasonChooseUs from '../components/ReasonChooseUs';
import CustomerClients from '../components/CustomerClients';
import AwardReconized from '../components/AwardReconized';
import Footer from '../components/Footer';

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
            <PricingComboBox/>
            <Portfolio/>
           <ReasonChooseUs/>
            <CustomerClients /> 
             <AwardReconized/>
            <Footer />
            </>
        )
    }
}
export default Main;