import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import MobileMenu from "./MobileMenu";
import Home from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import UserDashboard from "./UserDashboard";
import Dashboard from "./Dashboard";
import ForgotPassword from "./components/Auth/ForgotPassword";

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

  const isAuthPage =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgotpassword" ||
    location.pathname.startsWith("/dashboard")||
    location.pathname.startsWith("/userdashboard");

  return (
    <>
      {!isAuthPage && (
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
