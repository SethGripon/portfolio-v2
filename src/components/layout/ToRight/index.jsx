import React from 'react'
import { motion } from 'framer-motion';

export const ToRight = ({ children, delay }) => {
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
      y: '100%',
      opacity: 0,
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

  const swipeRight = {
    initial: {
      x: 0
    },
    animate: {
      x: 550,
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
    <div className='w-full pl-[40%] text-[100px] leading-none tracking-wider overflow-hidden '>
      <motion.div {...anim(enterAnimation, delay)}>
        <motion.div {...anim(swipeRight)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
