import { EXPERIENCES, EXPERIENCES2, EXPERIENCES3 } from "../constants"
import { animate, delay, motion } from "framer-motion"

const container = () => ({
    hidden: {x:-100, opacity:0},
    visible:{
        x:0, 
        opacity:1,
        transition: {duration: 0.5, delay: 0.2}
    },
})

const Experience = () => {
  return (
    <div name="Experience" className="container pt-1 border-b border-neutral-900 mx-auto px-8 pb-4">
        <motion.h1 
            initial={{y:-100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Experience</motion.h1>
        <div>
            {EXPERIENCES3.map((experience2, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        variants={container()}
                        initial="hidden"
                        whileInView="visible"
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-md text-neutral-400">{experience2.year}</p>
                    </motion.div>
                    <motion.div 
                        variants={container()}
                        initial={{x:100, opacity:0}}
                        whileInView="visible"
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience2.role}
                        </h6>

                            {experience2.description.map((desc1, index)=> (
                                <li key={index} className="mb-1 ml-4 w-full text-neutral-400 text-justify">
                                    {desc1}
                                </li>
                            ))}


                        {experience2.technologies.map((technology, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        
            {EXPERIENCES2.map((experience2, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        variants={container()}
                        initial="hidden"
                        whileInView="visible"
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-md text-neutral-400">{experience2.year}</p>
                    </motion.div>
                    <motion.div 
                        variants={container()}
                        initial={{x:100, opacity:0}}
                        whileInView="visible"
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience2.role} - <span className="text-md text-purple-100">{experience2.company}</span>
                        </h6>

                            <h4 key={index} className="mb-2 ml-4 mt-4 font-semibold">
                                {experience2.task1}
                            </h4>
                            {experience2.description1.map((desc1, index)=> (
                                <li key={index} className="mb-1 ml-6 w-full text-neutral-400 text-justify">
                                    {desc1}
                                </li>
                            ))}

                            <h4 key={index} className="mb-2 ml-4 mt-4 font-semibold">
                                {experience2.task2}
                            </h4>
                            {experience2.description2.map((desc1, index)=> (
                                <li key={index} className="mb-1 ml-6 w-full text-neutral-400 text-justify">
                                    {desc1}
                                </li>
                            ))}

                            <h4 key={index} className="mb-2 ml-4 mt-4 font-semibold">
                                {experience2.task3}
                            </h4>
                            {experience2.description3.map((desc1, index)=> (
                                <li key={index} className="mb-1 ml-6 w-full text-neutral-400 text-justify">
                                    {desc1}
                                </li>
                            ))}

                            <h4 key={index} className="mb-2 ml-4 mt-4 font-semibold">
                                {experience2.task4}
                            </h4>
                            {experience2.description4.map((desc1, index)=> (
                                <li key={index} className="mb-1 ml-6 w-full text-neutral-400 text-justify">
                                    {desc1}
                                </li>
                            ))}

                            <h4 key={index} className="mb-2 ml-4 mt-4 font-semibold">
                                {experience2.task5}
                            </h4>
                            {experience2.description5.map((desc1, index)=> (
                                <li key={index} className="mb-1 ml-6 w-full text-neutral-400 text-justify">
                                    {desc1}
                                </li>
                            ))}


                        {experience2.technologies.map((technology, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}

            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        variants={container()}
                        initial="hidden"
                        whileInView="visible"
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-md text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                        variants={container()}
                        initial={{x:100, opacity:0}}
                        whileInView="visible"
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} - <span className="text-md text-purple-100">{experience.company}</span>
                        </h6>
                        {experience.description.map((desc, index)=> (
                            <li key={index} className="mb-1 ml-4 w-full text-neutral-400 text-justify">
                                {desc}
                            </li>
                        ))}
                        {experience.technologies.map((technology, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience