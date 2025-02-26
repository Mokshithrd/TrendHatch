import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MainHeader } from "./pages/MainHeader";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [isLogin, setIslogin] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white flex flex-col">
      {/* Navbar with smooth effects */}
      <Navbar isLogin={isLogin} setIslogin={setIslogin} />

      {/* Main Container with shadow effect */}
      <div className="container mx-auto px-4 py-6 flex flex-col flex-grow">
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login setIslogin={setIslogin} />} />
            <Route path="/Signup" element={<Signup setIslogin={setIslogin} />} />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute isLogin={isLogin}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>

      {/* Footer with Glassmorphism Effect */}
      <footer className="w-full text-center py-4 bg-black/20 backdrop-blur-md">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Mokshith's Website | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
