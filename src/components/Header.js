import React from "react";
import pic1 from '../images/laura.png';
import Email from '../images/EmailIcon.png'
import Linkedin from '../images/LinkedinIcon.png'

export default function Header() {
    return (
        <div id="Header">
            <img src={pic1} alt="logo" className="Header-Image" />
            <h2 className="Header-name">Laura Smith</h2>
            <h6 className="Header-role">Frontend Developer</h6>
            <h5 className="Header-mail">laurasmith.website</h5>
            <div className="Button-component">
                <button className="Email-button"><img src={Email} alt="email-logo" className="Email-icon" />Email</button>
                <button className="Linkedin-button"><img src={Linkedin} alt="Linkedin-logo" className="Linkedin-icon" />LinkedIn</button>
            </div>
        </div>
    )
}