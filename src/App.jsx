import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="glass py-8 text-center">
        <p className="text-gray-400">
          © 2025 Snehal Dahake. Built with React, Vite & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
