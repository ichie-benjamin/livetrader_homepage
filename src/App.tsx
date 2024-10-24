import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import LiveTrader from './page/Live-trader';
import Contact from './page/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiveTrader" element={<LiveTrader />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
