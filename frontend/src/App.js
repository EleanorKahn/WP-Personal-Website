import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LandingPage from "./pages/LandingPage";
import "./css/style.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
