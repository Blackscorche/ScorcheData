import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"; 
import Navbar from "./components/Navbar";
import MobileMenu from "./MobileMenu";
import Home from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";
import Dashboard from "./Dashboard"; 
import UserDashboard from "./UserDashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

function MainLayout() {
  const location = useLocation();

  // Hide Navbar & MobileMenu on both dashboards and their subpages
  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/userdashboard");

  return (
    <>
      {!isDashboard && (
        <>
          <Navbar />
          <MobileMenu />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Pricing />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/userdashboard/*" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
