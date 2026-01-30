import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Stone Work',
      description: 'Transform your outdoor space with the timeless beauty and durability of natural stone. Our stone work services include custom stone patios, walkways, outdoor kitchens, fire pits, and decorative stone installations. We work with a variety of natural stone materials to create stunning, long-lasting features that enhance your property.',
      features: [
        'Natural stone patios and walkways',
        'Stone veneer installations',
        'Outdoor kitchen stonework',
        'Stone fire pits and features',
        'Custom stone designs',
      ],
      imageUrl: '/gallery/PoolWallStoneVeneer2.JPEG', 
    },
    {
      title: 'Pavers',
      description: 'Pavers offer versatility, durability, and visual appeal for driveways, walkways, and patios. We install high-quality pavers in various styles, colors, and patterns to complement your property. Our expert installation ensures proper drainage, stability, and a beautiful finish that will last for years.',
      features: [
        'Paver driveways',
        'Paver patios and pool decks',
        'Walkways and pathways',
        'Paver repairs and restoration',
        'Custom paver patterns',
      ],
      imageUrl: '/gallery/ComercialPaver.JPEG',
    },
    {
      title: 'Block Fence Construction',
      description: 'Block fences provide security, privacy, and aesthetic appeal to residential and commercial properties. We construct durable block fences using quality materials and proven techniques. Our block fences are built to withstand the elements while enhancing the look and value of your property.',
      features: [
        'Residential block fencing',
        'Commercial block walls',
        'Decorative block designs',
        'Security fence construction',
        'Block fence repairs',
      ],
      imageUrl: '/gallery/BlockWall.JPEG',
    },
    {
      title: 'Retaining Walls',
      description: 'Retaining walls serve both functional and aesthetic purposes, preventing erosion while adding visual interest to your landscape. We design and build structurally sound retaining walls using block, stone, or concrete. Our retaining walls are engineered to handle soil pressure and drainage while creating beautiful terraced landscapes.',
      features: [
        'Segmental block retaining walls',
        'Natural stone retaining walls',
        'Terraced landscape walls',
        'Erosion control solutions',
        'Drainage integration',
      ],
      imageUrl: '/gallery/GardenRetainingWall.JPEG',
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-stone-200">
            Professional masonry and hardscape solutions for your property.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">What We Offer:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:509-792-9059"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone size={20} />
                    Get a Free Estimate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a free consultation. We'll discuss your project goals and recommend the best solution for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:509-792-9059"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              <Phone size={20} />
              509-792-9059
            </a>
            <Link
              to="/contact"
              className="inline-block bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Consultation</h3>
              <p className="text-gray-700">
                Contact us for a free consultation. We'll discuss your vision, site conditions, and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Design & Estimate</h3>
              <p className="text-gray-700">
                We provide a detailed proposal and free estimate for your project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Construction</h3>
              <p className="text-gray-700">
                Our skilled team completes your project with quality craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
