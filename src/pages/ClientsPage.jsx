import DummyImg from '../assets/dummy-img-kybernet.svg'

export default function ClientsPage() {
    return (
      <>
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
                Providing Top-tier Consulting<br></br>Services in Cyber Security
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

        <div className="bg-red-500 w-full">
          <h1 className="text-6xl text-gray-700 font-semibold tracking-widest bg-radial from-blue-50 to-amber-50 from-0% to-80%">
            Strategized
            <span className="text-fuchsia-300">
              High<br></br>Level
            </span>
            Security
          </h1>
        </div>

        <div className="bg-blue-500 w-full p-6 text-6xl font-semibold text-gray-700 wrap-break-word">
            <span className="text-left">Strategized </span>
            <span className="text-fuchsia-300">High Level </span>
            <span className="text-left">Security</span>
        </div>

        <div className='bg-orange-500 w-full'>
            4
        </div>
      </>
    );
}