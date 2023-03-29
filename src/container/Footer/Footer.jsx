import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Plot-456, Mumbai, MI 500673, IND</p>
        <p className="p__opensans">+33 212-344-1230</p>
        <p className="p__opensans">+33 212-555-1230</p>
        <p style={{ color: "whitesmoke" }}>email: customservice@tajrestaurant.com</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        {/* eslint-disable-next-line */}
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 6:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 <b style={{ color: "golden", fontSize: "1rem" }}>Taj Mahal Restaurant</b> All Rights reserved.</p>
      <p className='p__opensans'>Made for <b style={{ color: "darkgreen", fontSize: "1.5rem" }}><a href="https://www.linode.com/">Linode</a></b> ❤️ <b style={{ color: "blue", fontSize: "1.5rem" }}><a href="https://hashnode.com/">Hashnode</a></b></p>
    </div>

  </div>
);

export default Footer;
