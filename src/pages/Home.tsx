import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import TopIslands from '../components/sections/TopIslands';
import FeaturedListings from '../components/sections/FeaturedListings';
import CarRentals from '../components/sections/CarRentals';
import Activities from '../components/sections/Activities';
import Partners from '../components/sections/Partners';
import WeatherWidget from '../components/WeatherWidget';
import TravelPlanner from '../components/TravelPlanner';
import CurrencyConverter from '../components/CurrencyConverter';
import Translation from '../components/Translation';
import SEO from '../components/SEO';

export default function Home() {
  const weatherData = {
    location: 'Santorini',
    temperature: 24,
    condition: 'Sunny',
    humidity: 65,
    windSpeed: 12
  };

  return (
    <>
      <SEO
        title="Discover Cyclades - Your Guide to Greek Island Paradise"
        description="Explore the stunning Cyclades islands. Find the best hotels, activities, and travel guides for Santorini, Mykonos, and more. Plan your perfect Greek getaway."
      />

      <div>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <SearchBar />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <TravelPlanner />
            </div>
            <div className="space-y-6">
              <WeatherWidget data={weatherData} />
              <CurrencyConverter />
              <Translation />
            </div>
          </div>
        </div>

        <TopIslands />
        <FeaturedListings />
        <CarRentals />
        <Activities />
        <Partners />
      </div>
    </>
  );
}