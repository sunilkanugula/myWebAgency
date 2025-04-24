import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import WhatsAppButton from './components/WhatsappButton';
import Partners from './components/Partners';


function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Cursor />
       
        <Navbar />
        <WhatsAppButton/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Industries />
              <Portfolio />
              <Partners/>
              <Contact />
            </>
          } />
          <Route path='/home'  element={
            <>
              <Hero />
              <Services />
              <Industries />
              <Portfolio />
              <Partners/>
              <Contact />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
