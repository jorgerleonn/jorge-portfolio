import './index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componentes/Navbar/Nav.jsx'
import Home from './componentes/pages/Home.js';
import Skills from './componentes/pages/Skills.js';
import Contact from './componentes/pages/Contact.js';
import Projects from './componentes/pages/Projects.js';
import About from './componentes/pages/About.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
