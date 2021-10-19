import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row d-flex mx-auto p-5">
                <div className="col-4 input-footer">
                    <h5>Sign up & get 10% Off</h5>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon2" />
                    <button class="input-group-text footer-btn" id="basic-addon2">Sign up</button>
                    </div>
                    <p>"Now customers only. Offer lasts 30 days. See terms"</p>
                </div>
                <div className="col-6 footer-text mx-auto">
                    <div className="d-flex">
                       <div className="mx-auto">
                            <h4>My Account</h4>
                            <h5>Profile</h5>
                            <h5>Account</h5>
                            <h5>Purchases</h5>
                            <h5>Credits</h5>
                            <h5>Preferences</h5>
                       </div>
                        <div className="mx-auto">
                            <h4>Support</h4>
                            <h5>Contact</h5>
                            <h5>FAQs</h5>
                            <h5>Shipping</h5>
                            <h5>Returns</h5>
                            <h5>Terms</h5>
                            <h5>Privacy</h5>
                        </div>
                        <div className="mx-auto">
                            <h4>Medical</h4>
                            <h5>About</h5>
                            <h5>Publishers</h5>
                            <h5>Affiliates</h5>
                            <h5>Vendors</h5>
                            <h5>Blog</h5>
                            <h5>Careers</h5>
                        </div>
                     </div>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-6">
                    
                    <img className="footer-img" src="https://nordis.true-emotions.studio/health/wp-content/uploads/sites/14/2018/05/logmed.svg" alt="" />
                </div>
                <div className="col-6 ">
                    <h6 className="text-color text-center"><span className="text-info">Copyright</span> © <span>M</span>edical. All Rights Reserved.</h6>
                </div>
            </div>

        </div>
    );
};

export default Footer;