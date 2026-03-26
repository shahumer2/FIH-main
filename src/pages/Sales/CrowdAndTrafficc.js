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

const CrowdAndTrafficc = () => {



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
                {/* Clean batch container without green background */}
                <div className="relative">
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-lg"></div>

                  {/* Batch image container */}
                  <div className="relative p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    {/* Floating decorative elements */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500/10 rounded-full blur-md"></div>
                    <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-teal-500/10 rounded-full blur-md"></div>

                    {/* Batch image */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative">
                        <img
                          src='/img/batch.png'
                          alt="Security Batch"
                          className="w-64 h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
                        />
                        {/* Subtle shine effect */}
                        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-md"></div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="text-center mt-6">
                      <h3 className="text-2xl font-bold text-emerald-100 mb-1">Trusted Security Partner</h3>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-2 mt-8">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
                Security &
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>

              {/* Subtitle */}
              <div className="mb-8">
                <p className="text-2xl text-emerald-200 mb-4 font-semibold">
                  Unlocking Innovative Solutions
                </p>
                <p className="text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                  Enabling cities of the future with comprehensive security and traffic solutions.
                  Our integrated approach combines cutting-edge technology with proven methodologies
                  to deliver unmatched protection and efficiency.
                </p>
              </div>

              {/* Features Grid - Updated to match original spacing */}
              <div className="space-y-6 mb-5">
                {/* First row */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  {[
                    { icon: <Shield className="w-5 h-5" />, text: "Event & Crowd Management" },
                    { icon: <Users className="w-5 h-5" />, text: "Emergency Response Support" },
                    { icon: <Car className="w-5 h-5" />, text: "Escort & Convoy Services" },
                    { icon: <Shield className="w-5 h-5" />, text: "Controlled Route Access" },
                  ].map((item, index) => (
                    <div key={index} className="flex-1 min-w-[200px]">
                      <div className="group flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-900/30 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center group-hover:bg-emerald-800/50 transition-colors">
                          <div className="text-emerald-300 group-hover:text-emerald-200">
                            {item.icon}
                          </div>
                        </div>
                        <span className="text-emerald-100 group-hover:text-white transition-colors">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  {[
                    { icon: <Users className="w-5 h-5" />, text: "Roving Security Responsive Support" },
                    { icon: <Car className="w-5 h-5" />, text: "Traffic & Safety Monitoring" },
                    { icon: <Car className="w-5 h-5" />, text: "Centralised 24-hr Facility Ops Centre" },
                  ].map((item, index) => (
                    <div key={index} className="flex-1 min-w-[200px]">
                      <div className="group flex items-center gap-3 p-4 rounded-xl hover:bg-emerald-900/30 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center group-hover:bg-emerald-800/50 transition-colors">
                          <div className="text-emerald-300 group-hover:text-emerald-200">
                            {item.icon}
                          </div>
                        </div>
                        <span className="text-emerald-100 group-hover:text-white transition-colors">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">TRAFFIC AND CROWD MANAGEMENT</h2>
              <p className="text-lg text-gray-600 mb-6">
                Efficient traffic control road diversions, and vigilant supervision to safeguard the public from potential risks and hazards. Compliant with stringent safety standards at worksites, work convoys, and major event venues
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Critical infrastructure protection solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Project funding, consulting and risk management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Cybersecurity asset management</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 italic">
                  "Your Safety and Security is our Top Priority, for your Peace of Mind"
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


      {/* Contact Section */}
   <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    {/* Logo Section - Centered */}
    <div className="flex justify-center mb-12">
      <div className="footer-logo-container">
        <img
          src="/img/logoGreen.png"
          alt="FIH Logo"
          className="h-24 md:h-28 w-auto transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>

    {/* Contact Information Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
      
      {/* QR Code Section */}
      <div className="flex justify-center items-center">
        <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="/img/security/securityscanner.png"
            alt="Security Scanner QR Code"
            className="h-36 md:h-40 w-auto transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col justify-center space-y-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-green-500 inline-block">
            Traffic & Security
          </h3>
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-3 group">
            <div className="bg-blue-900 p-2 rounded-full  transition-colors">
              <FaPhoneAlt className="text-white text-sm" />
            </div>
            <a href="tel:+6597957333" className="text-gray-700 hover:text-green-600 transition-colors text-lg">
              +65 9795-7333
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-3 group">
            <div className="bg-blue-900 p-2 rounded-full  transition-colors">
              <CiGlobe className="text-white text-sm" />
            </div>
            <a href="mailto:security@fih.com.sg" className="text-gray-700 hover:text-green-600 transition-colors">
              security@fih.com.sg
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-start justify-center md:justify-start space-x-3 group">
            <div className="bg-blue-900 p-2 rounded-full  transition-colors mt-1">
              <CiGlobe className="text-white text-sm" />
            </div>
            <div className="text-gray-700 leading-relaxed">
              9 Eunos Ave 8A,<br />
              #02-00<br />
              Singapore 409461
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default CrowdAndTrafficc;