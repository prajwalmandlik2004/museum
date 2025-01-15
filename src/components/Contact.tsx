import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Have questions? We're here to help you explore the world of art and culture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C2AD8A]" />
                  <a href="mailto:info@pastport.com" className="text-gray-600 hover:text-[#C2AD8A]">
                    jaltaresr@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C2AD8A]" />
                  <a href="mailto:support@pastport.com" className="text-gray-600 hover:text-[#C2AD8A]">
                    anishkapanna1511@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C2AD8A]" />
                  <a href="tel:+1-202-555-0123" className="text-gray-600 hover:text-[#C2AD8A]">
                    +91 9860431475
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C2AD8A]" />
                  <a href="tel:+1-202-555-0124" className="text-gray-600 hover:text-[#C2AD8A]">
                    +91 9970965146
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {/* <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#C2AD8A]" />
                  <span className="text-gray-600">
                    Mon - Fri: 9:00 AM - 6:00 PM EST
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C2AD8A]" />
                  <span className="text-gray-600">
                    1234 Art Avenue, New York, NY 10001
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#C2AD8A] focus:border-[#C2AD8A]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#C2AD8A] focus:border-[#C2AD8A]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#C2AD8A] focus:border-[#C2AD8A]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C2AD8A] text-white py-2 rounded-lg hover:bg-[#9A8B70] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;