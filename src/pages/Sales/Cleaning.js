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

const Cleaning = () => {





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
                  Cleaning & Environmental Services
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
                  <a href="mailto:---@fih.com.sg" className="text-gray-700 hover:text-green-600 transition-colors">
                    ---@fih.com.sg
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
                    Singapore 
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

export default Cleaning;