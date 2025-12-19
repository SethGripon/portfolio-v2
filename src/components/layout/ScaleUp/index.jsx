import React from 'react'
import { motion } from 'framer-motion';

export const ScaleUp = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants
    }
  }

  const enterAnimation = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 2.5,
      transition: {
        scale: {
          delay: 2,
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1]
        },
      }
    }
  }

  return (
    <div className='flex flex-col justify-center h-full w-full font-ultra'>
      <motion.div {...anim(enterAnimation)}>
        {children}
      </motion.div>
    </div>
  )
}
