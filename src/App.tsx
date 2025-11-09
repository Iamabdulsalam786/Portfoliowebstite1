import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TipTokProject from './pages/TipTokProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/tiptok" element={<TipTokProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
