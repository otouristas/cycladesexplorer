import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroSection from '../components/hotels/HeroSection';
import QuickNav from '../components/hotels/QuickNav';
import Overview from '../components/hotels/Overview';
import Amenities from '../components/hotels/Amenities';
import Location from '../components/hotels/Location';
import Gallery from '../components/hotels/Gallery';
import BookingWidget from '../components/BookingWidget';
import { useHotelStore } from '../store/hotelStore';
import FAQ from '../components/FAQ';

export default function HotelLanding() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedHotel, fetchHotelById } = useHotelStore();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const loadHotel = async () => {
      if (id) {
        const hotel = await fetchHotelById(parseInt(id));
        if (!hotel) {
          navigate('/hotels');
        }
      }
    };
    loadHotel();
  }, [id, fetchHotelById, navigate]);

  if (!selectedHotel) return null;

  return (
    <>
      <SEO
        title={`${selectedHotel.name} - Luxury Hotel in ${selectedHotel.location}`}
        description={selectedHotel.description}
        image={selectedHotel.image}
        type="website"
      />

      <div className="bg-white">
        <HeroSection 
          hotel={selectedHotel} 
          onBookNow={() => setIsBookingOpen(true)} 
        />
        <QuickNav />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Overview hotel={selectedHotel} />
          <Amenities hotel={selectedHotel} />
          <Location hotel={selectedHotel} />
          <Gallery hotel={selectedHotel} />
          <FAQ />
        </main>

        <BookingWidget />
      </div>
    </>
  );
}