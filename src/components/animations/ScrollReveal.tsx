'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

const directionOffset = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -20 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: ScrollRevealProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      className={className || undefined}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
