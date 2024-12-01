import { create } from 'zustand';
import { Hotel } from '../types';

interface HotelState {
  hotels: Hotel[];
  selectedHotel: Hotel | null;
  setSelectedHotel: (hotel: Hotel | null) => void;
  fetchHotelById: (id: number) => Promise<Hotel | null>;
}

const mockHotels: Hotel[] = [
  {
    id: 1,
    name: 'Mystique Luxury Collection Hotel',
    location: 'Oia, Santorini',
    description: 'Carved into the rugged Caldera cliffs of Oia, Mystique overlooks the midnight blue waters of the Aegean Sea. Experience unparalleled luxury and breathtaking views.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    price: '€450',
    rating: 4.9,
    reviews: 328,
    amenities: ['Pool', 'Spa', 'Restaurant', 'WiFi']
  },
  {
    id: 2,
    name: 'Cavo Tagoo',
    location: 'Mykonos Town',
    description: 'Iconic luxury hotel featuring minimalist design and stunning infinity pools overlooking the Aegean. A perfect blend of traditional architecture and modern comfort.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    price: '€680',
    rating: 4.8,
    reviews: 256,
    amenities: ['Pool', 'Spa', 'Restaurant', 'WiFi']
  },
  {
    id: 3,
    name: 'Grace Santorini',
    location: 'Imerovigli, Santorini',
    description: 'An exclusive boutique hotel perched above the world-famous Caldera with spectacular views. Featuring award-winning restaurants and infinity pools.',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80',
    price: '€550',
    rating: 4.9,
    reviews: 412,
    amenities: ['Pool', 'Spa', 'Restaurant', 'WiFi']
  }
];

export const useHotelStore = create<HotelState>((set) => ({
  hotels: mockHotels,
  selectedHotel: null,
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
  fetchHotelById: async (id) => {
    const hotel = mockHotels.find(h => h.id === id) || null;
    set({ selectedHotel: hotel });
    return hotel;
  }
}));