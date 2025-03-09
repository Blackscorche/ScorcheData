import { useState } from 'react';
import Navbar from "./components/Navbar";
import MobileMenu from "./MobileMenu";
import Home from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Pricing from './components/sections/Pricing';
import Footer from './components/sections/Footer';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <About/>
      <Services/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
