import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import LiveTrader from "./page/Live-trader";
import Contact from "./page/contact";
import About from "./page/about";
import Trading from "./page/trading";
import Forex from "./page/forex";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/livetrader" element={<LiveTrader />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/rading" element={<Trading />} />
        <Route path="/" element={<Forex />} />
      </Routes>
    </Router>
  );
}

export default App;
