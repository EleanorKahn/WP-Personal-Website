import React from 'react';

const Loading = () => {
    return (
        <div className='loading spinner-border' role='status' style={{color: '#385e26'}}>
            <span className='visually-hidden'>Loading...</span>
        </div>
    );
};

export default Loading;