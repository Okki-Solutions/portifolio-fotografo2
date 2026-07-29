'use client'

import { useEffect, useState } from 'react'

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        width: 12,
        height: 12,
        opacity: isVisible ? 1 : 0,
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0 0 20px rgba(217,122,46,0.25)',
      }}
    />
  )
}
