import KyberNetLogo from './assets/KyberNetLogo(1).svg'

function Navbar() {

    return (
        <>
            <div className='fixed top-0 w-screen h-26 p-6 flex content-center items-center justify-between font-inter function'>
                <div className=''>
                    <img src={KyberNetLogo} alt="KyberNet LLC" className='w-40 h-16 object-contain'></img>
                </div>
                <div className='bg-orange-100 px-5 py-3 rounded-2xl'>
                    <ul className='flex space-x-6 text-lg font-normal text-gray-800'>
                        <li>Team</li>
                        <li>Clients</li>
                        <li>About Us</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='bg-blue-300 px-5 py-3 rounded-2xl'>
                    Contact
                </div>
            </div>
        </>
    )
}
  
export default Navbar