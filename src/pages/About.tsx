import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '1000+', label: 'Happy Customers' },
    { icon: <Award className="h-8 w-8" />, number: '5+', label: 'Years Experience' },
    { icon: <Clock className="h-8 w-8" />, number: '24/7', label: 'Service Available' },
    { icon: <Heart className="h-8 w-8" />, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Doorstep Diva</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bringing professional beauty and salon services to your doorstep in Lucknow
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by a team of passionate beauty professionals with over 5 years of experience, 
                Doorstep Diva was born from the vision of making premium salon treatments 
                accessible to everyone in Lucknow.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that in today's busy world, finding time to visit a salon can be challenging. 
                That's why we bring our expertise directly to your home, ensuring you receive the same 
                high-quality treatments you'd expect from a premium salon.
              </p>
              <p className="text-lg text-gray-600">
                Our team of certified professionals is dedicated to providing personalized beauty 
                solutions that enhance your natural beauty and boost your confidence.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Asif's Beauty Services"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-pink-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To be your personal beauty diva, revolutionizing the beauty industry in Lucknow by providing convenient, 
                professional, and affordable at-home beauty services that save time while 
                delivering exceptional results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and preferred beauty service provider in Lucknow, 
                known for our commitment to quality, hygiene, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Asif */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Asif - Founder"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expert Team</h3>
                  <p className="text-lg text-pink-600 mb-4">Professional Beauty Specialists</p>
                  <p className="text-gray-600 mb-4">
                    With over 5 years of experience in the beauty industry, our team has trained 
                    with some of the best professionals in the field. His passion for beauty 
                    and commitment to excellence drives us to deliver outstanding results.
                  </p>
                  <p className="text-gray-600">
                    "Our goal is to make every client feel beautiful and confident. Beauty is 
                    not just about looking good; it's about feeling great about yourself."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;