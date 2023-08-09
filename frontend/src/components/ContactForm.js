import React, { useState } from 'react';
import { Input, Label, Form, FormGroup, Button, Row, Col, Container } from 'reactstrap';

// inital mockup
const ContactForm = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    //changes to state need to be reflected in UI
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        setValues({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
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
                                        name='firstName'
                                        placeholder='Jane'
                                        // value={firstName}
                                        onChange={(e) => handleChange(e)}
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
                                        name='lastName'
                                        placeholder='Doe'
                                        // value={lastName}
                                        onChange={(e) => handleChange(e)}
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
                                name='email'
                                placeholder='janedoe@JD.com'
                                // value={email}
                                onChange={(e) => handleChange(e)}
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
                                name='message'
                                // value={message}
                                onChange={(e) => handleChange(e)}
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