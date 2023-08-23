import React, { useState, useEffect } from 'react';
import NotFound from '../components/NotFound';

const MyWorkPage = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    let projects = null;

    const requestWork = async () => {
        const URL = 'http://localhost:8000/wp-json/wp/v2/projects/';
        const response = await fetch(URL);
        const data = await response.json();
        projects = data;
        console.log(projects);
    }

    useEffect(() => {
        requestWork();
    },[])

    return (
        <div className='my-work-page'>
            <NotFound />
        </div>
    );
};

export default MyWorkPage;