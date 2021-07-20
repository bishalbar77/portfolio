import React from 'react';
import "./Projects.css";
import PageHeader from '../PageHeader/PageHeader';
import PageFooter from '../PageFooter/PageFooter';
import { projectsData } from '../../assets/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="section-container">
        <PageHeader heading="My Projects" details="Hi" />

        <div 
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" 
            className="projects-card-container">
            {
                projectsData.map(({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) => {
                    return <ProjectCard 
                        projectName={projectName} 
                        projectDescription={projectDescription} 
                        imageUrl={imageUrl} 
                        videoUrl={videoUrl} 
                        projectUrl={projectUrl} 
                    />;
                })
            }
        </div>

        <PageFooter toLink="/skills" />
        </div>
    )
}

export default Projects;