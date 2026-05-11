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

const CrowdAndTrafficc = () => {


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
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);
  
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Mitigation & Control",
      description:
        "We provide proactive risk assessment and threat mitigation strategies that minimize potential hazards before they occur. Our team identifies vulnerabilities, implements safety protocols, and ensures operational continuity for all types of environments.",
      features: [
        "Comprehensive risk assessments",
       
        "Strategic threat management"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event & Crowd Management",
      description:
        "Our experienced officers manage crowd dynamics at concerts, sports events, and public gatherings to ensure the safety and comfort of all attendees. We specialize in smooth ingress/egress flow and incident-free crowd behavior monitoring.",
      features: [
       
        "Flow and density control",
        "Emergency crowd response protocols"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Emergency Response Support",
      description:
        "Trained emergency response teams are ready to act swiftly in any situation — from accidents to medical emergencies or fire evacuations. We coordinate closely with public agencies to ensure rapid and effective responses.",
      features: [
        "On-site emergency coordination",
        "Medical & evacuation assistance",
       
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Safety & Best Practices",
      description:
        "Our operations follow internationally recognized safety standards and continuous training programs. We promote best practices in all aspects of fieldwork to ensure safety compliance and service excellence.",
      features: [
       
        "Standard Operating Procedures (SOPs)",
        "Continuous improvement initiatives"
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Traffic & Safety Monitoring",
      description:
        "We deliver professional traffic management and monitoring solutions for construction zones, road closures, and public events. Our officers ensure minimal disruption and the highest safety for motorists and pedestrians.",
      features: [
        "Real-time traffic supervision",
        "Pedestrian safety assurance",
       
      ]
    },
    // {
    //   icon: <School className="w-8 h-8" />,
    //   title: "Trained & Certified Personnel",
    //   description:
    //     "All our officers are professionally trained, licensed, and certified under industry and government standards. Regular refresher courses guarantee up-to-date knowledge in safety, security, and emergency response protocols.",
    //   features: [
    //     "WSQ-certified & licensed personnel",
    //     "Continuous skill development",
    //     "Professional conduct & discipline"
    //   ]
    // }
  ];

  const clients = [
    "Marina Bay Sands", "Gardens By The Bay", "ION Orchard", "Maris Stella High School",
    "Nan Hua High School", "Changi Airport Group", "Samsung C&T", "China Communications Construction",
    "Dragages Singapore", "Singapore International Water Week", "Singapore Airshow"
  ];

  const testimonials = [
    {
      quote: "Ashtree demonstrated the ability to understand the complexities, while respecting the individual stakeholder's concerns and interests.",
      author: "Project Engineer, Hi Power"
    },
    {
      quote: "We are satisfied and confident with FIH traffic regulating work and their Safety-First approach is very respectful.",
      author: ""
    },
    {
      quote: "We are privileged to work with an experienced FIH Management staff with both strategic and tactical perspectives.",
      author: "Keith It, Director, Office of Campus Security, NUS"
    },
    {
      quote: "FIH Team is quick to address key concern & issues to meet our demanding business needs, while remains flexible in responding to changing expectation, is a commendable effort.",
      author: "Tome Oh, COO, TS Group"
    },
    {
      quote: "Great Service! All I can say is that FIH has one of the best operational procedures and the staff are top notch.",
      author: "Project Coordinator, NCB Contractor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-5 text-white" style={{ backgroundColor: "#204b29" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Side - Batch Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-lg"></div>

                <div className="relative p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500/10 rounded-full blur-md"></div>
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-teal-500/10 rounded-full blur-md"></div>

                  <div className="relative z-10 flex items-center justify-center">
                    <img
                      src='/img/batchh.png'
                      alt="Security Batch"
                      className="w-64 h-64 lg:w-72 lg:h-102 object-contain drop-shadow-2xl"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-emerald-100 mb-1">
                      Trusted Security Partner
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-2 mt-8">

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
                Security Guardforce:
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  {" "}High-Vigilance Solutions
                </span>
              </h1>

              {/* Subtitle */}
              <div className="mb-6">
                <p className="text-2xl text-emerald-200 mb-3 font-semibold">
                  Intelligence-Led Security & Elite Guarding
                </p>
                <p className="text-lg text-emerald-100/90 font-medium mb-3">
                  Protecting Assets, People, and Reputation through Integrated Risk Management.
                </p>
                <p className="text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                  At FIH, we view security as the first line of defense in maintaining facility continuity.
                  Our security model moves away from passive observation toward proactive threat mitigation.
                  We deploy highly trained personnel supported by a robust digital command infrastructure.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-5">

                {[
                  {
                    title: "Elite Personnel Selection",
                    desc: "Our officers undergo rigorous vetting and specialized training in conflict de-escalation, counter-terrorism awareness, and concierge-level service."
                  },
                  {
                    title: "Integrated Command & Control",
                    desc: "Centralized management enables real-time incident reporting, GPS-tracked patrols, and instant emergency escalation."
                  },
                  {
                    title: "Healthcare-Specific Security",
                    desc: "Specialized expertise in managing high-traffic healthcare environments and protecting vulnerable patient populations."
                  },
                  {
                    title: "Infrastructure Audit & Consultancy",
                    desc: "Comprehensive security audits to identify vulnerabilities in perimeter protection, access control, and surveillance systems."
                  }
                ].map((item, index) => (
                  <div key={index} className="group p-4 rounded-xl hover:bg-emerald-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-emerald-200 group-hover:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-emerald-100/80 group-hover:text-emerald-50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Updated for Security */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Integrated Security Solutions: Proactive Protection & Risk Management
              </h2>

              <p className="text-lg text-gray-600 mb-4 font-semibold">
                Intelligence-Driven Security & Asset Protection
              </p>

              <p className="text-lg text-gray-600 mb-6">
                At FIH, we deliver comprehensive security solutions designed to protect your assets, 
                personnel, and reputation. Our approach integrates highly trained security professionals 
                with advanced technology to create a layered defense strategy that adapts to evolving threats. 
                We move beyond traditional guard services to provide intelligence-led security that anticipates 
                and neutralizes risks before they materialize.
              </p>

              <div className="space-y-4">

                <div className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    24/7 Professional Guarding Services – Highly trained security officers for corporate, residential, and industrial facilities.
                  </p>
                </div>

                <div className="flex items-start">
                  <Target className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Risk Assessment & Security Audits – Comprehensive vulnerability analysis and mitigation planning.
                  </p>
                </div>

                <div className="flex items-start">
                  <Camera className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    CCTV Surveillance & Access Control – Integrated technology solutions for continuous monitoring and restricted area management.
                  </p>
                </div>

                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Emergency Response & Crisis Management – Rapid deployment teams trained for immediate incident response.
                  </p>
                </div>

                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Concierge & Customer-Facing Security – Professional officers who balance security with exceptional service.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Card */}
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Security Commitment
                </h3>

                <p className="text-gray-700 italic mb-6">
                  "Delivering proactive, intelligence-led security solutions that protect what matters most — 
                  your people, assets, and peace of mind."
                </p>

                <div className="border-t border-emerald-200 pt-4 mt-4">
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      {/* <p className="text-2xl font-bold text-emerald-700">500+</p> */}
                      <p className="text-xs text-gray-600">Trained Officers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Command Center</p>
                      <p className="text-2xl font-bold text-emerald-700">24/7</p>
                    </div>
                    <div className="text-center">
                      {/* <p className="text-2xl font-bold text-emerald-700">100+</p> */}
                      <p className="text-xs text-gray-600">Client Sites</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Security Services</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
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
              {[0, 1].map((index) => (
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
              {[1, 2].map((num, idx) => (
                <button
                  key={num}
                  onClick={() => goToSlide(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentIndex === idx
                    ? 'border-emerald-500 ring-2 ring-emerald-200 scale-105'
                    : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  <img
                    src={`/img/sec/${num}.png`}
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

export default CrowdAndTrafficc;