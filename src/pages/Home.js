import React, { Component } from 'react'
import Head from '../components/Head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

class Main extends Component {
    render() {
        return (
            <>
            <Head  title="Professional Logo Design By MI Dexigner | We Sprit Of Logo Design" description="A GREAT CORPORATE IDENTITY THAT CONNECTS WITH YOUR AUDIENCE INSTANTLY!"  />
            <Header/>
            <Slider />
            <section>call to action</section>
            <section>content area</section>
            <section>Pricing</section>
            <section>Features</section>
            <section>Main package</section>
            <section>Recent Project</section>
            <section>Reason to choose us</section>
            <section>Customer clients</section>
            <section>Award Reconized</section>
            <Footer />
            </>
        )
    }
}
export default Main;