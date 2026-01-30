import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('success');
    setFormData({ name: '', contact: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-stone-200">
            Get in touch for a free estimate on your masonry or hardscape project.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to transform your outdoor space? Contact Ventura Masonry LLC today for a free, no-obligation estimate. We're here to answer your questions and discuss your project needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">Phone</h3>
                    <a
                      href="tel:509-792-9059"
                      className="text-gray-700 hover:text-amber-600 transition-colors text-lg"
                    >
                      509-792-9059
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">Email</h3>
                    <a
                      href="mailto:venturamasonryllc@gmail.com"
                      className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      venturamasonryllc@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Send us a message anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">Service Area</h3>
                    <p className="text-gray-700">Serving in Tri-cities and near areas</p>
                    <p className="text-sm text-gray-600 mt-1">Licensed & Bonded</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Saturday</p>
                    <p className="text-gray-700">8AM - 6PM</p>
                    <p className="text-sm text-gray-600 mt-1">Contact us to schedule a consultation</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-600 rounded-lg">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Free Estimates</h3>
                <p className="text-gray-700">
                  We offer free, no-obligation estimates for all masonry and hardscape projects. Call us today to discuss your vision and get a detailed quote.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone or Email *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                      placeholder="509-123-4567 or email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project... What type of work are you interested in? Any specific requirements or timeline?"
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-semibold">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-semibold">
                        Please fill out all required fields.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Or call us directly at{' '}
                    <a href="tel:509-792-9059" className="text-amber-600 hover:underline font-semibold">
                      509-792-9059
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-stone-200 mb-8">
            Don't wait to transform your outdoor space. Contact us today for your free estimate!
          </p>
          <a
            href="tel:509-792-9059"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <Phone size={24} />
            509-792-9059
          </a>
        </div>
      </section>
    </div>
  );
}
