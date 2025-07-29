import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Clock, Shield, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Hair Services',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional haircuts, styling, and treatments'
    },
    {
      title: 'Makeup Services',
      image: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bridal, party, and everyday makeup'
    },
    {
      title: 'Nail Services',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Manicure, pedicure, and nail art'
    },
    {
      title: 'Spa & Facial',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Relaxing spa treatments and facials'
    }
  ];

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-pink-500" />,
      title: 'Flexible Timing',
      description: 'Book appointments at your convenience'
    },
    {
      icon: <Shield className="h-8 w-8 text-pink-500" />,
      title: 'Safe & Hygienic',
      description: 'Sanitized tools and professional standards'
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      title: 'Expert Professionals',
      description: 'Trained and certified beauty experts'
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: 'Trusted by 1000+',
      description: 'Happy customers across Lucknow'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(236, 72, 153, 0.8), rgba(147, 51, 234, 0.8)), url(https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Beauty Diva at Home
              <span className="block text-yellow-300">in Lucknow</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your personal beauty diva comes to your doorstep. Book now and experience premium salon treatments at home.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services (Hair, Makeup, Spa...)"
                  className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
                />
                <button className="absolute right-2 top-2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                  <Search className="h-6 w-6" />
                </button>
              </div>
            </div>

            <Link
              to="/services"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of professional beauty services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-pink-500 font-medium hover:text-pink-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Doorstep Diva?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our premium at-home beauty services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service! Doorstep Diva's team is professional and the quality is outstanding. 
                  I love the convenience of getting salon services at home."
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100`}
                    alt="Customer"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                    <p className="text-gray-500">Lucknow</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Beauty Session?
          </h2>
          <p className="text-xl mb-8">
            Contact us today and let our experts take care of your beauty needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;