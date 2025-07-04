import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 relative">
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
