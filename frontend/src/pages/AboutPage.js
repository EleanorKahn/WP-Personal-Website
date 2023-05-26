import React, { useState, useEffect } from 'react';

const AboutPage = () => {
    const [aboutTitle, setAboutTitle] = useState('');
    const [aboutContent, setAboutContent] = useState('');

    useEffect(() => {
        requestAbout();
    }, []);

    const requestAbout = async() => {
        try {
            const response = await fetch("http://localhost:8000/wp-json/wp/v2/aboutme");
            const data = await response.json();
            const thisData = data[0];
            const title = thisData.title;
            const content = thisData.content;
            setAboutTitle(data.title);
            setAboutContent(data.content);
            console.log(data);
            console.log(thisData);
            return data;
        } catch(error) {
            console.log(`there has been an error! ${error}`);
        }
    }

    return (
        <div className='about-page'>
            <section className='grid'>
                <h2>{aboutTitle}</h2>
                <article className='summary'>
                    <p>{aboutContent}</p>
                </article>
            </section>
        </div>
    );
};

export default AboutPage;