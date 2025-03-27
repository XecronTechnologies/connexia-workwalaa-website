import "./App.css";
// import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import FooterBar from './components/Footer/FooterBar';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NotFoundPage from './Pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
<FooterBar />
    </BrowserRouter>
  );
}

export default App;
