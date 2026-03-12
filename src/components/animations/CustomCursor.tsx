'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    const match = window.matchMedia('(pointer: fine)')
    setIsPointerFine(match.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches)
    }
    match.addEventListener('change', handleChange)
    return () => match.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (!isPointerFine) return

    const mouse = { x: 0, y: 0 }
    const ring = { x: 0, y: 0 }
    let animationFrameId: number

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.x}px`
        dotRef.current.style.top = `${mouse.y}px`
      }
    }

    const animateRing = () => {
      ring.x += (mouse.x - ring.x) * 0.15
      ring.y += (mouse.y - ring.y) * 0.15

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.x}px`
        ringRef.current.style.top = `${ring.y}px`
      }

      animationFrameId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', onMouseMove)
    animationFrameId = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPointerFine])

  if (!isPointerFine) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
