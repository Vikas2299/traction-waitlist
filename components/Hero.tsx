'use client'

import { motion } from 'framer-motion'
import { CreditCard, GraduationCap, TrendingUp, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import WaitlistForm from './WaitlistForm'

// Floating particles component
const FloatingParticles = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-earth-400 rounded-full opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
      
      {/* Medium particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`medium-${i}`}
          className="absolute w-2 h-2 bg-earth-sage rounded-full opacity-50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
      
      {/* Small particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute w-1 h-1 bg-earth-600 rounded-full opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 15 + 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
      
      {/* Glowing particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-4 h-4 bg-earth-forest rounded-full opacity-30 blur-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="waitlist" className="min-h-screen gradient-bg pt-20 pb-16 relative">
      <FloatingParticles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Built for Students
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-earth-900 leading-tight"
              >
                The First Debit Card That{' '}
                <span className="text-gradient">Rewards</span> Student Loan Payments
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-earth-600 leading-relaxed"
              >
                Earn points on tuition, student loans, and educational expenses. 
                Turn your biggest financial burden into your biggest reward.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-700">$1.7T</div>
                <div className="text-sm text-earth-600">Student Loan Debt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-700">44M+</div>
                <div className="text-sm text-earth-600">Student Borrowers</div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-sage rounded-full"></div>
                <span className="text-earth-700">No credit check required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-sage rounded-full"></div>
                <span className="text-earth-700">Earn points on tuition & loan payments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-sage rounded-full"></div>
                <span className="text-earth-700">Redeem for tuition relief & loan paydown</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-8"
          >
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-earth-700 mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-earth-600">
                  Be among the first to experience the future of student finance
                </p>
              </div>
              <WaitlistForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 