// src/App.jsx
import { GlobalProvider } from './context/GlobalContext';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;