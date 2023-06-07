import { Routes, Route } from "react-router-dom";
import { ReactDOM } from "react";
import Loading from "./components/Loading";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LandingPage from "./pages/LandingPage";
import MyWorkPage from "./pages/MyWorkPage";
import ContactPage from "./pages/ContactPage";

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mywork" element={<MyWorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
    </div>
  );
};

// ReactDOM.render(<Header id='header' />, document.querySelector('#header'));
// ReactDOM.render(<Footer id='footer' />, document.querySelector('#footer'));
// ReactDOM.render(<Loading id='loading' />, document.querySelector('#loading'));
// ReactDOM.render(<LandingPage id='landing-page' />, document.querySelector('#landing-page'));
// ReactDOM.render(<AboutPage id='about-page' />, document.querySelector('#about-page'));

export default App;
