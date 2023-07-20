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

    }

    return (
        <div className='contact-form'>
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
                                type='text'
                                id='firstName'
                                placeholder='Jane'
                                value={firstName}
                                onChange={(firstName) => setFirstName(firstName)}
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
                                type='text'
                                id='lastName'
                                placeholder='Doe'
                                value={lastName}
                                onChange={(value) => setLastName(value)}
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
                        type='email'
                        id='email'
                        placeholder='janedoe@JD.com'
                        value={email}
                        onChange={(value) => setEmail(value)}
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
                        type='textarea'
                        id='message'
                        value={message}
                        onChange={(value) => setMessage(value)}
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
    );
};

export default ContactForm;