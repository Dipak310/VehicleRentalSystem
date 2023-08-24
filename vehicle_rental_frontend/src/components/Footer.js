import React, { useState } from 'react';
import '../css/footerStyles.css';

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscription = async (e) => {
    e.preventDefault();

    // Simulated API call
    try {
      // Simulate a check if the email is already subscribed
      // You can modify this logic as per your actual API response
      if (subscriberEmail === 'existing@example.com') {
        setSubscriptionMessage('Already Subscribed.');
      } else {
        setSubscriptionMessage('Subscribed successfully.');
      }
    } catch (error) {
      console.error('Error handling subscription:', error);
      setSubscriptionMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <footer>
      <div className="footer-top">
        {/* Your footer top content */}
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6>About Us</h6>
              <ul>
                {/* Links */}
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6>Subscribe Newsletter</h6>
              <div className="newsletter-form">
                <form onSubmit={handleSubscription}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="subscriberemail"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      className="form-control newsletter-input"
                      required
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <button type="submit" className="btn btn-block">
                    Subscribe <span className="angle_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                  </button>
                </form>
                <p className="subscribed-text">*We send great deals and latest auto news to our subscribed users every week.</p>
                <p>{subscriptionMessage}</p>
              </div>
            </div>
            <div className="col-md-6 col-md-push-6 text-right">
              <div className="footer_widget">
                <p>Connect with Us:</p>
                <ul>
                  {/* Social media links */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-md-pull-6">
              <p className="copy-right">Copyright &copy; {new Date().getFullYear()} Car Rental Portal. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
