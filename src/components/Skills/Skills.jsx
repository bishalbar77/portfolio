import React from 'react';
import "./Skills.css";
import PageHeader from '../PageHeader/PageHeader';
import PageFooter from '../PageFooter/PageFooter';
import SkillsVector from '../../assets/skills_vector.png';
import { skillList } from '../../assets/skillsData';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div 
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" 
            className="section-container">
            <PageHeader heading="My Skills" details="Hi" />
            <div className="skills-card-container">
                {
                    skillList.map(skill => {
                        return <SkillCard SkillImage={skill.skillUrl} SkillName={skill.skillName} />
                    })
                }
            </div>
            <PageFooter toLink="/contact" />
            <div className="skills-vector-frame">
                <img src={SkillsVector} alt="Skills" className="skills-vector" />
            </div>
        </div>
    )
}

export default Skills;