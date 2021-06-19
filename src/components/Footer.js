import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Cancellation Policy</a></li>
                            <li><a href="#">Track your Order</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Store Location</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>So Young</h3>
                        <p>SoYoung is a female owned brand of thoughtfully-made lifestyle goods on a mission to make personal wellness sustainable, stylish and self-empowering.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
