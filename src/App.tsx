import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Hotels from './pages/Hotels';
import HotelLanding from './pages/HotelLanding';
import IslandGuides from './pages/IslandGuides';
import RentACar from './pages/RentACar';
import RentACarLanding from './pages/RentACarLanding';
import ListingForm from './components/ListingForm';
import Islands from './pages/Islands';
import IslandDetail from './pages/IslandDetail';
import Sitemap from './pages/Sitemap';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar onAuthClick={() => {}} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelLanding />} />
            <Route path="/guides" element={<IslandGuides />} />
            <Route path="/rent-a-car" element={<RentACar />} />
            <Route path="/rent-a-car/:id" element={<RentACarLanding />} />
            <Route path="/list-property" element={<ListingForm />} />
            <Route path="/islands" element={<Islands />} />
            <Route path="/islands/:id" element={<IslandDetail />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}