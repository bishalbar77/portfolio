import React from 'react';
import "./Skills.css";

const SkillCard = ({ SkillImage, SkillName }) => {
    return (
        <div className="skill">
            <img src={SkillImage} alt="Skill" />
            <p>{SkillName}</p>
        </div>
    );
}

export default SkillCard;