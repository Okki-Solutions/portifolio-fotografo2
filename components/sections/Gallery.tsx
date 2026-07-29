'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from 'framer-motion'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
    alt: 'Editorial de moda 1',
    width: 1200,
    height: 1600,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    alt: 'Retrato artístico',
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&q=80',
    alt: 'Lifestyle urbano',
    width: 1200,
    height: 1600,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80',
    alt: 'Moda e movimento',
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    alt: 'Editorial de rua',
    width: 1200,
    height: 1200,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    alt: 'Casamento e emoção',
    width: 1200,
    height: 1600,
  },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const prevImage = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextImage = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % galleryImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
  }

  return (
    <section id="gallery" ref={ref} className="min-h-screen w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-[#d97a2e] text-xs tracking-[0.3em] uppercase">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Galeria <span className="text-[#d97a2e]">Premium</span>
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">
            Cada imagem é uma obra-prima, cuidadosamente composta para contar sua história
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((img, index) => (
            <motion.div key={img.id} initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.06 }} className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl glass-glow" onClick={() => openLightbox(index)}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" quality={90} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="glass-light px-6 py-3 rounded-lg text-white text-xs tracking-[0.15em] uppercase backdrop-blur-xl">Ver imagem</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-lg" onClick={closeLightbox} onKeyDown={handleKeyDown} tabIndex={0} role="dialog" aria-modal="true">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} className="relative w-full max-w-5xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-auto h-auto max-h-[80vh] overflow-hidden rounded-2xl glass p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image src={galleryImages[selectedIndex].src} alt={galleryImages[selectedIndex].alt} width={1200} height={1600} className="object-contain w-full h-full" quality={100} priority />
                </div>
              </div>

              <button onClick={prevImage} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 glass-light p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300" aria-label="Anterior">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 glass-light p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300" aria-label="Próximo">
                <ChevronRight size={24} />
              </button>

              <button onClick={closeLightbox} className="absolute top-2 right-2 md:top-6 md:right-6 glass-light p-2 rounded-full text-white hover:bg-white/20 transition-all duration-300" aria-label="Fechar">
                <X size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em] uppercase glass-light px-4 py-1.5 rounded-full">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
