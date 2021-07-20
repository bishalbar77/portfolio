import React from 'react';
import { Link } from 'react-router-dom';
import "./PageFooter.css";

const PageFooter = ({ toLink }) => {
    return ( 
        <div className="footer">
            <div class="arrow">
                <Link to={toLink}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
            </div>
        </div>
    );
}

export default PageFooter;