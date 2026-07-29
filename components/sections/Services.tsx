'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Heart, Users, Sparkles, BookOpen, Film } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Fotografia de Moda',
    description: 'Ensaios editoriais com direção criativa e identidade visual marcante.',
  },
  {
    icon: Heart,
    title: 'Casamentos & Eventos',
    description: 'Registro emocional e autêntico do seu dia mais especial.',
  },
  {
    icon: Users,
    title: 'Retratos & Lifestyle',
    description: 'Retratos naturais que capturam a essência e personalidade.',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Glamour',
    description: 'Beauty looks com iluminação sofisticada e acabamento premium.',
  },
  {
    icon: BookOpen,
    title: 'Ensaios Editoriais',
    description: 'Produções completas para revistas, marcas e campanhas.',
  },
  {
    icon: Film,
    title: 'Cobertura de Eventos',
    description: 'Cobertura fotográfica com olhar artístico e narrativo.',
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" ref={ref} className="min-h-screen w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-[#d97a2e] text-xs tracking-[0.3em] uppercase">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            O que <span className="text-[#d97a2e]">ofereço</span>
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">Soluções fotográficas personalizadas para cada projeto</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }} className="glass rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(217,122,46,0.1)] cursor-default group">
              <div className="w-14 h-14 rounded-xl bg-[#d97a2e]/10 flex items-center justify-center mb-6 group-hover:bg-[#d97a2e]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#d97a2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-4 w-8 h-[1px] bg-[#d97a2e]/30 group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
