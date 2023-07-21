import React, { useState } from 'react';
import { Input, Label, Form, FormGroup, Button, Row, Col, Container } from 'reactstrap';

// inital mockup
const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(message);

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='contact-page'>
            <div className='contact-form'>
            <h3>Contact Me</h3>
                <Container>
                    <Form className='form'>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                
                                    <Label                      
                                        htmlFor='firstName'
                                        className='form-label'
                                    >
                                        First name 
                                    </Label>
                                    <Input 
                                        className='input'
                                        type='text'
                                        id='firstName'
                                        placeholder='Jane'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                            <FormGroup>
                                
                                    <Label                      
                                        htmlFor='lastName'
                                        className='form-label'
                                    >
                                        Last name 
                                    </Label>
                                    <Input 
                                        className='input'
                                        type='text'
                                        id='lastName'
                                        placeholder='Doe'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    </FormGroup>
                                </Col>
                            
                        </Row>
                        <FormGroup>
                            <Label 
                                htmlFor='email'
                                className='form-label'
                            >
                                Email
                            </Label>
                            <Input 
                                className='input'
                                type='email'
                                id='email'
                                placeholder='janedoe@JD.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label 
                                htmlFor='message'
                                className='form-label'
                                >
                                Your message
                            </Label>
                            <Input 
                                className='input'
                                type='textarea'
                                id='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </FormGroup>
                        <Button 
                            type='submit'
                            className='submit'
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default ContactForm;