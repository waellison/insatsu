import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter, faLinkedinIn, faGithubAlt, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="siteFooter">
      <div className="meta">
        <p>Copyright © 2022 by William Ellison.</p>
      </div>
      <div className="socialBox">
        <a href="//github.com/waellison" className="socialBtn githubLink">
            <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a href="//linkedin.com/in/tnwae" className="socialBtn linkedinLink">
            <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        <a href="//twitter.com/waedotpy" className="socialBtn twitterLink">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a href="//instagram.com/nobettershoulder" className="socialBtn instaLink">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href="mailto:waellison@gmail.com" className="socialBtn emailLink">
            <FontAwesomeIcon icon={faEnvelope}/>
        </a>
        <a href="//waellison.blog" className="socialBtn blogLink">
            <FontAwesomeIcon icon={faGlobeAmericas}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
