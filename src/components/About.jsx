import aboutImg from '../assets/aboutRen.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div name="About" className="pt-1 container mx-auto px-8 border-b border-neutral-900 pb-4">
      <motion.h1 
        initial={{y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap items-center lg:justify-center">
        <motion.div 
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration: 0.5}}
            whileHover={{ scale: 1.1 }}
          className="w-full lg:w-2/4 lg:p-8">
          <div className="flex items-center justify-center">
            <img className='rounded-2xl' width={500} src={aboutImg} alt="about" />
          </div>
        </motion.div>

        {ABOUT_TEXT.map((about, index) => (
          <div className='flex flex-wrap lg:w-2/4 md:w-4/4 sm:w-screen text-sm items-center justify-center'>
                <motion.div 
                  initial={{x:100, opacity:0}}
                  whileInView={{x:0, opacity:1}} 
                  transition={{duration: 0.5}}
                  className='flex justify-center lg:justify-start'>
                <p className='my-1 max-w-xl py-2 text-justify'>{about.one}</p>
                </motion.div>
                <motion.div 
                  initial={{x:100, opacity:0}}
                  whileInView={{x:0, opacity:1}} 
                  transition={{duration: 0.5}}
                  className='flex justify-center lg:justify-start'>
                <p className='my-1 max-w-xl py-2 text-justify'>{about.two}</p>
                </motion.div>
                <motion.div 
                  initial={{x:100, opacity:0}}
                  whileInView={{x:0, opacity:1}} 
                  transition={{duration: 0.5}}
                  className='flex justify-center lg:justify-start'>
                <p className='my-1 max-w-xl py-2 text-justify'>{about.three}</p>
                </motion.div>
                <motion.div 
                  initial={{x:100, opacity:0}}
                  whileInView={{x:0, opacity:1}} 
                  transition={{duration: 0.5}}
                  className='flex justify-center lg:justify-start'>
                <p className='my-1 max-w-xl py-2 text-justify'>{about.four}</p>
                </motion.div>
                <motion.div 
                  initial={{x:100, opacity:0}}
                  whileInView={{x:0, opacity:1}} 
                  transition={{duration: 0.5}}
                  className='flex justify-center lg:justify-start'>
                <p className='my-1 max-w-xl py-2 text-justify'>{about.five}</p>
                </motion.div>
                <motion.div 
                  initial={{x:100, opacity:0}}
                  whileInView={{x:0, opacity:1}} 
                  transition={{duration: 0.5}}
                  className='flex justify-center lg:justify-start'>
                <p className='my-1 max-w-xl py-2 text-justify'>{about.six}</p>
                </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About