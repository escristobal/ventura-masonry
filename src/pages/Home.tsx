import { Phone, Mail, CheckCircle, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'Stone Work',
      description: 'Beautiful natural stone installations for walls, patios, and outdoor living spaces.',
      icon: '🪨',
    },
    {
      title: 'Pavers',
      description: 'Durable and attractive paver installations for driveways, walkways, and patios.',
      icon: '🧱',
    },
    {
      title: 'Block Fence Construction',
      description: 'Strong and attractive block fencing solutions for privacy and security.',
      icon: '🏗️',
    },
    {
      title: 'Retaining Walls',
      description: 'Structural retaining walls that combine functionality with aesthetic appeal.',
      icon: '🏛️',
    },
  ];

  const whyChooseUs = [
    { icon: <Shield className="w-6 h-6" />, text: 'Licensed & Bonded' },
    { icon: <Award className="w-6 h-6" />, text: 'Quality Craftsmanship' },
    { icon: <Clock className="w-6 h-6" />, text: 'Reliable Service' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Free Estimates' },
  ];

  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Masonry & Hardscape Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-stone-200">
              Licensed & Bonded • Free Estimates
            </p>
            <p className="text-lg mb-8 text-stone-300">
              Transform your outdoor space with expert masonry craftsmanship. Serving residential and commercial clients with quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:509-792-9059"
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <Phone size={24} />
                Call for Free Estimate
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-stone-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <Mail size={24} />
                Contact Us
              </Link>
            </div>
            <div className="mt-8 text-2xl font-semibold">
              <a href="tel:509-792-9059" className="hover:text-amber-400 transition-colors">
                509-792-9059
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in a wide range of masonry and hardscape services to enhance your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you choose Ventura Masonry LLC, you're choosing a partner dedicated to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-600 mb-4">{item.icon}</div>
                <p className="text-lg font-semibold text-stone-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent masonry and hardscape projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Stone Patio Installation', category: 'Stone Work' },
              { title: 'Custom Paver Driveway', category: 'Pavers' },
              { title: 'Decorative Retaining Wall', category: 'Retaining Walls' },
            ].map((project, index) => (
              <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">Project Image {index + 1}</p>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-stone-800">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free estimate on your masonry or hardscape project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:509-792-9059"
              className="flex items-center justify-center gap-2 bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Phone size={24} />
              509-792-9059
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Mail size={24} />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
