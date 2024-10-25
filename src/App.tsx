import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import LiveTrader from './page/Live-trader';
import Contact from './page/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LiveTrader />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
