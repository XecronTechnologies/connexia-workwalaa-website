// import { useState } from 'react'
import './App.css'
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3559759459.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3551307836.

import NavigationBar from './components/Navigation/NavigationBar';
import FooterBar from './components/Footer/FooterBar';

function App() {
  return (
<div>
  <NavigationBar />
  <div>
    {Array.from({length:100}).map((_,item)=>{
     return  <p key={item}> {item}</p>
    })}
  </div>
  <FooterBar />
</div>
    
  )
}

export default App

