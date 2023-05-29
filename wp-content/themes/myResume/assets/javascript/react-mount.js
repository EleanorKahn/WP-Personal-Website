import React from 'react';
import { ReactDOM } from 'react-dom';
import Header from '../../../../../frontend/src/components/Header';
import Footer from '../../../../../frontend/src/components/Footer';
import Loading from '../../../../../frontend/src/components/Loading';
import LandingPage from '../../../../../frontend/src/pages/LandingPage';
import AboutPage from '../../../../../frontend/src/pages/AboutPage';

ReactDOM.render(
    <>
        <Header />
        <Footer />
        <Loading />
        <LandingPage />
        <AboutPage />
    </>
)