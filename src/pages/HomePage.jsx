import DummyImg from '../assets/dummy-img-kybernet.svg'

/*<h1 className="text-fuchsia-300 font-bold tracking-widest text-6xl mb-16 w-1/6">Protect Businesses.</h1>*/

export default function HomePage() {

    return (
      <>
        <div className='flex flex-col space-y-0 lg:flex-row align-middle w-screen min-h-[calc(100vh-96px)] items-center max-w-[1980px] lg:items-start justify-center antialiased lg:mt-6 overflow-hidden'>
          <div className='py-32 space-y-22 w-screen flex flex-col items-center justify-center -mt-12 lg:items-start lg:w-1/2 lg:px-28 lg:py-18'>
            <div className="text-gray-700 font-bold tracking-widest lg:text-6xl text-6xl flex justify-center">
              <div className='inline-block w-[90%] sm:w-[100%] '>
                <span className='text-left'>Ensure Growth.</span>
                <br></br>
                <span className='text-fuchsia-300'>Protect<br></br>Businesses.</span>
              </div>
            </div>
            <h2 className="text-gray-600 font-normal tracking-tight text-2xl">Providing Top-tier Consulting<br></br>Services in Cyber Security</h2>

            <button className='px-16 py-4 rounded-2xl text-lg font-bold text-gray-800 bg-linear-to-l from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 hover:-translate-y-2 hover:duration-500 duration-500'>
              Learn More
            </button>
          </div>

          <div className='lg:w-1/2 px-10 lg:mt-64 lg:px-16'>
            <img src={DummyImg} className='shadow-black drop-shadow-2xl rounded-4xl left-0' />
          </div>
        </div>

        <div className='flex justify-center p-16'>
          <h1 className="text-gray-700 font-bold tracking-widest text-6xl leading-18 text-center bg-radial from-blue-50 to-amber-50 from-0% to-80%">Strategized <span className='text-fuchsia-300'>High<br></br>Level</span> Security</h1>
        </div>
      </>
    )
}