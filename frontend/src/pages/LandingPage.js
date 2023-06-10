import React, { useState, useEffect } from 'react'; 
import Loading from '../components/Loading';
import Error from '../components/Error';

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [error, setError] = useState(null);

    useEffect(() =>{
        requestLanding();
    },[]);

    async function requestLanding() {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:8000/wp-json/wp/v2/test-landing');
            const data = await response.json();
            setIsLoading(false);
            setHeading(data[0].title.rendered);
            setSubheading(data[0].content.rendered);
            return data;
        } catch(err) {
            console.log(`${err}`);
            setIsLoading(false);
            setError(`There has been an error in the call to fetch`);
        } finally {
            console.log('this is the finally block');
        }
    }

    return (
        <div className='landing-page'>
            {error
            ? <Error error={error}/>
            : isLoading
            ? <Loading />
            : <>
                <h2>{heading}</h2>
                <h3 dangerouslySetInnerHTML={{__html: subheading}}></h3>
                <ul className='horizontal'>
                    <li><i className="fa-brands fa-react fa-2xl"></i></li>
                    <li><i className="fa-brands fa-js fa-2xl"></i></li>
                    <li><i className="fa-brands fa-css3-alt fa-2xl"></i></li>
                    <li><i className="fa-brands fa-html5 fa-2xl"></i></li>
                    <li><i className="fa-brands fa-bootstrap fa-2xl"></i></li>
                    <li><i className="fa-brands fa-github fa-2xl"></i></li>
                    <li><i className="fa-brands fa-node fa-2xl"></i></li>
                    <li><i className="fa-brands fa-npm fa-2xl"></i></li>
                    <li><i className="fa-brands fa-php fa-2xl"></i></li>
                    <li><i className="fa-brands fa-wordpress fa-2xl"></i></li>
                </ul>
                </>
            }
        </div>
    );
};

export default LandingPage;