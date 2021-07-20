import React from 'react';
import "./Contact.css";
import PageHeader from '../PageHeader/PageHeader';
import ContactVector from '../../assets/contact_anime.png';
import GithubIcon from '../../assets/gh.png';
import InstagramIcon from '../../assets/in.png';
import LinkedInIcon from '../../assets/li.png';

const Contact = () => {
    return (
        <div className="section-container">
            <PageHeader heading="Get in touch" details="Hi" />
            <div className="contact-form-container">
                <form action="" className="contact-form">
                    <input type="email" placeholder="Your Email address" name="email" className="input-box email"/>
                    <textarea type="text" placeholder="Your message..." name="message" className="input-box message"></textarea>
                    <button className="contact-btn">Send Email</button>

                </form>
            </div>
            <div className="social-icons-container">
                <a href="https://www.facebook.com/bishalbar77" className="social-icon">
                    <img src={GithubIcon} alt="Github" className="social-icon-image" />
                </a>
                <a href="https://www.instagram.com/bishalbar77/" className="social-icon">
                    <img src={InstagramIcon} alt="Instagram" className="social-icon-image" />
                </a>
                <a href="https://www.linkedin.com/in/bishalbar77/" className="social-icon">
                    <img src={LinkedInIcon} alt="LinkedIn" className="social-icon-image" />
                </a>
            </div>

            <div className="vector-frame">
                <img src={ContactVector} className="about-vector" alt="Contact" />
            </div>
        </div>
    )
}

export default Contact;