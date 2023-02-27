import React from "react";
import Facebook from "../images/FacebookIcon.png";
import Twitter from "../images/TwitterIcon.png";
import Insta from "../images/InstagramIcon.png";
import GitHub from "../images/GitHubIcon.png";

export default function Footer() {
    return (
        <div className="Footer">
            <img src={Twitter} alt="Facebook icon" className="Twitter-icon" />
            <img src={Facebook} alt="Facebook icon" className="Facebook-icon" />
            <img src={Insta} alt="Facebook icon" className="Insta-icon" />
            <img src={GitHub} alt="Facebook icon" className="Github-icon" />

        </div>
    )
}