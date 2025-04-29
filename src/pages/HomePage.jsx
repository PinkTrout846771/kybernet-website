import DummyImg from '../assets/dummy-img-kybernet.svg'

export default function HomePage() {

    return (
      <>
        <div className='flex justify-row align-middle'>
          <div className='overflow-hidden h-screen px-28 py-18 antialiased'>
            <h1 className="text-gray-700 font-bold tracking-widest text-6xl mb-2">Ensure Growth.</h1>
            <h1 className="text-fuchsia-300 font-bold tracking-widest text-6xl mb-16 w-1/6">Protect Businesses.</h1>
            <h2 className="text-gray-600 font-normal tracking-tight text-2xl line-clamp-2 w-1/2 mb-16">Providing Top-tier Consulting Services in Cyber Security</h2>

            <button className='px-16 py-4 rounded-2xl text-lg font-bold text-black bg-radial bg-linear-to-l from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 hover:-translate-y-2 hover:duration-500 duration-500'>
              Learn More
            </button>
          </div>
          <div className='flex items-center'>
            <img src={DummyImg} className='shadow-black drop-shadow-2xl rounded-4xl' />
          </div>
        </div>
      </>
    )
}