import { motion } from 'framer-motion'
import React from 'react'

const Transitions = () => {
  return (
    <>
      <motion.div
        className='fixed inset-0 z-50 bg-dark origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      />
      <motion.div
        className='fixed inset-0 z-40 origin-top'
        style={{ backgroundColor: '#e63946' }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </>
  )
}

export default Transitions
