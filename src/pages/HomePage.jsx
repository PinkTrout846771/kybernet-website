import DummyImg from '../assets/dummy-img-kybernet.svg'
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

          <div className="w-full p-6 text-6xl font-semibold text-gray-700 wrap-break-word text-center tracking-wide bg-radial from-blue-50 to-amber-50 from-0% to-80%">
            <span className="text-left">Strategized </span>
            <span className="text-fuchsia-300">High Level </span>
            <span className="text-left">Security</span>
          </div>

          <div className="p-6 pb-8 scale-75 sm:scale-100 flex justify-center">
            <CardContainer cards={cardsData} />
          </div>
          <div className='p-6'>
            4
          </div>
        </div>
      </>
    );
}