import React from 'react'
import '../css/Footer.css'
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className="container">
            <a href="#top">
            <div className="part1" >
                Back to top
            </div>
            </a>
            <div className="part2 row">
                <div class="col-lg-3 col-md-6 col-sm-6 listitems">
                    <strong><p>Get to Know Us</p></strong>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Amazon Cares</p>
                    <p>Gift a Smile</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 listitems">
                    <strong><p>Connect with Us</p></strong>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 listitems">
                    <strong><p>Make Money with Us</p></strong>
                    <p>Sell on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Fullfillment by Amazon</p>
                    <p>Advertize your Products</p>
                    <p>Amazon Pay for Merchants</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 listitems">
                    <strong><p>Let Us Help You</p></strong>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Return Center</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                </div>
            </div>
            <div className="part3 row">
                <div class="col-lg-3 col-md-3 col-sm-12 part3items">
                    Conditions of Use & Sale
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 part3items">
                    Privacy Notice
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 part3items">
                    Interest-Based Ads
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 part3items">
                    © 1996-2020, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </div>
    )
}

export default Footer
