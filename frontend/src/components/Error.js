import React from 'react'

const Error = ({ error }) => {
    return (
        <div className='error'>An error has occured: {error}</div>
    );
};

export default Error