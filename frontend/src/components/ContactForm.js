import React, { useState } from 'react';

// inital mockup
const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <Form>
                <label htmlFor='firstName'>
                    First name: 
                </label>
                <input 
                    type='text'
                    id='firstName'
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                />
                <label htmlFor='lastName'>
                    Last name: 
                </label>
                <input 
                    type='text'
                    id='lastName'
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                />
                <button type='submit'>Submit</button>
            </Form>
        </div>
    );
};

export default ContactForm;