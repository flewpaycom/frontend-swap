import './App.css'
import Navbar from './components/navbar'
import SwapPage from './pages/swap'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


function App() {
  return (
    <>
      <Navbar />
      <main className='p-8 min-h-screen w-full bg-gradient-to-br from-white to-primary/20'>
        <div className="absolute top-0 left-0 h-full w-full -z-10">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#adadad_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <SwapPage />
      </main>
    </>
  )
}

export default App
