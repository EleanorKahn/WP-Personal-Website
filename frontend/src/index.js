import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style.css";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

console.log("I am in index.js");

ReactDOM.render(<Header id='header' />, document.querySelector('#header'));
ReactDOM.render(<Footer id='footer' />, document.querySelector('#footer'));
ReactDOM.render(<Loading id='loading' />, document.querySelector('#loading'));
ReactDOM.render(<LandingPage id='landing-page' />, document.querySelector('#landing-page'));
ReactDOM.render(<AboutPage id='about-page' />, document.querySelector('#about-page'));


