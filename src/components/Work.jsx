import { useRef} from "react"

const Work = () => {
const vRef = useRef(null);

 const playVideo = (e) => {
  e.currentTarget.play();
};

const pauseVideo = (e) => {
  e.currentTarget.pause();
  e.currentTarget.currentTime = 0;
};


  return (
    <div className='flex flex-col  p-2 overflow-scroll items-center h-full w-full '>
            <h1 className='md:p-2 p-0'>Recent Work</h1>
            <div className="Title"><hr className='w-full md:flex hidden'/>
        </div> 
        <div className='collection md:w-[70%]  p-4 '>
            {/* top */}
        <div className="top flex flex-col items-center gap-4 h-fit ">
            <h1 className=' hover md:py-5 text-left w-full p-4'>Featured</h1>
            <div className="video h-full w-full  py-5 rounded-3xl flex flex-col  gap-7 items-center ">
            <button className='text-gray-400 text-[20px]  p-1 px-3 rounded-3xl font-bold hover:scale-110 hover:text-white'>
            High Impact edit <br className="md:hidden"/>45M+ views </button>
           <div className="wrap">
             <video src="1.mp4" ref={vRef} className='rounded-3xl w-full h-[60vh]'   onMouseEnter={playVideo} onMouseLeave={pauseVideo} ></video>
           </div>
            </div>
        </div>


  <div className="top flex flex-col items-center h-fit">
            <div className="video h-full w-full  py-5 rounded-3xl flex m flex-col  gap-7 items-center">
            <button className='text-gray-400 font-bold  hover:scale-110 hover:text-white px-6 text-[20px]'>
            Inspired BY <br  className="md:hidden  flex"/> @Geoallday </button>

           <div className="wrap ">
             <video src="2.mp4"  ref={vRef} className=' rounded-3xl w-full h-[60vh]'  onMouseEnter={playVideo}
                     onMouseLeave={pauseVideo}  ></video>
           </div>
            </div>
      {/* tools */}
        <div className="heading">
      <h1 className='font-extrabold md:text-3xl p-5'>Map Animation</h1>
    </div>
    <div className="map md:w-[55vw] p-5 gap-8 justify-center md:h-[80vh]  w-full flex ">
    <div className="lv w-fit rounded-2xl overflow-hidden ">
      <video src="5.mp4" className='w-fit h-full '  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
      </div>
    <div className="rv w-fit rounded-2xl overflow-hidden">
    <video src="4.mp4" ref={vRef}  className='w-fit h-full'  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
    </div>
    </div>


     <div className="heading">
      <h1 className='font-extrabold md:text-3xl p-5'>Motion Graphics</h1>

      {/* tools */}
    </div>
    <div className="map md:w-[55vw] p-5 gap-8 justify-center md:h-[80vh]  w-full flex ">
    <div className="lv w-fit rounded-2xl overflow-hidden">
      <video src="par.mp4" ref={vRef}  className='w-fit h-full '  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
      </div>
    <div className="rv w-fit rounded-2xl overflow-hidden">
    <video ref={vRef}  src="Uttarakhand’s Government spent 1000 crore on the Government Ad Campaign!{Uttarakhand ads, Uttara.mp4" className='w-fit h-full'  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
    </div>
    </div>



    <div className="heading">
      <h1 className='font-extrabold md:text-3xl p-5'>3D Edits</h1>

      {/* tools */}
    </div>
    <div className="map md:w-[55vw] p-5 gap-8 justify-center md:h-[80vh]  w-full flex  ">
    <div className="lv w-fit rounded-2xl overflow-hidden ">
      <video ref={vRef}  src="public\If Trains Get Power From Wires, Why Generator Cars Are Used{Indian Railways, HOG system, EOG gen.mp4" className='w-fit h-full '  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
      </div>
    <div className="rv w-fit rounded-2xl overflow-hidden">
    <video ref={vRef}  src="public\Why is North India facing so many Floods 😱🌨You’ve heard the phrase “cloudburst” or “badal fat .mp4" className='w-fit h-full'  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
    </div>
    </div>





<div className="heading">
      <h1 className='font-extrabold md:text-3xl p-5'>Folk Dance Edits</h1>

      {/* tools */}
    </div>
    <div className="map md:w-[55vw] p-5 gap-8 justify-center md:h-[80vh]  w-full flex ">
    <div className="lv w-fit rounded-2xl overflow-hidden">
      <video ref={vRef}  src="public\Folk Dances performed in Haryana💃💃 Bhiwani & Hisar- Phag Dance – Kisan apni fasal ki khushi me.mp4" className='w-fit h-full ' onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
      </div>
    <div className="rv w-fit rounded-2xl overflow-hidden">
    <video  ref={vRef}  src="public\Folk Dances Performed in Punjab 💃Punjab ke har region ka apna ek unique folk dance hota hai Lud.mp4" className='w-fit h-full' onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
    </div>
    </div>



<div className="heading">
      <h1 className='font-extrabold md:text-3xl p-5'>Folk Music Edits</h1>

      {/* tools */}
    </div>
    <div className="map md:w-[55vw] p-5 gap-8 justify-center md:h-[80vh]  w-full flex ">
    <div className="lv w-fit rounded-2xl overflow-hidden">
      <video  ref={vRef}  src="public\Punjabi Folk Music  Modern RapPunjabi music is not just beats and party songs 🎶  it has a deep .mp4" className='w-fit h-full '  onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
      </div>
    <div className="rv w-fit rounded-2xl overflow-hidden">
    <video ref={vRef}  src="public\The Real Folk Music of Himachal Pradesh 😲Himachal Pradesh sirf Shiv Kailasho ki Vasi tak seemit.mp4" className='w-fit h-full' onMouseEnter={playVideo}
  onMouseLeave={pauseVideo} ></video>
    </div>
    </div>



<div className="Editing py-10 w-full  min-h-[10vh] h-fit flex flex-col items-center ">
  <h1 className='font-extrabold text-4xl py-5'>Editing Tools</h1>
  <div className="icons md:flex flex-wrap justify-center  items-center  md:gap-5 h-auto  ">
   <div className="box md:h-[10vh] 
    h-[6vh]
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:drop-shadow-[0_0_12px_rgba(0,140,255,0.8)]  min-w-1/2 text-white px-2 py-1 flex gap-3 nowrap rounded-3xl text-sm  ">
     <img src="pr.png" className='md:h-[50%] md:w-[20%] h-[80%] ' alt="" />
    <h2 className='w-full'>Adobe After Effects </h2>
   </div>

    <div className="box md:h-[10vh] 
    h-[6vh]
     text-white
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:drop-shadow-[0_0_12px_rgba(0,140,255,0.8)] min-w-1/2  px-2 py-1 flex gap-3 nowrap rounded-3xl text-sm  ">
     <img src="Ae.png" alt="" className='md:h-[50%] md:w-[20%] h-[80%] ' />
    <h2 className='w-full'>Adobe Premiere pro </h2>
   </div>

    <div className="box 
    md:h-[10vh] 
    h-[6vh]
      text-white
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:drop-shadow-[0_0_12px_rgba(0,140,255,0.8)] min-w-fit px-2 py-1 flex gap-3 nowrap rounded-3xl text-sm  ">
     <img src="ps.png" alt="" className='md:h-[50%] md:w-[20%] h-[80%] '/>
    <h2 className='w-full'>Adobe photoshop</h2>
   </div>
  </div>
</div>

<div className="contact w-full h-[50vh]  ">
 <div className=" w-full md:h-[50vh] h-[15vh] flex md:items-center items-start relative ">
  <img src="logo new.png" alt="" className='md:h-[15vh] h-15 px-2 '/>
  <h1 className='md:text-5xl text-3xl font-extrabold'>
     Lets'Work</h1>
     <h1 className='absolute md:bottom-18  top-10   left-17 md:text-5xl  text-3xl font-extrabold '>Together</h1>
 </div>
 <div className='w-full relative  h-[10vh] '>
 <hr className="w-full"/>
 <a href="https://www.instagram.com/krishan_kumar_brar?igsh=MXh3ODlqY25qbm1maQ==">
 <button className='border border-gray-300 ani  rounded-full left-[70%] bottom-13 lg:py-7 lg:w-[9vw] py-6 px-7 bg-black text-md text-white'>
  Get in  <br className="lg:hidden flex"/>Touch
 </button>
 </a>
 </div>
<div className="info w-full flex gap-2">
<button className='border ani text-sm p-3 w-[60%] rounded-full text-gray-300'>
  <marquee behavior="scroll" direction="left">
  @Krishanbrarkumar2005@gmail.com

  </marquee>
 </button>
 <a href="https://www.linkedin.com/in/krishan-brar-71a852307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
 <button className='border ani text-sm p-3 rounded-full text-gray'>
  Linkdin
 </button>
 </a>

</div>
 
 <footer className='flex justify-between min-h-[20vh] py-10'>
  <div className="me flex flex-col justify-center items-center gap-3">
    <p className='text-sm text-gray-500 '>Developed By</p>
    <button className='md:text-[17px] text-sm font-light ani rounded-full border border-gray-400 py-1 px-3'>Vikas Naira</button>
  </div>
  <div className="links flex  flex-col py-5">
    <p className='text-gray-500 text-sm'>Socials</p>
  <div className="my flex gap-3">
    <a href="https://www.instagram.com/vikas_naira?igsh=NjN2am5sZTZ3ZzVh">
    <button className='text-sm underline text-gray-400'>Instagram</button>
    </a>
    <a href="https://www.linkedin.com/in/vikas-naira-06229131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
    <button className='text-sm underline p-2 text-gray-400'>Linkdin</button>
    </a>
    <button className='text-sm underline text-gray-400' >Mail</button>

  </div>
  </div>
 </footer>
</div>

        </div>
        </div>
    </div>
  )
}

export default Work