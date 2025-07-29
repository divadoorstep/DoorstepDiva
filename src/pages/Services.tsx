import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Hair Services',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: [
        { name: 'Hair Cut & Styling', duration: '45 min', price: '₹299' },
        { name: 'Hair Wash & Blow Dry', duration: '30 min', price: '₹199' },
        { name: 'Hair Spa Treatment', duration: '60 min', price: '₹599' },
        { name: 'Hair Coloring', duration: '90 min', price: '₹899' },
        { name: 'Keratin Treatment', duration: '120 min', price: '₹1299' }
      ]
    },
    {
      title: 'Makeup Services',
      image: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: [
        { name: 'Party Makeup', duration: '45 min', price: '₹799' },
        { name: 'Bridal Makeup', duration: '90 min', price: '₹1999' },
        { name: 'Engagement Makeup', duration: '60 min', price: '₹1299' },
        { name: 'HD Makeup', duration: '60 min', price: '₹1599' },
        { name: 'Pre-Wedding Makeup', duration: '75 min', price: '₹1799' }
      ]
    },
    {
      title: 'Nail Services',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: [
        { name: 'Basic Manicure', duration: '30 min', price: '₹299' },
        { name: 'Basic Pedicure', duration: '45 min', price: '₹399' },
        { name: 'Gel Manicure', duration: '45 min', price: '₹599' },
        { name: 'Gel Pedicure', duration: '60 min', price: '₹699' },
        { name: 'Nail Art', duration: '30 min', price: '₹199' }
      ]
    },
    {
      title: 'Facial & Spa',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: [
        { name: 'Classic Facial', duration: '60 min', price: '₹599' },
        { name: 'Anti-Aging Facial', duration: '75 min', price: '₹899' },
        { name: 'Hydrating Facial', duration: '60 min', price: '₹699' },
        { name: 'Acne Treatment Facial', duration: '60 min', price: '₹799' },
        { name: 'Gold Facial', duration: '90 min', price: '₹1299' }
      ]
    },
    {
      title: 'Waxing Services',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: [
        { name: 'Full Body Wax', duration: '90 min', price: '₹1299' },
        { name: 'Half Body Wax', duration: '60 min', price: '₹799' },
        { name: 'Underarm Wax', duration: '15 min', price: '₹99' },
        { name: 'Leg Wax', duration: '45 min', price: '₹399' },
        { name: 'Eyebrow Shaping', duration: '15 min', price: '₹149' }
      ]
    },
    {
      title: 'Threading Services',
      image: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: [
        { name: 'Eyebrow Threading', duration: '15 min', price: '₹99' },
        { name: 'Upper Lip Threading', duration: '10 min', price: '₹49' },
        { name: 'Full Face Threading', duration: '30 min', price: '₹199' },
        { name: 'Chin Threading', duration: '10 min', price: '₹49' },
        { name: 'Forehead Threading', duration: '10 min', price: '₹49' }
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional beauty services delivered to your home in Lucknow
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-300">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Available across Lucknow</span>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Beauty Solutions</h2>
            <p className="text-xl text-gray-600">Choose from our comprehensive range of professional services</p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <span className="text-lg font-bold text-pink-600">{service.price}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{service.duration}</span>
                            <div className="flex items-center ml-4">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="ml-1">4.8</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Book appointments at your convenience, 7 days a week</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality products and professional techniques</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Service</h3>
              <p className="text-gray-600">Convenient at-home service across Lucknow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8">Contact us now to schedule your appointment</p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a
              href="tel:+919876543210"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Call Now: +91 98765 43210
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;