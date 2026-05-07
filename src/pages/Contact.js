import React, { useState } from 'react';
import { Phone, Mail, MapPin, Navigation, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'info@fih.com.sg'
      };

      await emailjs.send(
        'service_iudpeby',
        'template_b9chvg6',
        templateParams,
        '4L5eFSH8m29NrOM4p'
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to open Google Maps with directions
  const openGoogleMaps = () => {
    const address = "9 Eunos Ave 8A, #02-00, Singapore 409461";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  // Function to open Apple Maps with directions
  const openAppleMaps = () => {
    const address = "9 Eunos Ave 8A, #02-00, Singapore 409461";
    const encodedAddress = encodeURIComponent(address);
    // Apple Maps URL scheme
    const appleMapsUrl = `https://maps.apple.com/?daddr=${encodedAddress}&dirflg=d`;
    window.open(appleMapsUrl, '_blank');
  };

  // Detect device to suggest appropriate map
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <section className="pt-32 pb-40 text-white" style={{ backgroundColor: "#204b29" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for professional Integrated Facilities Management solutions
            </p>
            <p className="text-lg text-blue-200 mt-4">
              <span className="mr-2">💬</span>
              We respond within one business day. Let's start the conversation!
              <span className="ml-2">💬</span>
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Section with Map */}
            <div className="space-y-8">
              {/* Contact Information Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Number</h3>
                      <div className="text-gray-700 space-y-1 mt-1">
                        <div>+65 8952-0327</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <div className="text-gray-700 space-y-1 mt-1">
                        <div>sales@fih.com.sg</div>
                        <div>security@fih.com.sg</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700 mt-1">
                        9 Eunos Ave 8A<br />
                        #02-00 Singapore 409461
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50/80 rounded-lg p-6 border border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Website</h3>
                  <a href="https://www.fih.com.sg" className="text-green-600 hover:text-green-700 font-medium">
                    www.fih.com.sg
                  </a>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-2" />
                  Our Location
                </h3>

                {/* Interactive Map */}
                <div
                  className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer group mb-4"
                  onClick={openGoogleMaps}
                >
                  <iframe
                    title="FIH Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7696!2d103.899456!3d1.321567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da183c6b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s9%20Eunos%20Ave%208A%20%2302-00%2C%20Singapore%20409461!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Overlay with navigation button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <Navigation className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons - Google Maps & Apple Maps */}
                <div className="space-y-3">
                  <button
                    onClick={openGoogleMaps}
                    className="w-full flex items-center justify-between px-4 py-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition duration-300 group"
                  >
                    <span className="flex items-center">
                      <Navigation className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700 font-medium">Get Directions (Google Maps)</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                  </button>

                  <button
                    onClick={openAppleMaps}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition duration-300 group"
                  >
                    <span className="flex items-center">
                      <svg className="w-5 h-5 text-gray-700 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-gray-700 font-medium">Get Directions (Apple Maps)</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </button>
                </div>

                {/* Smart device detection message */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-gray-500 text-center">
                    {isIOS() ?
                      "🍎 iPhone detected — Apple Maps recommended" :
                      "📍 Click any map option for directions"}
                  </p>
                </div>

                {/* Address details with clickable link */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">📍 Exact Address:</p>
                  <button
                    onClick={openGoogleMaps}
                    className="text-gray-700 text-sm hover:text-green-600 transition-colors text-left"
                  >
                    9 Eunos Ave 8A, #02-00<br />
                    Singapore 409461
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className=" bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 h-fit">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                  >
                    <option value="">Select a service</option>
                    <option value="Cleaning">Cleaning & Environmental Services</option>
                    <option value="LandscapeManagement">Landscape Management</option>
                    <option value="Pest Control">Integrated Pest Management</option>
                    <option value="SecurityGuardforce">Security Guardforce</option>
                    <option value="Traffic&EventManagement">Traffic & Event Management</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;