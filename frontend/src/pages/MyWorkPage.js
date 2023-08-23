import React, { useState, useEffect } from 'react';
import NotFound from '../components/NotFound';

const MyWorkPage = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");

    return (
        <div className='my-work-page'>
            <NotFound />
        </div>
    );
};

export default MyWorkPage;