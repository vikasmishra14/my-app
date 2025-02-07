
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import User from "./pages/User";
import ContactUs from "./components/ContactUs";
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";
import "./styles.css";
import "./App.css"
import Footer from "./pages/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/form" element={<ContactUs/>} />
          <Route path="/map" element={<MapComponent />} />
        </Routes>
        <Footer/>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
