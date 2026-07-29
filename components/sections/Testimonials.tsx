'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marina Costa',
    role: 'Diretora Criativa, Vogue Brasil',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    content: 'O olhar do Lucas é único. Cada clique parece uma pintura. Profissionalismo e arte em perfeita harmonia.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rafael Mendes',
    role: 'CEO, Mendes Branding',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    content: 'Transformou nossa campanha de lançamento com imagens que transmitem exatamente a essência da marca. Recomendo sem hesitar.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Beatriz Lins',
    role: 'Noiva & Influenciadora',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'As fotos do meu casamento são eternas. Lucas capturou cada emoção com uma delicadeza que nos surpreendeu. Perfeito!',
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="testimonials" ref={ref} className="min-h-screen w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-[#d97a2e] text-xs tracking-[0.3em] uppercase">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            O que <span className="text-[#d97a2e]">dizem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass rounded-2xl p-7 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d97a2e] text-[#d97a2e]" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-white/30">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
