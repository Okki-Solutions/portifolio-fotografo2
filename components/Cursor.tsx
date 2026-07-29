'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)

    document.querySelectorAll('a, button, .cursor-hover').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.querySelectorAll('a, button, .cursor-hover').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [isVisible])

  const size = isHovering ? 56 : 12
  const glowSize = isHovering ? 140 : 60

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={{
          x: position.x - size / 2,
          y: position.y - size / 2,
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
        style={{
          background: 'rgba(255,255,255,0.9)',
          boxShadow: '0 0 40px rgba(217,122,46,0.2)',
        }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: position.x - glowSize / 2,
          y: position.y - glowSize / 2,
          width: glowSize,
          height: glowSize,
          opacity: isVisible ? (isHovering ? 0.25 : 0.08) : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8 }}
        style={{
          background: 'radial-gradient(circle, rgba(217,122,46,0.4), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </>
  )
}
