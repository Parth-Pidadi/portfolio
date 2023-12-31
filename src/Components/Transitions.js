import { motion } from 'framer-motion'
import React from 'react'



const Transitions = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-orange-600'
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{duration:0.8,ease: [0.42, 0, 0.58, 1]}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light'
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.2,duration:0.8, ease: [0.42, 0, 0.58, 1]}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-green-950'
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.4,duration:0.8, ease: [0.42, 0, 0.58, 1]}}
        />
    </>
  )
}

export default Transitions