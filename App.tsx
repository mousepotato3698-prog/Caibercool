
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Blueprints from './pages/Blueprints';
import Protocol from './pages/Protocol';
import Calculator from './pages/Calculator';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #contact), attempt to scroll to it smoothly
    if (hash) {
      // Use a small timeout to ensure the DOM element exists after route transition
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If simply changing routes, scroll to top instantly
      // We use 'instant' behavior to override the global 'scroll-smooth' CSS on html
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid (Dim) */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Spotlight Grid (Revealed by Mouse) */}
      <div 
        className="absolute inset-0 bg-grid opacity-50 spotlight-mask transition-opacity duration-300"
        style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`
        } as React.CSSProperties}
      ></div>

      {/* Mouse Glow (Green Aurora) */}
      <div 
        className="absolute w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] mix-blend-screen transition-transform duration-75 ease-out"
        style={{
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`
        }}
      ></div>
      
      {/* Ambient Blobs (Fixed) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative bg-brand-black text-slate-200">
        <BackgroundEffects />
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/blueprints" element={<Blueprints />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
