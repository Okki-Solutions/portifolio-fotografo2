'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
  }

  return (
    <section id="contact" ref={ref} className="min-h-screen w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-[#d97a2e] text-xs tracking-[0.3em] uppercase">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Vamos <span className="text-[#d97a2e]">conversar</span>
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">
            Estou pronto para transformar sua visão em imagens inesquecíveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-[0.15em] mb-1.5">Nome</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full glass px-5 py-3.5 rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#d97a2e]/50 transition-all" placeholder="Seu nome" required />
            </div>

            <div>
              <label className="block text-white/50 text-xs uppercase tracking-[0.15em] mb-1.5">E-mail</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full glass px-5 py-3.5 rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#d97a2e]/50 transition-all" placeholder="seu@email.com" required />
            </div>

            <div>
              <label className="block text-white/50 text-xs uppercase tracking-[0.15em] mb-1.5">Mensagem</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full glass px-5 py-3.5 rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#d97a2e]/50 transition-all resize-none" placeholder="Conte-me sobre seu projeto..." required />
            </div>

            <button type="submit" className="w-full py-4 bg-[#d97a2e] text-black font-medium rounded-xl transition-all duration-300 hover:bg-[#c06a20] hover:scale-[1.01] shadow-[0_0_50px_rgba(217,122,46,0.15)] flex items-center justify-center gap-2 text-sm tracking-[0.1em] uppercase">
              Enviar <Send size={16} />
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col gap-6">
            <div className="glass rounded-2xl p-7 space-y-5">
              <h3 className="text-white text-lg font-semibold tracking-tight">
                Informações de <span className="text-[#d97a2e]">contato</span>
              </h3>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#d97a2e] mt-0.5" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.1em]">Localização</p>
                  <p className="text-white/70 text-sm">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#d97a2e] mt-0.5" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.1em]">Telefone</p>
                  <p className="text-white/70 text-sm">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#d97a2e] mt-0.5" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.1em]">E-mail</p>
                  <p className="text-white/70 text-sm">contato@lucasrya.com</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden aspect-[16/9] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d97a2e]/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs uppercase tracking-[0.3em]">
                Localização
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
