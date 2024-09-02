import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ServiceData } from "../constants";
import { RxArrowTopRight } from 'react-icons/rx';


const ImageSlider2 = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [isMobile, setIsMobile] = useState(false);
  
    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
        return updatedIndexes;
      });
    };
  
    const positions = [
      'center',
      'left1',
      'left',
      'right',
      'right1',
    ];
  
    const imageVariants = {
      center: { x: '0%', scale: 1, zIndex: 5 },
      left1: { x: '-40%', scale: 0.7, zIndex: 3 },
      left: { x: '-70%', scale: 0.5, zIndex: 2 },
      right: { x: '70%', scale: 0.5, zIndex: 1 },
      right1: { x: '40%', scale: 0.7, zIndex: 3 },
    };
  
    const imageVariantsMobile = {
      center: { x: '0%', scale: 1, zIndex: 5 },
      left1: { x: '-25%', scale: 0.85, zIndex: 3 },
      left: { x: '-50%', scale: 0.75, zIndex: 2 },
      right: { x: '50%', scale: 0.75, zIndex: 1 },
      right1: { x: '25%', scale: 0.85, zIndex: 3 },
    };
  
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 1024);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div name="Project" className={`${isMobile ? "h-[350px]" : "h-[700px]"} relative flex flex-col items-center justify-center bg-slate-900 bg-opacity-60 px-8`}>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex text-center w-full items-center justify-center bg-green-300 text-4xl z-20">Projects</motion.h1>
  
        <div className="flex justify-center w-full bg-red-900 items-center overflow-hidden mt-8">
          {ServiceData.map((image, index) => (
            <motion.img
              key={index}
              src={image.backgroundImage}
              alt={image.backgroundImage}
              variants={isMobile ? imageVariantsMobile : imageVariants}
              initial="center"
              animate={positions[positionIndexes[index]]}
              transition={{ duration: 0.5 }}
              className="absolute rounded-sm shadow-lg shadow-purple-500/60"
              style={{ width: isMobile ? '80%' : '50%'}}
            />
          ))}
        </div>
  
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`${isMobile ? "" : "mt-[320px]"} w-full z-20 flex text-white rounded text-1xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-purple-500 py-2 px-4`}
          onClick={handleNext}
        >
          Next <RxArrowTopRight className="pl-1 text-2xl hover:rotate-45 duration-100" />
        </motion.button>
      </div>
    );
  };

export default ImageSlider2