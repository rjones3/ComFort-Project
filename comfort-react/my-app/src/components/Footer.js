import React from 'react' 

function Footer() {
    return (
            <>
                <div className="footer-back-home">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <ul className="footer-list-struct">
                                    <li>Learn About Us</li>
                                    <li><a href="#link">Contact Us</a></li>
                                    <li className="hidden-xs"><a href="#link">Careers</a></li>
                                    <li className="hidden-xs"><a href="#link">Blog</a></li>
                                    <li><a href="#link">About ComFort</a></li>
                                    <li className="hidden-xs"><a href="#link">Become an Affiliate</a></li>
                                    <li className="hidden-xs"><a href="#link">Terms Of Service</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <ul className="footer-list-struct">
                                    <li>Build Your ComFort</li>
                                    <li><a href="#link">Build A Couch</a></li>
                                    <li className="hidden-xs"><a href="#link">Build A Chair</a></li>
                                    <li><a href="#link">Build A Table</a></li>
                                    <li className="hidden-xs"><a href="#link">Build A Bed</a></li>
                                    <li><a href="#link"><i className="fas fa-chevron-right"></i> See More</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <ul className="footer-list-struct">
                                    <li>Room Categories</li>
                                    <li><a href="http://localhost:3000/room/livingroom">Living Room</a></li>
                                    <li><a href="http://localhost:3000/room/outdoor">Outdoors</a></li>
                                    <li className="hidden-xs"><a href="http://localhost:3000/room/diningroom">Dining Room</a></li>
                                    <li><a href="http://localhost:3000/room/bedroom">Bedroom</a></li>
                                    <li><a href="#link"><i className="fas fa-chevron-right"></i> See More</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-xs-6"> 
                                <ul className="footer-list-struct">
                                    <li>Help/FAQ</li>
                                    <li><a href="#link">Your Account</a></li>
                                    <li><a href="#link">Your Orders</a></li>
                                    <li className="hidden-xs"><a href="#link">Shipping Rates & Policies</a></li>
                                    <li><a href="#link">Returns & Replacements</a></li>
                                    <li><a href="#link">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="footer-lang">
                                    <img src="/images/logo.png" alt="logo" height="100" width="100" />
                                    <a href="#link">English <i className="fas fa-chevron-down"></i></a>
                                    <a href="#link">United States <i className="fas fa-chevron-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-back">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright-front">
                                    <ul>
                                        <li>Conditions of Use</li>
                                        <li>Privacy Notice</li>
                                        <li>Interest-Based Ads&copy;</li>
                                        <li>1996-2019, ComFort.com, Inc. or its affiliates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer