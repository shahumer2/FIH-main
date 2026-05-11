import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, Globe, MapPin, Users, Car, Shield,
  School, Building, Award, Clock, Star, ArrowRight,
  Target, Heart, Zap, CheckCircle, AlertTriangle,
  Truck, Package, Camera,
  TrafficCone,
  ShieldCheck,
  Navigation,
  Eye,
  BarChart3,
  Route,
  Navigation2,
  Flag
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';
import Footer from '../Footer';

const Traficc = () => {

  // Carousel State
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const autoPlayRef = React.useRef(null);

  // Carousel Functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play logic
  React.useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const trafficServices = [
    {
      icon: <TrafficCone className="w-8 h-8" />,
      title: "TRAFFIC FLOW CONTROL",
      description:
        "Professional traffic management ensuring smooth vehicle movement, reduced congestion, and enhanced safety across construction zones, events, and public roads. Our trained officers implement adaptive traffic plans that respond to real-time conditions, including road diversions and vigilant supervision."
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "EVENT TRAFFIC PLANNING",
      description:
        "Comprehensive traffic plans for events of all scales — from community gatherings to large-scale festivals. We coordinate with organizers, authorities, and stakeholders to design seamless traffic flow strategies, including route planning, signage strategy, and VIP access management."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "ESCORT & OUTRIDERS SERVICES",
      description:
        "Professional vehicle escort services for VIPs, high-profile individuals, artists, and valuable cargo. Our trained outriders provide high-visibility escort with advanced communication systems, ensuring safe and timely arrival at destinations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "TRAINED & CERTIFIED PERSONNEL",
      description:
        "All traffic marshals and officers are fully trained, licensed, and certified under Singapore's regulatory framework (WSQ-certified). Continuous professional development ensures the highest service standards, professional conduct, and discipline."
    },
    // {
    //   icon: <Eye className="w-8 h-8" />,
    //   title: "SAFETY & COMPLIANCE",
    //   description:
    //     "All operations strictly adhere to Singapore's safety regulations (LTA & MOM compliance) and industry best practices. Our protocols are designed to safeguard workers, motorists, and event attendees from potential risks and hazards at worksites, work convoys, and major event venues."
    // },
    {
      icon: <Award className="w-8 h-8" />,
      title: "BEST PRACTICES",
      description:
        "We implement internationally recognized best practices in traffic management, including Standard Operating Procedures (SOPs), regular safety audits, incident reporting, and continuous improvement initiatives to ensure service excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 text-white" style={{ backgroundColor: "#204b29" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Side - Hero Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src='/img/sec/3.png'
                    alt="Traffic Management"
                    className="w-full h-72 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Traffic & Event Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-2">
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full mb-4">
                Traffic & Event Management
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Efficient Traffic Control & 
                <span className="bg-gradient-to-r from-green-300 via-green-300 to-sky-300 bg-clip-text text-transparent">
                  {" "}Event Management
                </span>
              </h1>

              <p className="text-lg text-green-100/90 leading-relaxed mb-6 max-w-xl">
                Efficient traffic control, road diversions, and vigilant supervision to safeguard the public 
                from potential risks and hazards. Compliant with stringent safety standards at worksites, 
                work convoys, and major event venues.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-300">24/7</p>
                  <p className="text-xs text-green-100/70">Availability</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-300">100%</p>
                  <p className="text-xs text-green-100/70">Safety Compliance</p>
                </div>
                {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-300">500+</p>
                  <p className="text-xs text-green-100/70">Projects Managed</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - OUR SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR SERVICES
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-500 rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive traffic and event management solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trafficServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-6 border border-green-100/50 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white shadow-md">
                      {service.icon}
                    </span>
                    <h4 className="font-bold text-gray-800 text-sm md:text-sm">{service.title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Value Proposition Section - Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Traffic & Event Management?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Proven Track Record",
                    desc: "Successfully managed traffic for major construction projects, public events, and high-security venues across Singapore."
                  },
               
                  {
                    title: "Rapid Deployment",
                    desc: "24/7 standby teams ready for immediate deployment to handle emergencies or last-minute requirements."
                  },
                  {
                    title: "Safety-First Approach",
                    desc: "We prioritize safety at all times, implementing stringent safety standards at worksites, work convoys, and major event venues."
                  },
                  {
                    title: "Technology-Enabled",
                    desc: "Real-time monitoring and communication systems ensure coordinated responses and proactive traffic management."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <ShieldCheck className="w-16 h-16 text-green-200 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Safety Compliance</h3>
                <p className="text-green-100 italic mb-6">
                  "Compliant with stringent safety standards at worksites, work convoys, and major event venues."
                </p>
                {/* <div className="border-t border-green-400/30 pt-6 mt-6">
                  <div className="flex justify-around">
                    <div>
                      <p className="text-2xl font-bold">LTA</p>
                      <p className="text-green-200 text-xs">Compliant</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">MOM</p>
                      <p className="text-green-200 text-xs">Compliant</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">WSQ</p>
                      <p className="text-green-200 text-xs">Certified</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Showcasing our professional traffic and event management services in action
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
              <div className="relative w-full h-72 md:h-96 lg:h-[500px] overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {[2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="w-full flex-shrink-0 h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
                    >
                      <img
                        src={`/img/sec/${num}.png`}
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
              </div>

              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                {currentIndex + 1} / 4
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${currentIndex === index
                    ? 'w-10 h-2 bg-green-600'
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
              {[2, 3, 4, 5].map((num, idx) => (
                <button
                  key={num}
                  onClick={() => goToSlide(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentIndex === idx
                    ? 'border-green-500 ring-2 ring-green-200 scale-105'
                    : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  <img
                    src={`/img/sec/${num}.png`}
                    alt={`Thumbnail ${num}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Traficc;