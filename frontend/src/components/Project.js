import React from 'react';

const Project = ({ project }) => {
    const title = project.title.rendered;
    const content = project.content.rendered; 
    //resolve - check wp 
    // const image = project.featuredmedia;

    return (
        <div className='project-container'>
            <div className='project'>
                {/* <img src={image}></img> */}
                <h3 className='project-title' dangerouslySetInnerHTML={{ __html: title }}></h3>
                <p className='project-description' dangerouslySetInnerHTML={{ __html: content}}></p>
                <p><a href='https://github.com/EleanorKahn' target='blank'>View code</a></p>
            </div>
        </div>
    );
};

export default Project;