import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import LiveTrader from "./page/Live-trader";
import Contact from "./page/contact";
import About from "./page/about";
import Trading from "./page/trading";
import Forex from "./page/forex";
import Digitalcurrency from "./page/digitalcurrency"
import Funding from "./page/funding";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/livetrader" element={<LiveTrader />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/" element={<Digitalcurrency />} />
        <Route path="/funding" element={<Funding />} />
        

      </Routes>
    </Router>
  );
}

export default App;
