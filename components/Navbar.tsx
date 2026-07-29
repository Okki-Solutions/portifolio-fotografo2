'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#services', label: 'Serviços' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(30px)' : 'none' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#hero" className="text-2xl font-bold tracking-tight">
          <span className="text-white">RYA</span>
          <span className="text-[#d97a2e]">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-white/70 hover:text-white transition-colors duration-300 text-[11px] tracking-[0.2em]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d97a2e] transition-all duration-300 hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg glass"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden glass"
        style={{ backdropFilter: 'blur(40px)' }}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors text-[13px] tracking-[0.15em]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}
