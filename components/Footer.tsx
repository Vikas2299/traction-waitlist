'use client'

import { motion } from 'framer-motion'
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-earth-600 rounded-lg mr-3 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Traction</span>
            </div>
            <p className="text-earth-200 mb-6 max-w-md">
              The first debit card that rewards students for paying tuition, student loans, 
              and educational expenses. Turn your biggest financial burden into your biggest opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@traction.com" className="text-earth-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-earth-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-earth-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#waitlist" className="text-earth-300 hover:text-white transition-colors">Join Waitlist</a></li>
              <li><a href="#rewards" className="text-earth-300 hover:text-white transition-colors">Rewards Program</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-earth-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-earth-300 text-sm">
              © 2025 Traction. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-earth-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-earth-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-earth-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 