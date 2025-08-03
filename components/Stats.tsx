'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, TrendingUp, Target } from 'lucide-react'

const stats = [
  {
    icon: DollarSign,
    value: '$1.7T',
    label: 'Student Loan Debt',
    description: 'Total outstanding student loan debt in the U.S.'
  },
  {
    icon: Users,
    value: '44M+',
    label: 'Student Borrowers',
    description: 'Americans with student loan debt'
  },
  {
    icon: TrendingUp,
    value: '$600B+',
    label: 'Annual Education Spending',
    description: 'Students spend on tuition and education annually'
  },
  {
    icon: Target,
    value: '0%',
    label: 'Current Rewards',
    description: 'Traditional debit cards offer no rewards for education'
  }
]

export default function Stats() {
  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Students and graduates are spending trillions on education with no financial benefits. 
            We're changing that.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-earth-600 to-earth-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-earth-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-earth-700 mb-2">
                {stat.label}
              </div>
              <p className="text-earth-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto border-l-4 border-l-earth-forest border-r-4 border-r-earth-forest">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Our Solution
            </h3>
            <p className="text-lg text-earth-600 mb-6">
              Traction is the first debit card that rewards students for paying tuition, 
              student loans, and educational expenses. We turn your biggest financial burden 
              into your biggest opportunity.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-600 mb-2">2-5%</div>
                <div className="text-earth-700">Cashback on Education</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-600 mb-2">1-3%</div>
                <div className="text-earth-700">Cashback on Everything</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-600 mb-2">$0</div>
                <div className="text-earth-700">Monthly Fees</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 