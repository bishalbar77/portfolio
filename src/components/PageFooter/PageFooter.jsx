import React from 'react';
import { Link } from 'react-router-dom';
import "./PageFooter.css";

const PageFooter = ({ footer, link, toLink }) => {
    return ( 
        <div className="footer">
            {footer}
            <Link to={toLink} className="footer-link-element">{link}</Link>
        </div>
    );
}

export default PageFooter;