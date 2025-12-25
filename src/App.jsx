import React from 'react'
import Hero from './components/Hero'
const App = () => {
  return (
    <div className=' h-fit w-full bg-black'>
        <div className="res  h-[10vh] bg-black py-3 justify-between flex items-center md:hidden  sticky top-0 z-999 px-3 ">
              <img src="logo new.png" className='h-[96%]' alt="" />
              <h5 className='text-white font-serif text-xl font-extralight'>Krishan Brar</h5>
               <p className='text-[0.7rem] text-gray-300 border  py-1 px-2 rounded-3xl '>Video Editor</p>
            </div>
      <Hero/>
    </div>
  )
}

export default App