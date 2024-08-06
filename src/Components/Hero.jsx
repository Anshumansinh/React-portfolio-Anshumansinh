import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/Pic.png";
import { delay, motion } from "framer-motion"

const container =(delay) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay:delay},
    }
})

const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-3xl font-thin tracking-tight lg:ml-14 lg:text-6xl">Anshumansinh Kumpavat</motion.h1>
              <motion.span
               variants={container(0.5)}
               initial="hidden"
               animate="visible"
                className="bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent lg:ml-14 lg:text-4xl">Software Engineer</motion.span>
              <motion.p
               variants={container(1)}
               initial="hidden"
               animate="visible"
                className="my-2 mx-14 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity: 1}}
            transition={{duration:1 ,delay:1.2}}
            className=" lg:ml-10 mx-4 w-80 h-90" src={profilepic} alt="profilepic" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;