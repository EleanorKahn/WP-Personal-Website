import React, { useState } from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';

// inital mockup
const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");

    return (
        <div>
            <Form>
                <FormGroup>
                <Label htmlFor='firstName'>
                    First name 
                </Label>
                <Input 
                    type='text'
                    id='firstName'
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor='lastName'>
                    Last name 
                </Label>
                <Input 
                    type='text'
                    id='lastName'
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <Input 
                        type='email'
                        id='email'
                        value={email}
                        onChange={(value) => setEmail(value)}
                    />
                </FormGroup>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    );
};

export default ContactForm;