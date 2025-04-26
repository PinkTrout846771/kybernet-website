import './App.css'
import Navbar from './Navbar.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <div className='bg-orange-500'>
        <div className='bg-red-800 w-fit m-60 p-10 rounded-2xl text-white '>1</div>
        <div className='bg-red-800 w-fit m-60 p-10 rounded-2xl text-white '>2</div>
        <div className='bg-red-800 w-fit m-60 p-10 rounded-2xl text-white '>3</div>
        <div className='bg-red-800 w-fit m-60 p-10 rounded-2xl text-white '>4</div>
        <div className='bg-red-800 w-fit m-60 p-10 rounded-2xl text-white '>5</div>
      </div>
    </>
  )
}

export default App
