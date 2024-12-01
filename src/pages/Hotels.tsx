import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Waves, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useHotelStore } from '../store/hotelStore';

const amenityIcons = {
  WiFi: Wifi,
  Pool: Waves,
  Restaurant: UtensilsCrossed,
  Spa: Sparkles
};

export default function Hotels() {
  const { hotels } = useHotelStore();

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hotels</h1>
            <p className="mt-2 text-gray-600">Find your perfect stay in the Cyclades</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {hotels.map((hotel) => (
            <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
                <div className="relative md:w-2/5">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    From {hotel.price}/night
                  </div>
                </div>

                <div className="p-6 md:w-3/5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {hotel.name}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">
                    {hotel.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {hotel.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                      return (
                        <div
                          key={amenity}
                          className="flex items-center gap-1 text-sm text-gray-600"
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-sm text-gray-500">
                        ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}