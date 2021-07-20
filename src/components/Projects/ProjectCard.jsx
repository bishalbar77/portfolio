import React from 'react';
import "./Projects.css";

const ProjectCard = ({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-link">
                    <img src={imageUrl} alt="Project" className="project-image"/>
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">
                    {projectName}
                </h2>
                <p className="project-details">{projectDescription}</p>
                <a href={videoUrl} className="project-live-link">
                    Live Demo
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;