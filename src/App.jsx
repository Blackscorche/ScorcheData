import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"; 
import Navbar from "./components/Navbar";
import MobileMenu from "./MobileMenu";
import Home from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";
import Dashboard from "./Dashboard"; 

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <>
      {/* Hide Navbar & MobileMenu when on Dashboard */}
      {location.pathname !== "/dashboard" && (
        <>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
      )}

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Pricing />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
