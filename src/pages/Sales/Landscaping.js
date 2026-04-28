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
import Footer from '../Footer';

const Landscaping = () => {


// Carousel State
const [currentIndex, setCurrentIndex] = React.useState(0);
const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
const autoPlayRef = React.useRef(null);

// Carousel Functions
const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
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
      Landscape Management:
      <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent mt-2">
        Sustainable Urban Landscapes
      </span>
    </h1>

    {/* Subtitle */}
    <div className="mb-10">
      <p className="text-2xl text-emerald-200 mb-3 font-semibold">
        Horticultural Excellence & Green Infrastructure
      </p>

      <p className="text-lg text-emerald-100/90 font-medium mb-4">
        Harmonizing Built Environments with Productive Green Spaces.
      </p>

      <p className="text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
        A well-managed landscape is a vital asset that enhances air quality,
        reduces ambient heat, and improves the mental well-being of occupants.
        FIH provides end-to-end horticultural services designed for modern
        urban environments.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

      {[
        {
          title: "Holistic Horticulture",
          desc: "Certified arborists and horticulturists deliver precision pruning, soil health monitoring, and nutrient management tailored to plant species."
        },
        {
          title: "Arboriculture & Tree Safety",
          desc: "Regular tree health assessments and professional pruning reduce risks during harsh weather and ensure safety of outdoor spaces."
        },
        {
          title: "Vertical & Indoor Greenery",
          desc: "Expert maintenance of sky gardens and green walls using automated irrigation systems for sustainable growth."
        },
        {
          title: "Nuisance & Weed Control",
          desc: "Proactive removal of invasive species and weeds to preserve landscape aesthetics and structural integrity."
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
     {/* About Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sustainable Urban Landscapes & Horticultural Excellence
        </h2>

        <p className="text-lg text-gray-600 mb-4 font-semibold">
          Smart Green Space Management & Environmental Enhancement
        </p>

        <p className="text-lg text-gray-600 mb-6">
          Our landscape solutions are designed to enhance environmental quality,
          improve biodiversity, and create visually appealing, functional green spaces.
          We combine horticultural expertise with sustainable practices to ensure
          long-term landscape vitality.
        </p>

        <div className="space-y-4">

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Precision pruning, soil conditioning, and nutrient optimization.
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Tree health inspections and risk mitigation strategies.
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Maintenance of green walls, rooftop gardens, and indoor plants.
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Effective weed and invasive species control programs.
            </p>
          </div>

        </div>
      </div>

      {/* Right Card */}
      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
        <div className="text-center">
          <Target className="w-16 h-16 text-emerald-600 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Green Excellence
          </h3>

          <p className="text-gray-700 italic">
            "Creating sustainable, healthy, and visually inspiring landscapes
            through expert care and innovation."
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
        Showcasing our professional security and traffic management services in action
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
          {[1, 2].map((num) => (
            <div
              key={num}
              className="w-full flex-shrink-0 h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <img
                src={`/img/land/${num}.png`}
                alt={`Gallery image ${num}`}
                className="w-full h-full object-cover"
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
          {currentIndex + 1} / 2
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
        {[0,1].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? 'w-10 h-2 bg-emerald-600'
                : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
        {[1, 2].map((num, idx) => (
          <button
            key={num}
            onClick={() => goToSlide(idx)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              currentIndex === idx
                ? 'border-emerald-500 ring-2 ring-emerald-200 scale-105'
                : 'border-gray-300 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={`/img/land/${num}.png`}
              alt={`Thumbnail ${num}`}
              className="w-full h-full object-cover"
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

export default Landscaping;