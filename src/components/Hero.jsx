import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import Work from './Work';
const Hero = () => {
  return (
    <div className='h-screen overflow-scroll w-full text-2xl text-white  flex md:flex-row flex-col '>
        <div className="lside md:w-[50%]  p-3 w-full flex justify-center lg:py-15 px-5 md:px-3 md:py-2">

           <div className="wrap md:w-full md:h-full lg:w-[90%] w-full h-full">
             <img src="logo new.png" alt="" className='h-[80%] md:h-1/6 hidden md:flex ' />
            <h1 className='font-extrabold font-mono text-3xl top-20'>Krishan Brar</h1>
            <div className="title py-2">
            <p className='text-[15px] bg-white  text-black font-bold  px-2   w-fit  rounded-4xl'>Video Editor</p>
            </div>

            <p className='text-sm text-gray-500'>Motion Graphics, Map Animation , Short Form </p>
           <div className="text flex justify-between w-full">
             <div className="location py-3 text-sm w-fit ">
                <a href="" className='flex items-center gap-2'><FaLocationDot />
                <p>India</p></a>
            </div>
            <div className="location py-3 text-sm w-fit ">
                <a href="" className='flex items-center gap-2'><GoTasklist />
                <p>Availiable For Work</p></a>
            </div>
              </div>


              {/* skills */}
           <div className="skills text-lg">
            <h3 className='text-sm text-gray-300 py-2'>Video Editing Skills</h3><hr />
            <div className="button w-full flex gap-1 md:py-2 py-2">
                <button className='rounded-md text-sm p-1 ani bg-gray-900'>Map Animation</button>
                <button className='rounded-md text-sm p-1 ani bg-gray-900'>Documentry</button>
            </div>
           </div>  
                    {/* speak */}
           <div className="speak text-lg">
            <h3 className='text-sm text-gray-300 py-2'>Communation</h3><hr />
            <div className="button w-full flex gap-6  md:py-3 py-2">
                <button className='rounded-md text-sm p-1 ani bg-gray-900'>Basic English</button>
                <button className='rounded-md text-sm p-1 ani bg-gray-900'>Hindi</button>
            </div>
           </div>
                    {/* contact*/}
          <div className="speak text-lg">
            <h3 className='text-sm text-gray-300 py-2'>Connect me thorugh</h3><hr />
            <div className="button w-full flex gap-1  md:py-4 py-2 flex-col">
                <div className="py-2 icons flex gap-2 text-2xl">
                <a href="https://www.instagram.com/krishan_kumar_brar?igsh=MXh3ODlqY25qbm1maQ=="><FaInstagram /></a>
                
                <a href="https://www.linkedin.com/in/krishan-brar-71a852307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin /></a>
                </div> <hr />
            <h1 className='mail text-gray-500 text-[16px]'>@krishanbrarkumar2005@gmail.com</h1>
            </div>
           </div>
           </div>
        </div>
        <div className="rside h-fit w-full py-5">
            <Work/>
        </div>
    </div>
  )
}

export default Hero