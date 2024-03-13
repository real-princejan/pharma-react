import React from 'react'
import Header from '../components/Layout/Header'
import CheckoutSteps from "../components/Checkout/CheckoutSteps.js";
import Payment from "../components/Payment/Payment.js";
import Footer from '../components/Layout/Footer';

const CheckoutPage = () => {
  return (
    <div>
        <Header />
        <br />
        <br />
        <CheckoutSteps active={2} />
        <Payment />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default CheckoutPage