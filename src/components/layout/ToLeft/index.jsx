import React from 'react';
import { motion } from 'framer-motion';

export const ToLeft = ({ children, delay }) => {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
      custom
    }
  }

  const enterAnimation = {
    initial: {
      opacity: 0,
      y: '100%'
    },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        opacity: {
          delay: 1 * i,
        },
        y: {
          delay: 0.5 * i,
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1]
        },
      }
    })
  }

  const swipeLeft = {
    initial: {
      x: 0
    },
    animate: {
      x: -750,
      transition: {
        opacity: {
          delay: 0.3,
          duration: 0.8,
        },
        x: {
          delay: 3.5,
          duration: 1.5,
          ease: [0.83, 0, 0.17, 1]
        }
      }
    },
  }

  return (
    <div className='w-full pl-[40%] text-[100px] leading-none tracking-wider overflow-hidden'>
      <motion.div {...anim(enterAnimation, delay)}>
        <motion.div {...anim(swipeLeft)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}