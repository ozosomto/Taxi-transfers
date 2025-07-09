import React, { useState } from 'react';

const CyprusTaxiTransfers = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    if (!formData.pickup || !formData.dropoff || !formData.date) {
      alert('Please fill in all fields');
      return;
    }
    alert('Searching for available transfers...');
  };

  const handleBookNow = (routeTitle, routePrice) => {
    alert(`Booking ${routeTitle} for ${routePrice}`);

  };

  const routes = [
    { title: 'Larnaca Airport to Ayla Napa', price: '€ 54' },
    { title: 'Larnaca Airport to Limassol', price: '€ 64' },
    { title: 'Larnaca Airport to Nicosia', price: '€ 50' },
    { title: 'Larnaca Airport to Protaras', price: '€ 54' },
    { title: 'Larnaca Airport to Paphos', price: '€ 95' }
  ];

  const features = [
    { icon: '✓', title: 'Licensed & Insured', description: 'Fully licensed and insured for your safety' },
    { icon: '📶', title: 'Free Water & WiFi', description: 'Complimentary amenities for your comfort' },
    { icon: '👥', title: 'Family Friendly', description: 'Safe and comfortable for all passengers' },
    { icon: '💳', title: 'Pay Online or in Car', description: 'Flexible payment options' },
    { icon: '📍', title: 'Live Driver Tracking', description: 'Real-time tracking for peace of mind' }
  ];

  const steps = [
    { icon: '📍', title: 'Enter Trip Details', description: 'Choose route, passengers, and time for your journey' },
    { icon: '€', title: 'Get Instant Quote', description: 'See fixed price before you book with transparent pricing' },
    { icon: '🚗', title: 'Ride with Confidence', description: 'Professional drivers ensure a safe, comfortable journey' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
               
               style={{ backgroundImage: 'url(/Mercedes-Benz-V.avif)',
                        objectFit: 'cover'
                }}
        
        >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 uppercase tracking-wider">
            Cyprus Taxi Transfers
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 opacity-90">
            Reliable taxi service for your journey
          </p>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto mb-12">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Pickup location
                  </label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    placeholder="Pickup location"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Drop-off location
                  </label>
                  <input
                    type="text"
                    name="dropoff"
                    value={formData.dropoff}
                    onChange={handleInputChange}
                    placeholder="Drop-off location"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Select date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="w-32 bg-blue-600 text-white py-4 px-8 rounded-lg font-bold  text-lg hover:bg-blue-700 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                SEARCH
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '💰', text: 'Fixed Prices' },
              { icon: '🕐', text: '24/7 Service' },
              { icon: '👤', text: 'Professional Drivers' },
              { icon: '✓', text: 'Free Cancellation' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-white font-bold">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Popular Routes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 flex items-center justify-center text-white text-lg font-bold"
              
                            style={{ backgroundImage: 'url(/V-Class-3.avif)',
                        objectFit: 'cover'
                }}             

              >
                {/* <img src="/v-class-4.webp" alt="" className='my-2 w-48 h-auto object-cover rounded-md' /> */}
                🚗 Airport Transfer
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {route.title}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {route.price}
                </div>
                <button
                  onClick={() => handleBookNow(route.title, route.price)}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to providing you with exceptional service and safe transport across Cyprus. Our
                experienced drivers provide you with quality assurance and peace of mind for your journey.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Book Your Taxi Online
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Use our online booking system to secure your transfers with our straightforward booking process and
                instant confirmation. Quick, easy, and reliable service at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How to Book Your Transfer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-8">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                {step.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Private Airport Transfers in Cyprus
          </h2>
          <p className="text-xl mb-2">Fixed Prices, Premium Comfort</p>
          <p className="text-lg mb-8">
            Serving Larnaca, Nicosia, Ayla Napa, Limassol, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white py-4 px-8 rounded-lg font-bold hover:bg-blue-700 hover:transform hover:-translate-y-1 transition-all duration-300">
              Get Instant Quote
            </button>
            <button className="bg-white text-gray-800 py-4 px-8 rounded-lg font-bold hover:bg-gray-100 hover:transform hover:-translate-y-1 transition-all duration-300">
              See Routes & Prices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyprusTaxiTransfers;