import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import AboutVector from '../../assets/about_vector.png';
import "./About.css";
import PageFooter from '../PageFooter/PageFooter';
import AboutAnime from "../../assets/about_anime.gif";

const About = () => {
    return (
        <div className="section-container">
            <PageHeader heading="About" details="Hi" />

            <div className="vector-frame">
                <img src={AboutVector} className="about-vector" alt="About" />
            </div>

            <div className="about-main">
                <div className="about-section-left">
                    <h3 className="about-sub-heading">Hello</h3>
                    <p className="about-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere corrupti voluptate laboriosam nihil quia tempore architecto facilis, unde ducimus dicta eum rem vero deserunt illum tenetur molestias voluptas expedita&nbsp;<a href="https://github.com/bishalbar77" className="about-link-element">Github</a></p>
                    <h3 className="about-sub-heading">Hello</h3>
                    <p className="about-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere corrupti voluptate laboriosam nihil quia tempore architecto facilis, unde ducimus dicta eum rem vero deserunt illum tenetur molestias voluptas expedita&nbsp;<a href="https://github.com/bishalbar77" className="about-link-element">Github</a></p>
                    <h3 className="about-sub-heading">Hello</h3>
                    <p className="about-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere corrupti voluptate laboriosam nihil quia tempore architecto facilis, unde ducimus dicta eum rem vero deserunt illum tenetur molestias voluptas expedita&nbsp;<a href="https://github.com/bishalbar77" className="about-link-element">Github</a></p>
                </div>
                <div className="about-section-right">
                    <img src={AboutAnime} alt="AboutAnime" className="about-anime"/>
                </div>
            </div>

            <PageFooter footer="Check out my " link="projects" toLink="/projects" />
        </div>
    )
}

export default About;