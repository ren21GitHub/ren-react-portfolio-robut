import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ServiceData } from "../constants";
import { RxArrowTopRight } from 'react-icons/rx'
import { IoMdArrowForward } from "react-icons/io";

const ImageSlider = () => {

  const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex+1)%5)
      return updatedIndexes
    })
  }

  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1',
  ]

  const imageVariants = {
    center: {x: '0',
      scale: 1,
      zIndex: 5,
    },
    left1: {x: '-40%',
      scale: 0.7,
      zIndex: 3,
    },
    left: {x: '-70%',
      scale: 0.5,
      zIndex: 2,
    },
    right: {x: '70%',
      scale: 0.5,
      zIndex: 1,
    },
    right1: {x: '40%',
      scale: 0.7,
      zIndex: 3,
    }
  }

  const imageVariants1 = {
    center: {x: '0',
      scale: 1,
      zIndex: 5,
    },
    left1: {x: '-40%',
      scale: 0.7,
      zIndex: 3,
    },
    left: {x: '-70%',
      scale: 0.5,
      zIndex: 2,
    },
    right: {x: '0',
      scale: 0.5,
      zIndex: 1,
    },
    right1: {x: '0',
      scale: 0.7,
      zIndex: 3,
    }
  }

  const [width, setWidth] = useState('50%');
  const [height, setHeight] =useState(true);

  useEffect(() => {
    // Function to update setWidth based on screen width
    const handleResize = () => {
        
      const screenWidth = window.innerWidth;

      // Set the width value based on the screen width
      if (screenWidth <= 700) {
        setWidth('100%');
        setHeight(true);
      } else {
        setWidth('50%');
        setHeight(false);
      }
    };


    // Initial call to set the initial state based on the screen width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize); 

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    },[]);

  return (
    <div name="Project" className={`flex pt-1 items-center flex-col justify-center ${height ? "h-[500px]" : "h-[700px]"} bg-slate-900 bg-opacity-60 px-8`}>
      <motion.h1
            initial={{y:-50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 1.5}}
            className="text-center text-4xl">Projects</motion.h1>
            
      {ServiceData.map((image, index)=>(
          <motion.img
            key={index}
            src={image.backgroundImage}
            alt={image.backgroundImage}

            variants={window.innerWidth <= 700? imageVariants1:imageVariants}
            initial="center"
            animate={positions[positionIndexes[index]]}
            transition={{duration: 0.5}}
            // style={{width: '50%', position: 'absolute'}}
            style={{ width: width, 
            position: 'absolute'}}
            className="rounded-sm shadow-lg shadow-purple-500/60 overflow-hidden sm:overflow-hidden"
          />

      ))}

      <div className="hidden absolute z-10 items-center justify-center w-max">
        <span className="text-4xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-black">ROBUT</span>
        <div className="description mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </div>
        <div className="p-2 w-max bg-white text-purple-700 hover:bg-purple-700 hover:text-white shadow-lg shadow-purple-700/60 hover:shadow-white-700/60 mt-4">
          <button>SEE MORE</button>
        </div>
      </div>
      
      <motion.button
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       transition={{ type: "spring", stiffness: 300, damping: 17 }}
       className={`group relative flex text-white rounded text-1xl ${height ? "mt-[350px]" : "mt-[550px]"} bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-purple-500  py-2 px-4`} onClick={handleNext} >Next <RxArrowTopRight className="pl-1 text-2xl hover:rotate-45 duration-100" />
      </motion.button>

    </div>
  )
}

export default ImageSlider