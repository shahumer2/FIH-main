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
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Mitigation & Control",
      description:
        "We provide proactive risk assessment and threat mitigation strategies that minimize potential hazards before they occur. Our team identifies vulnerabilities, implements safety protocols, and ensures operational continuity for all types of environments.",
      features: [
        "Comprehensive risk assessments",
        "Incident prevention planning",
        "Strategic threat management"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event & Crowd Management",
      description:
        "Our experienced officers manage crowd dynamics at concerts, sports events, and public gatherings to ensure the safety and comfort of all attendees. We specialize in smooth ingress/egress flow and incident-free crowd behavior monitoring.",
      features: [
        "Pre-event risk evaluation",
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
        "Collaboration with local authorities"
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Safety & Best Practices",
      description:
        "Our operations follow internationally recognized safety standards and continuous training programs. We promote best practices in all aspects of fieldwork to ensure safety compliance and service excellence.",
      features: [
        "ISO & MOM safety compliance",
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
        "Adaptive route management"
      ]
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Trained & Certified Personnel",
      description:
        "All our officers are professionally trained, licensed, and certified under industry and government standards. Regular refresher courses guarantee up-to-date knowledge in safety, security, and emergency response protocols.",
      features: [
        "WSQ-certified & licensed personnel",
        "Continuous skill development",
        "Professional conduct & discipline"
      ]
    }
  ];

  // const services = [
  //   {
  //     icon: <Building className="w-8 h-8" />,
  //     title: "Hospitality & Attraction",
  //     description: "Ensuring smooth pickups/drop-offs, guiding vehicles, and maintaining clear driveways for venues like Marina Bay Sands & Gardens By The Bay",
  //     features: ["Touting enforcement", "Data-informed strategy", "Enhanced visitor experience"]
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Escort Services",
  //     description: "Professional security escorts for various needs including ATM maintenance and executive protection",
  //     features: ["ATM Repair & Maintenance", "Vendor/Customer Escort", "Executive Protection"]
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Outrider Services",
  //     description: "VIP escort services for high net worth individuals, VIPs, and artists with high visibility equipment",
  //     features: ["High visibility motorcycles", "Professional trained officers", "24/7 availability"]
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Crowd Control - Retail/Commercial",
  //     description: "Field-proven crowd control solutions for retail spaces and commercial areas",
  //     features: ["Zero incidence standard", "Physical boundaries", "Risk assessment"]
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Large Scale Events",
  //     description: "Comprehensive security for live music, sports, exhibitions, and conventions",
  //     features: ["Extensive coordination", "Safety protocols", "Positive public experience"]
  //   },
  //   {
  //     icon: <Car className="w-8 h-8" />,
  //     title: "Road Works & Public Streets",
  //     description: "Fully trained and licensed traffic marshals for construction projects and public roads",
  //     features: ["Traffic control plans", "Safety compliance", "Minimal disruptions"]
  //   },
  //   {
  //     icon: <School className="w-8 h-8" />,
  //     title: "Educational Zones",
  //     description: "Traffic management for schools during pick-up and drop-off times",
  //     features: ["Student safety", "Traffic regulation", "School zone management"]
  //   },
  //   {
  //     icon: <Package className="w-8 h-8" />,
  //     title: "High Value Package Security",
  //     description: "Secure transportation for valuable items below SGD$250,000 threshold",
  //     features: ["Specialized vehicles", "GPS tracking", "Trained Security Transport Operators"]
  //   }
  // ];




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
      quote: "We are satisfied and confident with . FIH traffic regulating work and their Safety-First approach is very respectful.",
      author: ""
    },
    {
      quote: "We are privileged to work with an experience AFIH Management staff with both strategic and tactical perspectives.",
      author: "Keith It, Director, Office of Campus Security, NUS"
    },
    {
      quote: "AFIH Team is quick to address key concern & issues to meet our demanding business needs, while remains flexible in responding to changing expectation, is a commendable effort.",
      author: "Tome Oh, COO, TS Group"
    },
    {
      quote: "Great Service! All I can say is that Traffic@AFIH has one of the best operational procedures and the staff are top notch.",
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Traffic & Crowd Management: Smart Mobility Control
              </h2>

              <p className="text-lg text-gray-600 mb-4 font-semibold">
                Intelligent Flow Control & Public Safety Assurance
              </p>

              <p className="text-lg text-gray-600 mb-6">
                At FIH, we deliver structured and responsive traffic and crowd management solutions
                designed to ensure safety, efficiency, and seamless mobility across events,
                infrastructure projects, and high-density environments. Our approach integrates
                trained personnel with real-time monitoring systems to minimize risks and disruptions.
              </p>

              <div className="space-y-4">

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Event & Crowd Flow Optimization – Safe movement planning for large-scale events and public gatherings.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Traffic Diversion & Route Control – Efficient rerouting strategies to reduce congestion and hazards.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Real-Time Monitoring & Incident Response – Rapid coordination for emergencies and dynamic situations.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Worksite & Convoy Safety Management – Compliance-driven solutions for infrastructure and logistics operations.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Card */}
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-emerald-600 mx-auto mb-4" />

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Operational Excellence
                </h3>

                <p className="text-gray-700 italic">
                  "Delivering safe, efficient, and controlled environments through precision planning
                  and proactive management."
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
              {/* Parent container with fixed height */}
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
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
                        src={`/img/sec/${num}.png`}
                        alt={`Gallery image ${num}`}
                        className="w-full h-full object-contain" // This won't crop
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

export default CrowdAndTrafficc;