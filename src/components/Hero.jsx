import { HERO_CONTENT } from "../constants"
import profilePic   from "../assets/ren1x1new1.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay},
    },
})

const Hero = () => {
  return (
    <div name="Profile" className="container pt-12 mx-auto px-8 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        whileInView="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Reyniel Obut
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Web Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        whileInView="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img 
                        initial={{x:100, opacity:0}}
                        whileInView={{
                            x:0,
                            opacity:1,
                        }}
                        transition={{ duration: 1}}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500" 
                        width={400} 
                        src={profilePic} 
                        alt="Reyniel Obut" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero