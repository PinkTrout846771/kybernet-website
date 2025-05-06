// AI GENERATED PAGE FROM CLAUDE USE FOOTER

import DummyImg from '../assets/dummy-img-kybernet.svg'
import { useState, useEffect } from 'react'

function CardContainer({ cards }) {
  const [frontCardIndex, setFrontCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        rotateCards();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [frontCardIndex, isAnimating]);
  
  const rotateCards = () => {
    setIsAnimating(true);
    setFrontCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Calculate positions for each card based on their position relative to the front card
  const getCardStyle = (index) => {
    if (index === frontCardIndex) {
      return "z-30 opacity-100 translate-x-0 translate-y-0 scale-100"; // Front card
    }
    
    // Calculate position for other cards
    const relativePosition = (index - frontCardIndex + cards.length) % cards.length;
    
    if (relativePosition === 1) {
      return "z-20 opacity-80 -translate-x-16 translate-y-8 scale-95"; // Middle card
    } else {
      return "z-10 opacity-60 translate-x-16 translate-y-8 scale-90"; // Back card
    }
  };

  return (
    <>
      {/* Mobile screens */}
      <div className="relative h-80 w-full max-w-xs mx-auto lg:hidden">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-blue-200 drop-shadow-xl rounded-2xl p-4 px-6 text-center antialiased transition-all duration-500 cursor-pointer hover:shadow-lg ${getCardStyle(index)}`}
            onClick={() => {
              if (!isAnimating && index !== frontCardIndex) {
                setIsAnimating(true);
                setFrontCardIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
          >
            <h1 className="font-semibold text-lg mb-4 text-gray-700">{card.title}</h1>
            <ul className="font-normal flex flex-col space-y-2 text-left text-gray-700 text-sm">
              {card.text.map((item, itemIndex) => (
                <li key={itemIndex} className="ml-5 list-disc">{item}</li>
              ))}
            </ul>
          </div>
        ))}
        
        {/* Card navigation dots */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === frontCardIndex ? 'bg-fuchsia-300 w-6' : 'bg-gray-300'}`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setFrontCardIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              aria-label={`View card ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Large screens */}
      <div className='hidden lg:block w-full'>
        <div className="flex justify-between w-full max-w-7xl gap-4 mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className='bg-blue-200 w-full max-w-xs h-auto drop-shadow-xl rounded-2xl p-4 px-6 text-center antialiased transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100'
            >
              <h1 className='font-semibold text-lg mb-6 text-gray-700'>{card.title}</h1>
              <ul className='font-normal flex flex-col space-y-4 text-left text-gray-700'>
                {card.text.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-5 list-disc">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function TeamPage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Animated text for hero section
  const [typedText, setTypedText] = useState('');
  const fullText = 'Protect Businesses.';
  
  useEffect(() => {
    // Typing animation
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  // Detect scroll position to show/hide scroll indicator and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Hide scroll indicator after scrolling
      if (scrollPosition > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
      
      // Update active section based on scroll position
      if (scrollPosition < 300) {
        setActiveSection('hero');
      } else if (scrollPosition < 600) {
        setActiveSection('strategy');
      } else {
        setActiveSection('services');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardsData = [
    {
      title: "Penetration Testing",
      text: [
        "Simulated cyberattacks to identify security weaknesses",
        "Comprehensive reports with remediation strategies",
        "Regular vulnerability scanning to prevent exploits"
      ]
    },
    {
      title: "Security Consulting",
      text: [
        "Custom security policies and procedures",
        "Risk assessment and mitigation strategies",
        "Compliance with industry regulations"
      ]
    },
    {
      title: "Incident Response",
      text: [
        "24/7 monitoring and threat detection",
        "Rapid response to security breaches",
        "Post-incident analysis and recovery"
      ]
    }
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-fuchsia-300 font-bold text-2xl">Kybernet</span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-gray-700 hover:text-fuchsia-300 transition-colors ${activeSection === 'hero' ? 'font-bold text-fuchsia-300' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('strategy')}
                className={`text-gray-700 hover:text-fuchsia-300 transition-colors ${activeSection === 'strategy' ? 'font-bold text-fuchsia-300' : ''}`}
              >
                Strategy
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-gray-700 hover:text-fuchsia-300 transition-colors ${activeSection === 'services' ? 'font-bold text-fuchsia-300' : ''}`}
              >
                Services
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-fuchsia-300 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`block px-3 py-2 w-full text-left rounded-md ${activeSection === 'hero' ? 'bg-fuchsia-50 text-fuchsia-300 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('strategy')}
                className={`block px-3 py-2 w-full text-left rounded-md ${activeSection === 'strategy' ? 'bg-fuchsia-50 text-fuchsia-300 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Strategy
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block px-3 py-2 w-full text-left rounded-md ${activeSection === 'services' ? 'bg-fuchsia-50 text-fuchsia-300 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Services
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className='flex flex-col justify-center w-full items-center space-y-12 md:space-y-20 pt-16'>
        {/* Hero Section */}
        <div id="hero" className='flex flex-col space-y-8 lg:flex-row w-full min-h-screen lg:min-h-0 lg:h-auto items-center max-w-7xl lg:items-start justify-center antialiased px-4 sm:px-6 lg:px-8 scroll-mt-16'>
          <div className='py-6 sm:py-12 space-y-6 w-full flex flex-col items-center justify-center lg:items-start lg:w-1/2 lg:py-16'>
            <div className="text-gray-700 font-bold tracking-widest text-4xl sm:text-5xl lg:text-6xl flex justify-center lg:justify-start w-full">
              <div className='inline-block w-full'>
                <span className='text-left'>Ensure Growth.</span>
                <br></br>
                <span className='text-fuchsia-300 inline-block relative'>
                  {typedText}
                  <span className='absolute right-0 top-0 h-full w-1 bg-fuchsia-300 animate-blink'></span>
                </span>
              </div>
            </div>
            <h2 className="text-gray-600 font-normal tracking-tight text-xl sm:text-2xl text-center lg:text-left">
              Providing Top-tier Consulting<br className="hidden sm:block"></br>Services in Cyber Security
            </h2>

            <button 
              onClick={() => scrollToSection('services')}
              className='px-8 sm:px-16 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bold text-gray-800 bg-blue-300 hover:bg-blue-400 hover:-translate-y-1 transition-all duration-300 animate-pulse hover:animate-none'
            >
              Learn More
            </button>
          </div>

          <div className='lg:w-1/2 w-full px-4 sm:px-10 mt-6 lg:mt-16 relative'>
            <img 
              src={DummyImg} 
              className='shadow-black drop-shadow-2xl rounded-lg w-full max-w-md mx-auto transform transition-all duration-700 hover:scale-105 hover:rotate-1'
              alt="Cybersecurity illustration" 
            />
            
            {/* Floating security icons */}
            <div className="absolute top-1/4 left-1/4 bg-white p-2 rounded-full shadow-lg animate-bounce-slow hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="absolute bottom-1/4 right-1/4 bg-white p-2 rounded-full shadow-lg animate-pulse hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('strategy')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>

        {/* Strategy Section */}
        <div id="strategy" className='flex justify-center p-6 sm:p-10 lg:p-16 w-full scroll-mt-16 relative'>
          <h1 className="text-gray-700 font-bold tracking-widest text-3xl sm:text-4xl lg:text-6xl leading-tight text-center transform transition-all duration-700 hover:scale-105">
            Strategized <span className='text-fuchsia-300'>High<br className="sm:block"></br>Level</span> Security
          </h1>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-300 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-fuchsia-300 rounded-full filter blur-3xl"></div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className='px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24 lg:pb-32 w-full scroll-mt-16'>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center mb-8">Our Services</h2>
          <CardContainer cards={cardsData} />
        </div>
        
        {/* Contact CTA */}
        <div className="w-full bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Ready to secure your business?</h2>
            <button className="px-8 py-3 bg-fuchsia-300 text-white font-bold rounded-2xl hover:bg-fuchsia-400 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="w-full bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-fuchsia-300 font-bold text-2xl">Kybernet</span>
                <p className="text-gray-400 mt-2">Securing businesses since 2023</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
              © 2025 Kybernet. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      
      {/* Add custom keyframes and animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </>
  );
}