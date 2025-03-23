import "./App.css";

import NavigationBar from "./components/Navigation/NavigationBar";
import FooterBar from "./components/Footer/FooterBar";
import Home from "./Pages/Home";x 

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <FooterBar />
    </div>
  );
}

export default App;
