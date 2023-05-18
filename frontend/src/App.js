import './App.css';
import { Routes, Route } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import AboutPage from './pages/AboutPage';
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </div>
  );
};

export default App;
