// import { useState } from 'react'
import "./App.css";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3559759459.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3551307836.

import NavigationBar from "./components/Navigation/NavigationBar";
import FooterBar from "./components/Footer/FooterBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <NavigationBar />
      {/* <div style={{marginTop:'70px'}}>
    {Array.from({length:50}).map((_,item)=>{
     return  <p key={item}> {item}</p>
    })}
  </div> */}
      <Home />
      <FooterBar />
    </div>
  );
}

export default App;
