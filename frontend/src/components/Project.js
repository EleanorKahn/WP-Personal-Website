import React from 'react';

const Project = ({ project }) => {
    const title = project.title.rendered;
    const content = project.content.rendered; 
    
    return (
        <div className='project'>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Project;