'use client'

import { motion } from 'framer-motion'
import { CreditCard, Shield, TrendingUp, Gift, Smartphone, Users } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Student Debit Card',
    description: 'No credit check required. Get started instantly with a debit card designed specifically for students.',
    color: 'from-earth-600 to-earth-700'
  },
  {
    icon: Shield,
    title: 'FDIC-Insured Vault',
    description: 'Your Tuition Vault is a high-yield savings account held by our sponsoring bank, protected by FDIC insurance.',
    color: 'from-earth-sage to-earth-moss'
  },
  {
    icon: TrendingUp,
    title: 'Smart Round-Ups',
    description: 'Automatically round up every purchase and watch Traction match 5% of your monthly round-up total.',
    color: 'from-earth-terracotta to-earth-rust'
  },
  {
    icon: Gift,
    title: 'Educational Rewards',
    description: 'Earn 1.5x points on tuition, student loans, and educational expenses. Turn spending into savings.',
    color: 'from-earth-burnt to-earth-300'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Track your progress, manage round-ups, and watch your Tuition Vault grow from your phone.',
    color: 'from-earth-slate to-earth-sky'
  },
  {
    icon: Users,
    title: 'Student Community',
    description: 'Connect with other students, share tips, and access exclusive student benefits and resources.',
    color: 'from-earth-forest to-earth-800'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Traction combines the convenience of a debit card with the rewards of a credit card, 
            specifically designed for students and graduates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-earth-forest"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-earth-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-earth-900 mb-8">
            See Your Progress in Real-Time
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-12 bg-white flex items-center justify-between px-6 text-xs text-gray-600">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-gray-400 rounded-sm"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="px-4 py-2 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      <span className="text-lg font-bold text-earth-900">Traction</span>
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    </div>
                    
                    {/* Tuition Vault Card */}
                    <div className="bg-gradient-to-br from-earth-50 to-earth-100 rounded-2xl p-4 border border-earth-200">
                      <h4 className="text-sm font-semibold text-earth-700 mb-2">Tuition Vault</h4>
                      <div className="text-2xl font-bold text-earth-900 mb-1">$2,450.75</div>
                      <div className="text-sm text-earth-600 mb-3">3% APY</div>
                      <div className="w-full bg-earth-200 rounded-full h-2 mb-2">
                        <div className="bg-earth-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <div className="text-xs text-earth-600">90% of tuition paid</div>
                    </div>
                    
                    {/* This Month Card */}
                    <div className="bg-white rounded-2xl p-4 border border-earth-200">
                      <h4 className="text-sm font-semibold text-earth-700 mb-3">This Month</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-earth-600">Round-Up</span>
                          <span className="text-earth-900">$45.30</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-earth-600">Traction Match</span>
                          <span className="text-earth-900">$2.27</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-earth-600">Interest</span>
                          <span className="text-earth-900">$4.51</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Checking Account Card */}
                    <div className="bg-white rounded-2xl p-4 border border-earth-200">
                      <h4 className="text-sm font-semibold text-earth-700 mb-2">Checking Account</h4>
                      <div className="text-xl font-bold text-earth-900 mb-4">$453.10</div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-earth-100 text-earth-700 text-xs py-2 rounded-lg">View Transactions</button>
                        <button className="flex-1 bg-earth-100 text-earth-700 text-xs py-2 rounded-lg">Set Goal</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-earth-sage rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-earth-400 rounded-full opacity-60"></div>
            </div>
            <p className="text-earth-600 mt-4">Track your Tuition Vault growth and manage your finances</p>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
          id="how-it-works"
        >
          <h3 className="text-2xl font-bold text-earth-900 mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-earth-700">1</span>
              </div>
              <h4 className="text-lg font-semibold text-earth-900 mb-2">Sign Up</h4>
              <p className="text-earth-600">Join the waitlist and get early access to Traction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-earth-700">2</span>
              </div>
              <h4 className="text-lg font-semibold text-earth-900 mb-2">Stay Updated</h4>
              <p className="text-earth-600">Receive email updates about Traction's progress</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-earth-700">3</span>
              </div>
              <h4 className="text-lg font-semibold text-earth-900 mb-2">Early Access</h4>
              <p className="text-earth-600">Receive early access to the card when available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-earth-700">4</span>
              </div>
              <h4 className="text-lg font-semibold text-earth-900 mb-2">Earn & Redeem</h4>
              <p className="text-earth-600">Start earning points and redeem for rewards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 