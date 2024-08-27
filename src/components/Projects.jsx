import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import portfolio1 from "../assets/slider/portfolio1.png"
import portfolio2 from "../assets/slider/portfolio2.png"
import portfolio3 from "../assets/slider/portfolio3.png"
import portfolio4 from "../assets/slider/portfolio4.png"
import portfolio5 from "../assets/slider/portfolio5.png"
// import '../constants/app.js'

const Projects = () => {

  return (
    <div /* className="container mx-auto border-b border-neutral-900 pb-4" */>
        <motion.h1
            initial={{y:-100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            {/* {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay:0.2}}
                        whileHover={{ scale: 1.1 }}
                        className="w-full lg:w-1/4">
                        <img 
                            src={project.image} 
                            width={150} 
                            height={150} 
                            alt={project.title}
                            className="mb-6 rounded"    
                        />
                    </motion.div>
                    <motion.div 
                        initial={{x:100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay:0.2}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description }</p>
                        {project.technologies.map((technology, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {technology}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))} */}
        </div>
        <div className="slider">
                <div className="list">
                    <div className="item">
                        <img src={portfolio1} alt="" />

                        <div className="content">
                            <div className="title">MAGIC SLIDER</div>
                            <div className="type">ROBUT</div>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={portfolio2} alt="" />

                        <div className="content">
                            <div className="title">MAGIC SLIDER</div>
                            <div className="type">ROBUT 2</div>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={portfolio3} alt="" />

                        <div className="content">
                            <div className="title">MAGIC SLIDER</div>
                            <div className="type">ROBUT</div>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={portfolio4} alt="" />

                        <div className="content">
                            <div className="title">MAGIC SLIDER</div>
                            <div className="type">ROBUT</div>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={portfolio5} alt="" />

                        <div className="content">
                            <div className="title">MAGIC SLIDER</div>
                            <div className="type">ROBUT</div>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="thumbnail">
                        <div className="item">
                            <img src={portfolio1} alt="" />
                        </div>
                        <div className="item">
                            <img src={portfolio2} alt="" />
                        </div>
                        <div className="item">
                            <img src={portfolio3} alt="" />
                        </div>
                        <div className="item">
                            <img src={portfolio4} alt="" />
                        </div>
                        <div className="item">
                            <img src={portfolio5} alt="" />
                        </div>
                    </div>
                

                <div className="nextPrevArrows">
                    <button className="prev"> prev </button>
                    <button className="next"> next </button>
                </div>
            </div>
    </div>
  )
}

export default Projects