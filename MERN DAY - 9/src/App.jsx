import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/functionalComponents/Home.jsx';
import HomePage from './components/functionalComponents/HomePage.jsx';
import About from './components/functionalComponents/About.jsx';
import Contact from './components/functionalComponents/Contact.jsx';
import LearningReact from './components/functionalComponents/LearningReact.jsx';
import Login from './components/functionalComponents/Login.jsx';
import Signup from './components/functionalComponents/Signup.jsx';
import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning-react" element={<LearningReact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;