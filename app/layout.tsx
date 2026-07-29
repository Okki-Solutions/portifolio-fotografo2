import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Cursor } from '@/components/Cursor'
import { BackgroundEffects } from '@/components/BackgroundEffects'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Lucas Rya | Fotografia Premium',
  description: 'Fotografia artística, moda, lifestyle e casamento com identidade visual única.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>
        <Providers>
          <Cursor />
          <BackgroundEffects />
          {children}
        </Providers>
      </body>
    </html>
  )
}
