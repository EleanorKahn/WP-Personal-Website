import React, { useState, useEffect } from 'react';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import Project from '../components/Project';

const MyWorkPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const requestWork = async () => {
        const URL = 'http://localhost:8000/wp-json/wp/v2/project';
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setProjects(data);
        setLoading(false);
        console.log(projects);
    }

    useEffect(() => {
        requestWork();
    },[])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='my-work-page'>
            {projects.length && !loading &&
                <div>
                    {projects.map((project) => {
                        console.log(project.title.rendered);
                        return <Project />
                    })}
                </div>}
            <NotFound />
        </div>
    );
};

export default MyWorkPage;