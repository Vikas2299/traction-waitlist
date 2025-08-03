import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Traction - The First Debit Card That Rewards Student Loan Payments',
  description: 'Earn points on tuition, student loans, and educational expenses. The first debit card designed specifically for students and graduates.',
  keywords: 'student loans, debit card, rewards, tuition, education, fintech, student finance',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Traction - Rewards for Student Loan Payments',
    description: 'Earn points on tuition, student loans, and educational expenses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 