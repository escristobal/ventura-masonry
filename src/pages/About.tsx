import { Award, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality Craftsmanship',
      description: 'Every project is completed with meticulous attention to detail and the highest standards of workmanship.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Customer Focused',
      description: 'We work closely with our clients to understand their vision and bring it to life.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Reliable Service',
      description: 'We show up on time, communicate clearly, and deliver on our promises.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Passion for Excellence',
      description: 'We take pride in our work and are committed to exceeding expectations on every project.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ventura Masonry LLC</h1>
          <p className="text-xl text-stone-200">
            Your trusted partner for professional masonry and hardscape services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Ventura Masonry LLC is a licensed and bonded masonry and hardscape construction company dedicated to transforming outdoor spaces throughout the region. With years of experience in the industry, we have built our reputation on quality workmanship, reliability, and exceptional customer service.
            </p>
            <p>
              We understand that your property is one of your most valuable investments. That's why we approach every project—whether it's a residential patio or a commercial retaining wall—with the same commitment to excellence. Our team takes pride in creating durable, beautiful structures that stand the test of time.
            </p>
            <p>
              From the initial consultation to project completion, we work closely with our customers to ensure their vision becomes a reality. We believe in transparent communication, attention to detail, and delivering results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-amber-600 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Why Work With Us?</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Licensed and Bonded',
                text: 'We are fully licensed and bonded, giving you peace of mind that your project is in professional hands.'
              },
              {
                title: 'Experienced Craftsmanship',
                text: 'Our team brings years of expertise in masonry and hardscape construction, ensuring quality results on every project.'
              },
              {
                title: 'Customer-Focused Approach',
                text: 'We take the time to understand your needs and work collaboratively to deliver exactly what you envision.'
              },
              {
                title: 'Free Estimates',
                text: 'Contact us today for a no-obligation, free estimate on your masonry or hardscape project.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-xl mb-8">
            Ready to start your project? Contact us today for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:509-792-9059"
              className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Call 509-792-9059
            </a>
            <Link
              to="/contact"
              className="inline-block bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
