import React from 'react';
import { Link } from 'react-router-dom';

import {
  Phone, Mail, Globe, MapPin, Users, Car, Shield,
  School, Building, Award, Clock, Star, ArrowRight,
  Target, Heart, Zap, CheckCircle, AlertTriangle,
  Truck, Package, Camera,
  TrafficCone,
  ShieldCheck
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';
import { Sparkles } from "lucide-react";
import Footer from '../Footer';

const Cleaning = () => {



  // Carousel State
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const autoPlayRef = React.useRef(null);

  // Carousel Functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play logic
  React.useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 text-white" style={{ backgroundColor: "#204b29" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cleaning & Environmental Services:
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent mt-2">
              Clinical-Grade Hygiene
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-10">
            <p className="text-2xl text-emerald-200 mb-3 font-semibold">
              Environmental Stewardship & Smart Sanitation
            </p>

            <p className="text-lg text-emerald-100/90 font-medium mb-4">
              Scientific Cleaning Protocols for High-Performance Environments.
            </p>

            <p className="text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
              In a post-pandemic world, cleaning is critical to health and safety—not just appearance.
              FIH delivers advanced, data-driven cleaning solutions tailored for healthcare facilities
              and premium commercial environments.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

            {[
              {
                title: "Medical-Grade Disinfection",
                desc: "Advanced bio-cleaning protocols using hospital-grade, non-toxic disinfectants for clinical and high-touch areas."
              },
              {
                title: "Data-Driven Cleaning",
                desc: "Optimized schedules based on occupancy data and usage patterns for efficient resource deployment."
              },
              {
                title: "Sustainable Practices",
                desc: "Use of eco-certified chemicals, HEPA-filter vacuums, and water-efficient equipment for green cleaning."
              },
              {
                title: "Specialized Surface Care",
                desc: "Expert maintenance including marble polishing, façade cleaning, and long-term surface protection."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-emerald-200 group-hover:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-emerald-100/80 group-hover:text-emerald-50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Clinical-Grade Hygiene & Environmental Stewardship
              </h2>

              <p className="text-lg text-gray-600 mb-4 font-semibold">
                Smart Cleaning Systems for Safer Spaces
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our cleaning solutions go beyond routine janitorial services by integrating
                science, technology, and sustainability. We ensure hygienic, compliant,
                and environmentally responsible environments across industries.
              </p>

              <div className="space-y-4">

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Hospital-grade disinfection for critical and high-touch zones.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Smart scheduling using real-time occupancy insights.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Eco-friendly cleaning with certified green products.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Advanced floor care and external façade maintenance.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Card */}
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-emerald-600 mx-auto mb-4" />

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Clean. Safe. Sustainable.
                </h3>

                <p className="text-gray-700 italic">
                  "Delivering hygienic, compliant, and eco-conscious environments
                  through innovation and precision cleaning."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>















      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What our valued clients say about our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                {testimonial.author && (
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Valued Clients */}

      {/* Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Showcasing our professional Cleaning management services in action
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">

            {/* Main Image Display */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 aspect-video">
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="w-full flex-shrink-0 h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
                  >
                    <img
                      src={`/img/clean/${num}.png`}
                      alt={`Gallery image ${num}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Image Counter Badge */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                {currentIndex + 1} / 5
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${currentIndex === index
                      ? 'w-10 h-2 bg-emerald-600'
                      : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
              {[1, 2, 3, 4, 5].map((num, idx) => (
                <button
                  key={num}
                  onClick={() => goToSlide(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentIndex === idx
                      ? 'border-emerald-500 ring-2 ring-emerald-200 scale-105'
                      : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  <img
                    src={`/img/clean/${num}.png`}
                    alt={`Thumbnail ${num}`}
                    className="w-full h-full "
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/60x60?text=No+Img';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      {/* <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
     
          <div className="flex justify-center mb-12">
            <div className="footer-logo-container">
              <img
                src="/img/logoGreen.png"
                alt="FIH Logo"
                className="h-24 md:h-28 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            <div className="flex justify-center items-center">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/img/security/securityscanner.png"
                  alt="Security Scanner QR Code"
                  className="h-36 md:h-40 w-auto transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

          
            <div className="flex flex-col justify-center space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-green-500 inline-block">
                  Cleaning & Environmental Services
                </h3>
              </div>

    
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-3 group">
                  <div className="bg-blue-900 p-2 rounded-full  transition-colors">
                    <FaPhoneAlt className="text-white text-sm" />
                  </div>
                  <a href="" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
                    +-- -- --
                  </a>
                </div>
              </div>

           
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-3 group">
                  <div className="bg-blue-900 p-2 rounded-full  transition-colors">
                    <CiGlobe className="text-white text-sm" />
                  </div>
                  <a href="mailto:---@fih.com.sg" className="text-gray-700 hover:text-green-600 transition-colors">
                    ---@fih.com.sg
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-start justify-center md:justify-start space-x-3 group">
                  <div className="bg-blue-900 p-2 rounded-full  transition-colors mt-1">
                    <CiGlobe className="text-white text-sm" />
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    ---,<br />
                    #---<br />
                    Singapore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* Footer Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        padding: '2px 0',
        color: 'white',
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5), 0 -2px 10px rgba(165, 97, 97, 0.3)',
        borderTop: '3px solid #a36161',
        position: 'relative'
      }}>
        <Footer />
      </section>
    </div>
  );
}

export default Cleaning;