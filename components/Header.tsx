'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWaitlistClick = (e: React.MouseEvent) => {
    // Check if we're already at the waitlist section
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      const rect = waitlistSection.getBoundingClientRect()
      const isInView = rect.top <= 100 && rect.bottom >= 100 // Within 100px of viewport top
      
      if (isInView) {
        e.preventDefault()
        // Focus on the first required input (name field)
        const nameInput = document.getElementById('name') as HTMLInputElement
        if (nameInput) {
          nameInput.focus()
          nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-earth-600 to-earth-forest rounded-lg mr-3"></div>
            <span className="text-xl font-bold text-gradient">Traction</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-earth-forest hover:text-earth-800 transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-earth-forest hover:text-earth-800 transition-colors">
              Features
            </a>
            <a 
              href="#waitlist" 
              className="text-earth-forest hover:text-earth-800 transition-colors"
              onClick={handleWaitlistClick}
            >
              Join Waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-earth-700 hover:bg-earth-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-earth-100"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                className="text-earth-forest hover:text-earth-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-earth-forest hover:text-earth-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#waitlist"
                className="text-earth-forest hover:text-earth-800 transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false)
                  handleWaitlistClick(e)
                }}
              >
                Join Waitlist
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
} 