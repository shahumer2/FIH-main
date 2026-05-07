import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Search, Shield, Users, FileText, Mail, Phone, MapPin, ArrowRight, Download, ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';
import ReactPlayer from 'react-player';
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const videoRefs = useRef([]);

  const [isVibrating, setIsVibrating] = useState(false);

  useEffect(() => {
    // Trigger vibration every 3 seconds
    const interval = setInterval(() => {
      setIsVibrating(true);
      // Stop vibrating after 0.3 seconds
      setTimeout(() => setIsVibrating(false), 300);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Initialize video refs
  // Initialize video refs
  useEffect(() => {
    videoRefs.current = [null, null];
  }, []);

  // Play video only when scrolled into view, pause when out
  useEffect(() => {
    const videoSection = document.getElementById('video-section');
    if (!videoSection || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRefs.current[currentVideoSlide];

          if (entry.isIntersecting && video) {
            // Section is in view — play current video
            video.play().catch((e) => {
              console.log("Autoplay prevented (expected)");
            });
          } else if (video) {
            // Section is out of view — pause current video
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: 0.3, // 30% of section must be visible
        rootMargin: '0px'
      }
    );

    observer.observe(videoSection);

    return () => {
      observer.disconnect();
    };
  }, [currentVideoSlide]); // Re-run when slide changes

  // Handle slide change
  const handleVideoNext = () => {
    // Pause AND reset current video
    if (videoRefs.current[currentVideoSlide]) {
      videoRefs.current[currentVideoSlide].pause();
      videoRefs.current[currentVideoSlide].currentTime = 0; // Reset to start
    }

    const nextSlide = currentVideoSlide === 1 ? 0 : currentVideoSlide + 1;
    setCurrentVideoSlide(nextSlide);
  };

  const handleVideoPrev = () => {
    // Pause AND reset current video
    if (videoRefs.current[currentVideoSlide]) {
      videoRefs.current[currentVideoSlide].pause();
      videoRefs.current[currentVideoSlide].currentTime = 0; // Reset to start
    }

    const prevSlide = currentVideoSlide === 0 ? 1 : currentVideoSlide - 1;
    setCurrentVideoSlide(prevSlide);
  };

  const goToVideoSlide = (index) => {
    // Don't do anything if clicking current slide
    if (index === currentVideoSlide) return;

    // Pause AND reset current video
    if (videoRefs.current[currentVideoSlide]) {
      videoRefs.current[currentVideoSlide].pause();
      videoRefs.current[currentVideoSlide].currentTime = 0; // Reset to start
    }

    setCurrentVideoSlide(index);
  };

  // Auto-play first video on mount (only once)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (videoRefs.current[0]?.current) {
  //       videoRefs.current[0].current.play().catch(e => {
  //         console.log("Initial auto-play prevented - user needs to interact first");
  //       });
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);


  const [servicesCurrentSlide, setServicesCurrentSlide] = useState(0);
  const [isServicesAutoPlaying, setIsServicesAutoPlaying] = useState(true);

  // Separate state for certificates carousel
  const [certificatesCurrentSlide, setCertificatesCurrentSlide] = useState(0);
  const [isCertificatesAutoPlaying, setIsCertificatesAutoPlaying] = useState(true);


  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Search Engine Optimize www.fih.com.sg for better online visibility"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Agency",
      description: "Set up security agency license and compliance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Work Pass Quota",
      description: "Secure work pass quota for international staffing"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Streamlined Operations",
      description: "Streamline roles and responsibilities for efficiency"
    }
  ];

  const services = [
    {
      title: "Security Guardforce",
      description: "Protecting Assets, People, and Reputation through Integrated Risk Management.",
      image: "/img/security/sec1.png",
      link: "/services/security-crowd-control"
    },
    {
      title: "Cleaning & Environmental Services",
      description: "Scientific Cleaning Protocols for High-Performance Environments.",
      image: "/img/cleaning/cleaning.png",
      link: "/services/cleaning"
    },
    {
      title: "Integrated Pest Management (IPM)",
      description: "Data-Driven Pest Suppression for Compliance-Heavy Sectors.",
      image: "/img/pest/pest.png",
      link: "/services/pest-control"
    },
    {
      title: "Landscape Management",
      description: "Harmonizing Built Environments with Productive Green Spaces.",
      image: "/img/garden/garden.png",
      link: "/services/landscaping"
    }
  ];

  // Handle manual slide change
  const handleSlideChange = (newSlide) => {
    setIsAutoPlaying(false); // Pause auto-slide when user manually changes slide
    setCurrentSlide(newSlide);

    // Resume auto-slide after 8 seconds of manual interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  // Handle next slide
  // const handleNext = () => {
  //   handleSlideChange((currentSlide + 1) % services.length);
  // };

  // // Handle previous slide
  // const handlePrev = () => {
  //   handleSlideChange((currentSlide - 1 + services.length) % services.length);
  // };

  const handleServicesSlideChange = (newSlide) => {
    setIsServicesAutoPlaying(false);
    setServicesCurrentSlide(newSlide);

    setTimeout(() => {
      setIsServicesAutoPlaying(true);
    }, 8000);
  };

  const handleServicesNext = () => {
    handleServicesSlideChange((servicesCurrentSlide + 1) % services.length);
  };

  const handleServicesPrev = () => {
    handleServicesSlideChange((servicesCurrentSlide - 1 + services.length) % services.length);
  };

  // Certificates carousel handlers
  const handleCertificatesNext = () => {
    setCertificatesCurrentSlide((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const handleCertificatesPrev = () => {
    setCertificatesCurrentSlide((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const handleCertificatesSlideChange = (newSlide) => {
    setIsCertificatesAutoPlaying(false);
    setCertificatesCurrentSlide(newSlide);

    setTimeout(() => {
      setIsCertificatesAutoPlaying(true);
    }, 5000);
  };





  // Auto-slide effect
  useEffect(() => {
    if (!isServicesAutoPlaying) return;

    const slideTimer = setInterval(() => {
      setServicesCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000 * 4);

    return () => clearInterval(slideTimer);
  }, [isServicesAutoPlaying, services.length]);




  // for cert
  const certificates = [
    {
      num: 1,
      title: "BizSafe STAR",
      description: "BizSafe STAR Certification for workplace safety excellence"
    },
    {
      num: 2,
      title: "Cleaning",
      description: "Class 2"
    },
    {
      num: 3,
      title: "Vector Control",
      description: "Vector Control"
    },
    {
      num: 4,
      title: "ISO 9001 :2015",
      description: "QUALITY MANAGEMENT SYSTEMS certification"
    },
    {
      num: 5,
      title: "ISO 45001 :2018",
      description: "OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEMS certification"
    },
    {
      num: 6,
      title: "ISO 14001 :2015",
      description: "ENVIRONMENTAL MANAGEMENT SYSTEMS certification"
    }
  ];

  useEffect(() => {
    // Only auto-slide certificates on mobile screens
    const isMobile = window.innerWidth < 768;
    if (!isCertificatesAutoPlaying || !isMobile) return;

    const slideTimer = setInterval(() => {
      setCertificatesCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4000); // Slightly faster for certificates (4 seconds)

    return () => clearInterval(slideTimer);
  }, [isCertificatesAutoPlaying, certificates.length]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal with Escape key
  useState(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);



  // CertificateCard component (can be in a separate file or same file)
  const CertificateCard = ({ cert, openModal }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Certificate Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={`/img/cert/cert${cert.num}.jpg`}
          alt={`${cert.title} Certificate`}
          className="w-full h-full object-center transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
          <button
            onClick={() => openModal(cert)}
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300">
              <Eye className="w-6 h-6 text-gray-900" />
            </div>
          </button>
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {cert.title}
        </h3>
        <p className="text-sm text-gray-600">
          {cert.description}
        </p>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-gray-900/80">
        <div
          className="absolute inset-0 bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/img/sec/5.png')",  // ← Replace with your actual photo file
            backgroundSize: 'cover',
            backgroundPosition: 'center'

          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          {/* Main Heading with Gradient */}
          <h1 className="text-3xl md:text-6xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            The Future of Integrated Facility Management
          </h1>

          {/* Tagline with decorative elements */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

            <p
              className={`text-sm md:text-3xl font-light tracking-wide relative inline-block px-8 transition-transform duration-100 ${isVibrating ? 'animate-vibrate' : ''
                }`}
              style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.7)', fontSize: '2.5rem' }}
            >
              “Seamless Secure Sustainable”
            </p>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>

          {/* Description with enhanced styling */}
          {/* <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            <p className="text-base md:text-xl max-w-4xl mx-auto leading-relaxed bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl relative">
              <span className="font-semibold text-blue-200">Focus Integrated Healthcare (FIH)</span> redefines the built environment through a unified service model. We consolidate complex facility needs — from medical-grade hygiene to high-vigilance security — into a single, data-driven management platform. By synchronizing our core pillars, we allow you to focus on your primary mission while we ensure your infrastructure operates at peak performance.
            </p>
          </div> */}

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center mb-16">
            {/* Our Services Button */}
            <Link
              to="/services"
              className="group relative w-fit bg-gradient-to-r from-white to-green-50 text-green-700 hover:from-green-300 hover:to-green-800 hover:text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center whitespace-nowrap">
                Our Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* WhatsApp Button */}
            <a
              href="tel:+6597407333"
              className="group relative w-fit bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center whitespace-nowrap">
                <FaWhatsapp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                +65 8952-0327
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Optional: Decorative scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About us  */}
      <section
        className="relative py-20 bg-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/img/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[660px] flex items-start justify-center rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="/img/fihleft.png"
              alt="About FIH"
              className="rounded-2xl shadow-2xl w-full h-full object-contain object-top"
            />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 opacity-40 blur-lg -z-10"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 lg:p-12 rounded-2xl shadow-lg border border-white/20 max-w-2xl w-full">

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
              Focus Integrated Healthcare (FIH)
              <br />
              <span className="text-blue-400 text-xl lg:text-2xl font-semibold block mt-2">
                "Seamless Secure Sustainable"
              </span>
            </h3>

            <p className="text-blue-100 leading-relaxed text-justify mb-5">
              Focus Integrated Healthcare (FIH) redefines the built environment through a
              unified and intelligent service model. We simplify complex facility
              requirements ranging from medical grade hygiene to high-vigilance
              security by bringing everything together under a single, data-driven
              management platform.
            </p>

            <p className="text-blue-100 leading-relaxed text-justify mb-5">
              Our integrated approach ensures that all essential services work in
              harmony, eliminating inefficiencies and enhancing overall operational
              performance. By combining innovation, expertise, and technology, we
              create environments that are not only safe and compliant but also
              adaptable to future demands.
            </p>

            <p className="text-blue-100 leading-relaxed text-justify">
              Through the synchronization of our core pillars, we empower organizations
              to stay focused on their primary mission while we ensure their
              infrastructure runs seamlessly, efficiently, and at peak performance at
              all times.
            </p>

          </div>
        </div>
      </section>

      {/* SEO Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
            {/* Image Section */}
            {/* <div className="lg:h-full w-full">
        <div className="h-full w-full overflow-hidden rounded-2xl shadow-lg">
          <img 
            src='/img/background.png' 
            alt="FIH Services" 
            className='w-full h-full object-cover'
            style={{ minHeight: '400px' }}
          />
        </div>
      </div> */}

            {/* Content Section */}
            <div className="lg:h-full lg:w-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 h-full border border-gray-100">

                {/* Section Header */}
                <div className="text-center mb-10">
                  <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                    What We Offer
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Integrated Facility Management
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Service Cards Grid */}
                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {/* Landscape */}
                  <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100/50 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                          🌿
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Landscape Management</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {[
                          "Landscape Planting & Maintenance",
                          "Irrigation System & Soil Management",
                          // "Arboriculture & Landscape Consultancy",
                          // "Plant Supply, Rental & Vertical Gardens",
                          // "Pond Maintenance & Water Features"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Explore More Button */}
                    <Link
                      to="/services/landscaping"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-green-700 bg-white/60 hover:bg-green-500 hover:text-white rounded-xl border border-green-200 hover:border-green-500 transition-all duration-300 group/btn"
                    >
                      Explore More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Cleaning */}
                  <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                          🧹
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Cleaning Services</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {[
                          "Commercial & Healthcare Facilities Cleaning",
                          "External Facade & At-Height Cleaning & Restoration"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Explore More Button */}
                    <Link
                      to="/services/cleaning"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-blue-700 bg-white/60 hover:bg-blue-500 hover:text-white rounded-xl border border-blue-200 hover:border-blue-500 transition-all duration-300 group/btn"
                    >
                      Explore More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                 

                  {/* Pest Control */}
                  <div className="group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100/50 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                          🐜
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Pest Control</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {[
                          "General Pest Control Services",
                          "Integrated Termite Control & Treatment",
                          // "Fumigation: ISPM 15, PH3, BMSB",
                          // "Commodities / Vessel Fumigation",
                          // "Larvicide & Fogging Services",
                          // "Bird Control Measures"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Explore More Button */}
                    <Link
                      to="/services/pest-control"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-amber-700 bg-white/60 hover:bg-amber-500 hover:text-white rounded-xl border border-amber-200 hover:border-amber-500 transition-all duration-300 group/btn"
                    >
                      Explore More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Security */}
                  <div className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100/50 hover:border-red-300 hover:shadow-lg hover:shadow-red-100/50 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                          🛡️
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Security & Crowd Control</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {[
                          "Security Guardforce Provision",
                          "Access Control Management",
                          // "Risk Mitigation & Threat Prevention",
                          // "Safety Assurance & Best Practices",
                          // "Rapid Incident Response",
                          // "Trained Licensed Security Officers"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Explore More Button */}
                    <Link
                      to="/services/security-crowd-control"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-red-700 bg-white/60 hover:bg-red-500 hover:text-white rounded-xl border border-red-200 hover:border-red-500 transition-all duration-300 group/btn"
                    >
                      Explore More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Traffic */}
                  <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100/50 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                          🚦
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Traffic & Event Management</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {[
                          "Traffic Flow Control",
                          "Crowd Movement Management",
                          // "Escort & Outriders Services",
                          // "Event Traffic Planning",
                          // "Safety & Compliance & Best Practices",
                          // "Trained & Certified Personnel"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <span className="text-indigo-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Explore More Button */}
                    <Link
                      to="/services/traffic"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-indigo-700 bg-white/60 hover:bg-indigo-500 hover:text-white rounded-xl border border-indigo-200 hover:border-indigo-500 transition-all duration-300 group/btn"
                    >
                      Explore More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                   {/* FIH - Special Styling */}
                  <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100/50 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                          ✨
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">FIH Specialised</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {[
                          "Customised Cleaning Services",
                          "Specialised Cleaning (Upholstery & Carpet)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                            <span className="text-purple-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Explore More Button */}
                    {/* <Link
                      to="/services/cleaning"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-purple-700 bg-white/60 hover:bg-purple-500 hover:text-white rounded-xl border border-purple-200 hover:border-purple-500 transition-all duration-300 group/btn"
                    >
                      Explore More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link> */}
                  </div>

                </div>
              </div>
            </div>



          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated background elements */}


        {/* Subtle grid pattern */}


        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          {/* Decorative top line */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
          </div>

          {/* Main content card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-teal-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-8 leading-tight bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
              Our Commitment to Excellence
            </h3>

            {/* Main quote with elegant styling */}
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-2 text-6xl text-teal-400/20 font-serif">"</div>
              <p className="text-gray-200 leading-relaxed text-justify text-lg px-4 italic">
                We believe facilities are more than spaces — they are environments that
                safeguard people, enable productivity, and inspire trust. By integrating
                technology, expertise, and a people-first approach, we deliver solutions
                that go beyond maintenance to create long-term value for our stakeholders.
              </p>
              <div className="absolute -bottom-6 -right-2 text-6xl text-teal-400/20 font-serif">"</div>
            </div>

            {/* Separator */}
            <div className="flex justify-center my-8">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
            </div>

            {/* Second paragraph with subtle border */}
            <div className="border-l-4 border-teal-400 pl-6 mb-8">
              <p className="text-blue-100 leading-relaxed text-justify text-base">
                Our commitment is simple: to be a partner in resilience, innovation, and excellence.
              </p>
            </div>

            {/* Signature section */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="flex flex-col items-end">
                <div className="text-right">
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
                    — Dr. Matthew Yap, COO
                  </p>
                  <div className="h-px w-32 bg-gradient-to-r from-teal-400 to-transparent mt-2 ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Decorative bottom icon */}
            <div className="flex justify-center mt-8">
              <svg className="w-6 h-6 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>
          </div>
        </div>
      </section>



      {/* Services */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-blue-300 bg-clip-text text-transparent mb-2">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Delivering integrated solutions to meet every facility need
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${servicesCurrentSlide * 100}%)`
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ flex: "0 0 100%" }}
                  >
                    {/* Hero Style with Text Overlay */}
                    <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden group">
                      {/* Background Image Container with top padding */}
                      <div className="h-full w-full pt-8 md:pt-12"> {/* Add top padding */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <div className="max-w-4xl mx-auto">
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                            {service.title}
                          </h3>
                          <p className="text-lg md:text-xl mb-8 drop-shadow-md opacity-90 max-w-2xl">
                            {service.description}
                          </p>
                          <Link
                            to={service.link}
                            className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform"
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={handleServicesPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleServicesNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleServicesSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${servicesCurrentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section id="video-section" className="py-16 bg-gradient-to-br from-gray-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Our Videos</h2>
            <p className="text-gray-300">Watch our facilities management solutions in action</p>
          </div>

          {/* Simple HTML5 Video Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-black/30">
            {/* Video Slides */}
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
            >
              {/* Video Slide 1 */}
              <div className="w-full flex-shrink-0 p-4">
                <div className="relative">
                  {/* Playing Indicator */}
                  <div className={`absolute top-4 left-4 z-20 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center transition-opacity duration-300 ${currentVideoSlide === 0 ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Now Playing
                  </div>

                  <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video
                      ref={(el) => (videoRefs.current[0] = el)}
                      controls
                      preload="metadata"
                      className="w-full h-auto max-h-[500px]"
                      onPlay={() => {
                        setCurrentVideoSlide(0);
                        // Pause the other video if it's playing
                        if (videoRefs.current[1]) {
                          videoRefs.current[1].pause();
                          videoRefs.current[1].currentTime = 0;
                        }
                      }}
                      playsInline
                    >
                      <source src="/videos/fih1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Company Overview</h3>
                      <p className="text-gray-300">A comprehensive look at FIH's integrated facilities management</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Slide 2 */}
              <div className="w-full flex-shrink-0 p-4">
                <div className="relative">
                  {/* Playing Indicator */}
                  <div className={`absolute top-4 left-4 z-20 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center transition-opacity duration-300 ${currentVideoSlide === 1 ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Now Playing
                  </div>

                  <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video
                      ref={(el) => (videoRefs.current[1] = el)}
                      controls
                      preload="metadata"
                      className="w-full h-auto max-h-[500px]"
                      onPlay={() => {
                        setCurrentVideoSlide(1);
                        // Pause the other video if it's playing
                        if (videoRefs.current[0]) {
                          videoRefs.current[0].pause();
                          videoRefs.current[0].currentTime = 0;
                        }
                      }}
                      playsInline
                    >
                      <source src="/videos/fih2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Our Process in Action</h3>
                      <p className="text-gray-300">See how our teams deliver security, cleaning, and pest control services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Navigation Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={handleVideoPrev}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              <div className="flex space-x-2">
                <button
                  onClick={() => goToVideoSlide(0)}
                  className={`w-3 h-3 rounded-full transition-all ${currentVideoSlide === 0 ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                  aria-label="Go to video 1"
                />
                <button
                  onClick={() => goToVideoSlide(1)}
                  className={`w-3 h-3 rounded-full transition-all ${currentVideoSlide === 1 ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                  aria-label="Go to video 2"
                />
              </div>

              <button
                onClick={handleVideoNext}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>

          {/* Auto-play Notice */}
          {/* <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
            <p className="text-blue-300 text-sm text-center">
              <span className="font-semibold">Note:</span> First video auto-plays. Browser may require one click to enable sound.
            </p>
          </div> */}
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 to-blue-300 bg-clip-text text-transparent mb-4">
              Our Licensing Certifications & ISO Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence and compliance with international standards
            </p>
          </div>

          {/* Desktop Grid / Mobile Carousel */}
          <div className="relative">
            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <CertificateCard key={cert.num} cert={cert} openModal={openModal} />
              ))}
            </div>

            {/* Mobile Carousel (visible on mobile) */}
            <div className="md:hidden">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${certificatesCurrentSlide * 100}%)`
                  }}
                >
                  {certificates.map((cert, index) => (
                    <div
                      key={cert.num}
                      className="w-full flex-shrink-0 px-2"
                      style={{ flex: "0 0 100%" }}
                    >
                      <CertificateCard cert={cert} openModal={openModal} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-3">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCertificatesSlideChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${certificatesCurrentSlide === index
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                      }`}
                  ></button>
                ))}
              </div>

              {/* Mobile Navigation Arrows */}
              <button
                onClick={handleCertificatesPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
                disabled={certificatesCurrentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleCertificatesNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
                disabled={certificatesCurrentSlide === certificates.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup (unchanged) */}
      {isModalOpen && selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300"
          onClick={handleBackdropClick}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden animate-in fade-in-90 zoom-in-90 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {selectedCert.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
              <div className="flex justify-center">
                <img
                  src={`/img/cert/cert${selectedCert.num}.png`}
                  alt={`${selectedCert.title} Certificate`}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  Click outside or press ESC to close
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



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

export default Home;