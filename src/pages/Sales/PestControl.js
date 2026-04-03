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

const PestControl = () => {





  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
 <section className="pt-24 pb-16 text-white" style={{ backgroundColor: "#204b29" }}>
  <div className="max-w-4xl mx-auto px-4 text-center">

    {/* Title */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Integrated Pest Management:
      <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent mt-2">
        Proactive Bio-Security & Vector Control
      </span>
    </h1>

    {/* Subtitle */}
    <div className="mb-10">
      <p className="text-2xl text-emerald-200 mb-3 font-semibold">
        Data-Driven Pest Suppression
      </p>

      <p className="text-lg text-emerald-100/90 font-medium mb-4">
        Smart, Preventive Solutions for Compliance-Heavy Sectors.
      </p>

      <p className="text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
        FIH adopts an Integrated Pest Management (IPM) approach focused on long-term
        prevention. Instead of relying solely on chemical treatments, we identify
        root causes such as entry points and food sources to ensure sustainable,
        effective pest control.
      </p>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

      {[
        {
          title: "Surveillance & Exclusion",
          desc: "Deep inspections to seal entry points and implement barriers, minimizing pest intrusion and reducing chemical dependency."
        },
        {
          title: "Vector Control Excellence",
          desc: "Advanced mosquito and rodent control programs designed to meet strict public health and regulatory standards."
        },
        {
          title: "Digital Reporting & Compliance",
          desc: "Transparent digital logs of treatments, pest activity, and analytics—ideal for audits in healthcare and F&B sectors."
        },
        {
          title: "Low-Impact Solutions",
          desc: "Use of pheromone traps, biological controls, and targeted applications to ensure safety for people and the environment."
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
          Proactive Bio-Security & Vector Control
        </h2>

        <p className="text-lg text-gray-600 mb-4 font-semibold">
          Intelligent Pest Prevention & Compliance Assurance
        </p>

        <p className="text-lg text-gray-600 mb-6">
          Our Integrated Pest Management (IPM) solutions combine scientific
          analysis, real-time monitoring, and preventive strategies to control pests
          effectively while minimizing environmental impact.
        </p>

        <div className="space-y-4">

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Identification and sealing of pest entry points.
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Advanced mosquito and rodent control systems.
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Digital tracking for compliance, audits, and reporting.
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Eco-friendly and low-toxicity pest control methods.
            </p>
          </div>

        </div>
      </div>

      {/* Right Card */}
      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
        <div className="text-center">
          <ShieldCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Safe & Compliant
          </h3>

          <p className="text-gray-700 italic">
            "Delivering intelligent, eco-conscious pest control solutions that
            ensure safety, compliance, and long-term protection."
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
                  Integrated Pest Management Services Enquiries
                </h3>
              </div>

              {/* Phone */}
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

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-3 group">
                  <div className="bg-blue-900 p-2 rounded-full  transition-colors">
                    <CiGlobe className="text-white text-sm" />
                  </div>
                  <a href="mailto:security@fih.com.sg" className="text-gray-700 hover:text-green-600 transition-colors">
                    --@fih.com.sg
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
                    ---,<br />
                    #---<br />
                    Singapore ---
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

export default PestControl;