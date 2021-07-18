import React from 'react';
import "./PageHeader.css";

const PageHeader = ({ heading, details}) => {
    return (
        <div className="header-container">
            <h1>{heading}</h1>
            <p>{details}</p>
        </div>
    );
}

export default PageHeader;