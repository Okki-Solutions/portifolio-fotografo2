'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          alt="Fotografia artística"
          fill
          className="object-cover scale-110 filter blur-[3px] saturate-[0.8]"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="mb-4">
          <span className="text-[#d97a2e] text-xs tracking-[0.4em] uppercase font-light">Fotografia Premium</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
          <span className="text-white">Lucas</span>
          <br />
          <span className="text-[#d97a2e]">Rya</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }} className="mt-6 text-white/60 text-sm md:text-base tracking-[0.25em] uppercase max-w-lg">
          Capturando a essência do luxo e da emoção em cada frame
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }} className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="#gallery" className="px-8 py-3 glass-light text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-hover" style={{ backdropFilter: 'blur(20px)' }}>
            Ver Portfólio
          </Link>
          <Link href="#contact" className="px-8 py-3 bg-[#d97a2e] text-black text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#c06a20] hover:scale-105 cursor-hover shadow-[0_0_40px_rgba(217,122,46,0.2)]">
            Entrar em Contato
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
