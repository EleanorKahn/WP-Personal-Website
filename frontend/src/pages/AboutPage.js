import React from 'react';
import { Row, Col } from 'reactstrap';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <Row className='grid row'>
                <Col className='col-md-6'>
                    <h2>Hi, I'm Eleanor</h2>
                </Col>
                <Col className='col-md-6'>
                    <article className='summary'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </article>
                </Col>
            </Row>
        </div>
    );
};

export default AboutPage;