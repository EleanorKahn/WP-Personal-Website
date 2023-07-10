import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Error from "../components/Error";

const AboutPage = () => {
    const [aboutTitle, setAboutTitle] = useState('');
    const [aboutContent, setAboutContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        requestAbout();
    }, []);

    const requestAbout = async() => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:8000/wp-json/wp/v2/aboutme");
            const data = await response.json();
            const title = data[0].title.rendered;
            const content = data[0].content.rendered;
            setAboutTitle(title);
            setAboutContent(content);
            setIsLoading(false);
            return data;
        } catch(err) {
            console.log(`there has been an error! ${err}`);
            setError(`There has been an error in the call to fetch`);
        } finally {
            console.log("I am in the finally block");
        }
    }

    return (
        <div className='about-page'>
            { error
            ? <Error error={error}/>
            : isLoading
            ? <Loading />
            : <section className='grid'>
                <h2 dangerouslySetInnerHTML={{__html: aboutTitle}}></h2>
                <article className='summary'>
                    <p dangerouslySetInnerHTML={{__html: aboutContent}}></p>
                </article>
            </section>
            } 
        </div>
    );
};

export default AboutPage;