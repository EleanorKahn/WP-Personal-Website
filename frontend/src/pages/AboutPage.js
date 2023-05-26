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
            const title = data[0].title.rendered;
            const content = data[0].content.rendered;
            setAboutTitle(title);
            setAboutContent(content);
            console.log(data);
            console.log(data[0]);
            return data;
        } catch(error) {
            console.log(`there has been an error! ${error}`);
        }
    }

    return (
        <div className='about-page'>
            <section className='grid'>
                <h2 dangerouslySetInnerHTML={{__html: aboutTitle}}></h2>
                <article className='summary'>
                    <p dangerouslySetInnerHTML={{__html: aboutContent}}></p>
                </article>
            </section>
        </div>
    );
};

export default AboutPage;