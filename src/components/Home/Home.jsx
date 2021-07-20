import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import HomeAnime from "../../assets/home_anime.gif";
import Typewriter from 'typewriter-effect';

class Home extends Component {

    render() {
        return (
            <div 
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                className="home-container">
                <div className="header-text">
                    <h1>Hello! I'm Bishal Rana</h1>
                    <p>
                        <Typewriter
                        options={{
                            strings: [' an App developer', ' a Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </p>
                </div>
                <div className="header-buttons">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src={HomeAnime} alt="Banner" className="home-anime"/>
                </div>
            </div>
        )
    }
}

export default Home;