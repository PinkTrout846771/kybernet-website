import DummyImg from '../assets/dummy-img-kybernet.svg'
import WomenOwnedLogo from '../assets/women-owned-logo-vector.svg'
import { useState } from 'react'

/*<h1 className="text-fuchsia-300 font-bold tracking-widest text-6xl mb-16 w-1/6">Protect Businesses.</h1>*/

function CardContainer({ cards }) {
  const [frontCardIndex, setFrontCardIndex] = useState(0);
  
  // Calculate positions for each card based on their position relative to the front card
  const getCardStyle = (index) => {
    if (index === frontCardIndex) {
      return "z-30 opacity-100 translate-x-0 translate-y-0"; // Front card
    }
    
    // Calculate position for other cards
    // If there are 3 cards, one is in front, one in middle, one in back
    const relativePosition = (index - frontCardIndex + cards.length) % cards.length;
    
    if (relativePosition === 1) {
      return "z-20 opacity-80 -translate-x-16 translate-y-8 hover:-rotate-12"; // Middle card
    } else {
      return "z-10 opacity-60 translate-x-16 translate-y-8 hover:rotate-12"; // Back card
    }
  };

  return (
    <>
      {/* mobile screens */}

      <div className="relative h-96 w-96 lg:hidden">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-blue-200 hover:-translate-y-12 hover:duration-200 drop-shadow-xl rounded-2xl p-4 px-12 text-center antialiased transition-all duration-300 cursor-pointer ${getCardStyle(index)}`}
            onClick={() => setFrontCardIndex(index)}
          >
            <h1 className="font-semibold text-lg mb-6 text-gray-700">{card.title}</h1>
            <ul className="font-normal flex flex-col justify-evenly h-64 list-disc text-left text-gray-700">
              {card.text.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* large screens */}

      <div className='hidden lg:flex grow w-screen justify-center'>
        <div className="flex justify-between w-[95%] max-w-7xl">
          {cards.map((card, index) => (
            <div key={index} className='bg-blue-200 w-80 h-80 drop-shadow-xl rounded-2xl p-4 px-12 text-center antialiased'>
              <h1 className='font-semibold text-lg mb-6 text-gray-700'>{card.title}</h1>
              <ul className='font-normal flex flex-col justify-evenly h-64 list-disc text-left text-gray-700'>
                {card.text.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default function HomePage() {

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

    return (
      <>
        <div className="flex flex-col w-full">
          {/*hero section*/}
          <div className="flex flex-col lg:flex-row w-full">
            {/*left half*/}
            <div className="w-full p-6 md:p-12 lg:p-18">
              {/*container for the 3 elements*/}
              <div className="flex flex-col space-y-12 justify-center items-start tracking-widest">
                <div className="text-6xl text-gray-700 font-semibold">
                  <span className="text-left">Ensure Growth.</span>
                  <br></br>
                  <span className="text-fuchsia-300">
                    Protect Your<br></br>Business.
                  </span>
                </div>

                <h2 className="text-gray-600 font-normal tracking-tight text-2xl">
                  Providing Top-tier Consulting<br></br>Services in Cyber
                  Security
                </h2>

                <button className="px-16 py-4 rounded-2xl text-lg font-bold text-gray-800 bg-linear-to-l from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 hover:-translate-y-1 hover:duration-300 duration-300">
                  Learn More
                </button>
              </div>
            </div>
            {/*right half*/}
            <div className="w-full p-6 flex justify-center items-center lg:justify-start">
              <img
                src={DummyImg}
                className="shadow-black drop-shadow-2xl rounded-4xl lg:scale-[80%] lg:mt-24"
              />
            </div>
          </div>

          {/*cards section title*/}
          <div className="w-full p-6 md:mb-18 text-6xl font-semibold text-gray-700 wrap-break-word text-center tracking-wide bg-radial from-blue-50 to-amber-50 from-0% to-50%">
            <span className="text-left">Strategized </span>
            <span className="text-fuchsia-300">High Level </span>
            <span className="text-left">Security</span>
          </div>

          {/*cards section cards*/}
          <div className="p-6 mb-12 md:mb-28 scale-75 sm:scale-100 flex justify-center">
            <CardContainer cards={cardsData} />
          </div>

          {/*logos section*/}
          <div className='p-6 h-[700px] md:h-[350px] flex flex-col md:flex-row justify-evenly bg-fuchsia-200 mb-20 select-none'>
            <img src={WomenOwnedLogo} className='bg-white size-46 px-4 rounded-full self-end'></img>
            <img src={WomenOwnedLogo} className='bg-white size-46 px-4 rounded-full'></img>
            <img src={WomenOwnedLogo} className='bg-white size-46 px-4 rounded-full self-center'></img>
          </div>

          {/* Contact CTA */}
          <div className="w-full bg-gray-100 py-12 mb-18">
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
      </>
    );
}