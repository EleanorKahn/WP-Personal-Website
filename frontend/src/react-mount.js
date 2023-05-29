import React from 'react';
import { ReactDOM } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

ReactDOM.render(
    <>
        <Header />
        <Footer />
        <Loading />
        <LandingPage />
        <AboutPage />
    </>
)