import React, { useEffect, useRef, useState } from "react";
import Skyline1 from "../../images/Homepage/Skyline 1.png";
import Skyline3 from "../../images/Homepage/Skyline 3.png";
import { gsap } from "gsap";
import Chakra from "../../images/Homepage/chakra.png";
import BackgroundI from "../../images/Homepage/window_webcopy.png";
import styles from "../../css/Homepage3.module.css";
import useScrolldirection from "../../hooks/useScrolldirection";
import style from "../../css/Homepage1.module.css";
import FourthSlide from "./FourthSlide";
function ThirdSlide() {
<<<<<<< HEAD
    const {scrollDirection,scrollPos}=useScrolldirection();
    useEffect(() => {
        window.addEventListener('scroll',(event)=>{
            if(scrollDirection==='down'){
                document.getElementById('fourthslide').scrollIntoView();
            }
        })
    },[scrollDirection])
  useEffect(()=>{
    gsap.from('.chakra',{
       x:550,
       y:500,
       duration:3,
       rotation:120,
    })
    gsap.from('.Para',{
        opacity:0,
        x:-100,
        yoyo: true,
        duration : 2
    })
    gsap.from('.skyline3',{
        y: 100,
        duration : 2
    })
    gsap.from('.skyline1',{
        opacity:0,
        y: 200,
        duration : 3
    })
    gsap.from('.Back',{
        backgroundImage:BackgroundI ,
        duration:3,

    })
    gsap.to('Guha',{
        opacity:0,
        duration :3,
    })
  },[])
  return (
    <div className={`Back relative flex justify-center h-screen w-screen ${styles.bgit}`}>
        {/* <div className='Guha absolute z-[1000] h-screen'>
        <img className='Guha2' src={BackgroundI} style={{width:'100vw',height:'100vh'}}></img>
        </div> */}
        <div className="Para absolute w-2/3 mx-auto top-[15vh]">
            <h1 className='font-heading text-white text-2xl'>Heading</h1>
            <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='bottom-0 skyline3 absolute overflow-hidden' >
            <img src={Skyline3} className=' w-screen' alt='img'></img>
        </div>
        <div className='skyline1 absolute bottom-0 overflow-hidden' >
            <img src={Skyline1} className='w-screen' alt='img'></img>
        </div>
        <div className='chakra absolute w-[120px] left-16 top-20'>
            <img src={Chakra} alt='absolute'/>
=======
  const { scrollDirection, scrollPos } = useScrolldirection();
  const [dispf, setdispf] = useState(false);
  const thirdslide = useRef();
  useEffect(() => {
    gsap.from(".chakra", {
      x: 550,
      y: 500,
      duration: 3,
      rotation: 120,
    });
    gsap.from(".Para", {
      opacity: 0,
      x: -100,
      yoyo: true,
      duration: 1,
    });
    gsap.from(".skyline3", {
      y: 100,
      duration: 2,
    });
    gsap.from(".skyline1", {
      opacity: 0,
      y: 200,
      duration: 3,
    });
    gsap.from(".Back", {
      backgroundImage: BackgroundI,
      duration: 3,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      // window.location.href = "/fourth";
      if(event.keyCode ===34||event.key==='ArrowDown'||event.key==='PageDown'){
        setdispf(true);
      }
    });
  });
  return (
    <div id="thirdslide">
      {dispf ? (
        <FourthSlide/>
      ) : (
        <div
          className={`Back relative flex justify-center h-screen w-screen ${styles.bgit}`}
        >
          <div className="z-[100000] Para absolute w-2/3 mx-auto top-[15vh]">
            <h1 className="font-heading text-white text-4xl z-[10000]">
              Heading
            </h1>
            <br />
            <p className="text-white text-lg z-[10000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="bottom-0 skyline3 absolute overflow-hidden">
            <img src={Skyline3} className=" w-screen" alt="img"></img>
          </div>
          <div className="skyline1 absolute bottom-0 overflow-hidden">
            <img src={Skyline1} className="w-screen" alt="img"></img>
          </div>
          <div className="chakra absolute left-16 top-20">
            <img src={Chakra} alt="absolute" className={`${style.chakra}`} />
          </div>
>>>>>>> c2684c21840d2e260ffa97078687f2c78fc59372
        </div>
      )}
    </div>
  );
}

export default ThirdSlide;