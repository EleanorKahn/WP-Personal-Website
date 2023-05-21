import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LandingPage from "./pages/LandingPage";
import MyWorkPage from "./pages/MyWorkPage";
import ContactPage from "./pages/ContactPage";
import "./css/style.css";
import { useEffect } from 'react';

function App() {
  // const tokenUrl = "http://localhost:8000/wp-json/jwt-auth/v1/token";
  // let token = "";
  // //let base64 = require('base-64');
  // let headers = new Headers();
  // headers.append('Authorization', 'Basic ' + process.env.MY_USERNAME + ":" + process.env.MY_PASSWORD)

  // useEffect(() => {
  //   fetch(tokenUrl)
  //   .then((res) => res.json)
  //   .then((data) => {
  //     return (token = data);
  //   })
  //   .catch((err) => console.log(err))
  // }, []);

  // console.log(token);

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

export default App;
