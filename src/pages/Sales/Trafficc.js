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
  BarChart3
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
      title: "Traffic Flow Control",
      description:
        "Professional traffic management ensuring smooth vehicle movement, reduced congestion, and enhanced safety across construction zones, events, and public roads. Our trained officers implement adaptive traffic plans that respond to real-time conditions.",
      // features: [
      //   "Real-time traffic supervision & rerouting",
      //   "Construction zone traffic management",
      //   "Peak-hour flow optimization",
      //   "Pedestrian-vehicle conflict reduction"
      // ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Crowd Movement Management",
      description:
        "Structured crowd dynamics management for events, public spaces, and high-density environments. We ensure safe ingress/egress, prevent bottlenecks, and maintain orderly movement through strategic positioning and real-time monitoring.",
      // features: [
      //   "Crowd density monitoring & control",
      //   "Entry/exit flow management",
      //   "Queue management systems",
      //   "Emergency evacuation coordination"
      // ]
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Event Traffic Planning",
      description:
        "Comprehensive traffic plans for events of all scales — from community gatherings to large-scale festivals. We coordinate with organizers, authorities, and stakeholders to design seamless traffic flow strategies.",
      // features: [
      //   "Pre-event traffic impact assessment",
      //   "Route planning & signage strategy",
      //   "VIP & emergency vehicle access",
      //   "Post-event dispersal management"
      // ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safety & Compliance",
      description:
        "All operations strictly adhere to Singapore's safety regulations and industry best practices. Our protocols are designed to protect workers, motorists, pedestrians, and event attendees at all times.",
      // features: [
      //   "LTA & MOM compliance",
      //   "Workplace Safety & Health (WSH) standards",
      //   "Regular safety audits",
      //   "Incident reporting & investigation"
      // ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description:
        "Advanced monitoring capabilities enable proactive traffic and crowd management. Our command structure supports instant communication, live situation updates, and rapid response to changing conditions.",
      // features: [
      //   "Live traffic condition monitoring",
      //   "Rapid incident response",
      //   "Communication with ground teams",
      //   "Data-driven decision making"
      // ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trained & Certified Personnel",
      description:
        "All traffic marshals and crowd control officers are fully trained, licensed, and certified under Singapore's regulatory framework. Continuous professional development ensures the highest service standards.",
      // features: [
      //   "WSQ-certified traffic marshals",
      //   "Crowd control licensing",
      //   "Regular refresher training",
      //   "Professional conduct & discipline"
      // ]
    }
  ];

  const testimonials = [
    {
      quote: "Ashtree demonstrated the ability to understand the complexities, while respecting the individual stakeholder's concerns and interests.",
      author: "Project Engineer, Hi Power"
    },
    {
      quote: "We are satisfied and confident with FIH traffic regulating work and their Safety-First approach is very respectful.",
      author: "Operations Manager, Construction Firm"
    },
    {
      quote: "Great Service! All I can say is that Traffic@FIH has one of the best operational procedures and the staff are top notch.",
      author: "Project Coordinator, NCB Contractor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navbar />

      {/* Hero Section - NO BADGE */}
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
                    <p className="text-white font-semibold text-lg">Professional Traffic Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-2">
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full mb-4">
                Traffic & Crowd Management
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Smart Mobility Control:
                <span className="bg-gradient-to-r from-green-300 via-green-300 to-sky-300 bg-clip-text text-transparent">
                  {" "}Safe & Efficient Flow
                </span>
              </h1>

              <p className="text-lg text-green-100/90 leading-relaxed mb-6 max-w-xl">
                At FIH, we deliver structured traffic and crowd management solutions designed 
                to ensure safety, efficiency, and seamless mobility across events, construction 
                zones, and high-density public environments.
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-300">500+</p>
                  <p className="text-xs text-green-100/70">Projects Managed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traffic & Crowd Management Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-500 rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive solutions for safe, efficient traffic flow and crowd control
            </p>
          </div>

          {/* Services Grid */}
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
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">{service.title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {/* <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Traffic & Crowd Management?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Proven Track Record",
                    desc: "Successfully managed traffic for major construction projects, public events, and high-security venues across Singapore."
                  },
                  {
                    title: "Certified Expertise",
                    desc: "All personnel are WSQ-certified and undergo continuous professional development to stay current with regulations."
                  },
                  {
                    title: "Rapid Deployment",
                    desc: "24/7 standby teams ready for immediate deployment to handle emergencies or last-minute requirements."
                  },
                  {
                    title: "Technology-Enabled",
                    desc: "Real-time monitoring and communication systems ensure coordinated responses and proactive management."
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
                <Target className="w-16 h-16 text-green-200 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Operational Excellence</h3>
                <p className="text-green-100 italic mb-6">
                  "Delivering safe, efficient, and controlled environments through precision planning 
                  and proactive management."
                </p>
                <div className="border-t border-green-400/30 pt-6 mt-6">
                  <p className="text-3xl font-bold">99.9%</p>
                  <p className="text-green-200 text-sm">Incident-Free Rate</p>
                </div>
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
              Showcasing our professional traffic and crowd management services in action
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
              <div className="relative w-full h-72 md:h-96 lg:h-[500px] overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {[ 2, 3, 4, 5].map((num) => (
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
              {[ 1, 2, 3, 4].map((index) => (
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
              {[ 2, 3, 4, 5].map((num, idx) => (
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

      {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm mb-4 leading-relaxed">"{testimonial.quote}"</p>
                {testimonial.author && (
                  <p className="text-gray-900 font-semibold text-sm">{testimonial.author}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

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