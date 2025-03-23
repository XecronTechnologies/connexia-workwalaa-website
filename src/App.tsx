import "./App.css";
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import FooterBar from './components/Footer/FooterBar';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<FooterBar />
    </BrowserRouter>
  );
}

export default App;
