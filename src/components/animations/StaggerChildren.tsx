'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

const containerVariants = (staggerDelay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function StaggerChildren({
  children,
  className = '',
  staggerDelay = 0.07,
}: StaggerChildrenProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={className || undefined}
        variants={containerVariants(staggerDelay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-12% 0px' }}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
