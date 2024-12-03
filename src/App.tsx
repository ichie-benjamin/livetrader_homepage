import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import LiveTrader from "./page/Live-trader";
import About from "./page/about";
import Trading from "./page/trading";
import Forex from "./page/forex";
import Digitalcurrency from "./page/digitalcurrency";
import Funding from "./page/funding";
import Withdrawal from "./page/withdrawal";
import RangeOfMarkets from "./page/rangeOfMarkets";
import Register from "./page/resgister";
import Login from "./page/login";
import Forgot_password from "./page/forgot_password";
import Stock from "./page/stock";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiveTrader" element={<LiveTrader />} />
        <Route path="/about" element={<About />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/digitalcurrency" element={<Digitalcurrency />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/range-of-markets" element={<RangeOfMarkets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Forgot_password" element={<Forgot_password />} />
        <Route path="/stock" element={<Stock />} />


      </Routes>
    </Router>
  );
}

export default App;
