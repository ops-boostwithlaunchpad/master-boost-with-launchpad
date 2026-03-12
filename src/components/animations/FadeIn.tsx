'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
}: FadeInProps) {
  return (
    <motion.div
      className={className || undefined}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
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
