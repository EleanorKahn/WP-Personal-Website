import React from 'react';
import { ReactDOM } from 'react-dom';
import Header from '../../../../../frontend/src/components/Header';
import Footer from '../../../../../frontend/src/components/Footer';
import Loading from '../../../../../frontend/src/components/Loading';
import LandingPage from '../../../../../frontend/src/pages/LandingPage';
import AboutPage from '../../../../../frontend/src/pages/AboutPage';

ReactDOM.render(<Header id='header' />, document.querySelector('#header'));
ReactDOM.render(<Footer id='footer' />, document.querySelector('#footer'));
ReactDOM.render(<Loading id='loading' />, document.querySelector('#loading'));
ReactDOM.render(<LandingPage id='landing-page' />, document.querySelector('#landing-page'));
ReactDOM.render(<AboutPage id='about-page' />, document.querySelector('#about-page'));

        
        
        