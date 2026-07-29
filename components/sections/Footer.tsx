'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Camera, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">RYA</span>
            <span className="text-[#d97a2e] text-2xl font-bold">.</span>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-white/30 hover:text-white transition-colors duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="text-white/30 hover:text-white transition-colors duration-300" aria-label="Behance">
              <Camera size={18} />
            </Link>
            <Link href="#" className="text-white/30 hover:text-white transition-colors duration-300" aria-label="E-mail">
              <Mail size={18} />
            </Link>
            <Link href="#" className="text-white/30 hover:text-white transition-colors duration-300" aria-label="WhatsApp">
              <MapPin size={18} />
            </Link>
          </div>

          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Lucas Rya. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
