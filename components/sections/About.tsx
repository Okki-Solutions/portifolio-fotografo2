'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: 8, label: 'Anos de Experiência', suffix: '+' },
  { value: 120, label: 'Clientes Atendidos', suffix: '+' },
  { value: 450, label: 'Projetos Realizados', suffix: '+' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="min-h-screen w-full flex items-center py-20 md:py-0">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
          <div className="absolute inset-0 glass rounded-2xl overflow-hidden p-2">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80" alt="Lucas Rya - Fotógrafo" fill className="object-cover" quality={95} />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#d97a2e]/10 rounded-full blur-3xl" />
        </motion.div>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="text-[#d97a2e] text-xs tracking-[0.3em] uppercase">Sobre mim</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              A arte de <br />
              <span className="text-[#d97a2e]">contar histórias</span>
            </h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-6 text-white/60 text-base leading-relaxed max-w-md">
            Com mais de 8 anos de experiência, minha abordagem combina técnica apurada com sensibilidade artística para criar imagens que transcendem o tempo. Cada clique é uma narrativa visual única.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="mt-3 text-white/40 text-sm leading-relaxed max-w-md">
            Especializado em moda, lifestyle e casamentos, atuo com uma identidade visual que une o minimalismo japonês à ousadia contemporânea.
          </motion.p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} className="glass rounded-xl p-4 text-center">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                  {stat.suffix}
                </span>
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
