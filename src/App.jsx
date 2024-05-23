import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import AboutUs from "./Pages/AboutUs";
import Campaigns from "./Pages/Campaigns";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Volunteer from "./Pages/Volunteer";
import Donate from "./Pages/Donate";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
