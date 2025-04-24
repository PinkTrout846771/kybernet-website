import KyberNetLogo from './assets/KyberNetLogo(1).svg'

function Navbar() {

    return (
        <>
            <div className='h-20 flex content-center items-center justify-between font-mono'>
                <div className='ml-6 mt-4'>
                    <img src={KyberNetLogo} alt="KyberNet LLC" className='w-40 h-16 object-contain'></img>
                </div>
                <div className='bg-orange-50 px-5 py-3 rounded-2xl text-xl font-semibold'>
                    <ul className='flex space-x-6'>
                        <li>Team</li>
                        <li>Clients</li>
                        <li>About Us</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='mr-6 mt-4'>
                    <img src={KyberNetLogo} alt="KyberNet LLC" className='w-40 h-16 object-contain'></img>
                </div>
            </div>
        </>
    )
}
  
export default Navbar