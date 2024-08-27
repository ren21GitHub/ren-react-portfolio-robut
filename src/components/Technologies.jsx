import {TiHtml5} from "react-icons/ti";
import { FaCss3Alt, FaPhp } from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {RiReactjsLine} from "react-icons/ri";
import { LiaPhp } from "react-icons/lia";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div name="Technology" className="border-l-4 border-purple-800 bg-slate-900 pb-20 pt-1">
        <div className="container mx-auto px-8">
            <motion.h1 
            initial={{y:-80, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.8}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div 
                initial={{y:-80, opacity:0}}
                whileInView={{y:0, opacity: 1}}
                transition={{duration: 0.8}}
                className="flex flex-wrap items-center justify-center gap-x-2 gap-y-5">

                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <TiHtml5 className="text-6xl hover:text-orange-600"/>
                </motion.div>


                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <FaCss3Alt className="text-6xl hover:text-red-700"/>
                </motion.div>


                <motion.div 
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <RiTailwindCssFill className="text-6xl hover:text-sky-500"/>
                </motion.div>


                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <IoLogoJavascript className="text-6xl hover:text-yellow-400"/>
                </motion.div>


                <motion.div 
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <RiReactjsLine className="text-6xl hover:text-cyan-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <FaNodeJs className="text-6xl hover:text-green-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(4.3)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <LiaPhp className="text-6xl hover:text-sky-800"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(3.3)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <FaLaravel className="text-6xl hover:text-red-700"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(2.6)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <GrMysql className="text-6xl hover:text-sky-800"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <FaJava className="text-6xl hover:text-sky-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.3}}
                    className="border-neutral-800 p-1">
                    <BiLogoCPlusPlus className="text-6xl hover:text-sky-800"/>
                </motion.div>


            </motion.div>
        </div>
    </div>
  )
}

export default Technologies