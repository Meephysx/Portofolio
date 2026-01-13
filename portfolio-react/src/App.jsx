import { Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

import Navbar from './components/navbar'; // Pastikan huruf besar/kecil sesuai nama filemu
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <GlobalProvider>
      {/* Background gelap permanen (bg-gray-900) */}
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;