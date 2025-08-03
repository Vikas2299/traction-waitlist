'use client'

import { motion } from 'framer-motion'
import { CreditCard, Shield, TrendingUp, Gift, Smartphone, Users } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Debit Card Rewards',
    description: 'Earn points on every purchase, with bonus rewards for tuition and student loan payments.',
    color: 'from-earth-600 to-earth-700'
  },
  {
    icon: Shield,
    title: 'No Credit Check',
    description: 'Get started instantly without worrying about credit scores or approval processes.',
    color: 'from-earth-sage to-earth-moss'
  },
  {
    icon: TrendingUp,
    title: 'Financial Wellness',
    description: 'Track your spending, set goals, and build healthy financial habits with our dashboard.',
    color: 'from-earth-terracotta to-earth-rust'
  },
  {
    icon: Gift,
    title: 'Flexible Redemption',
    description: 'Redeem points for tuition relief, loan paydown, EdTech subscriptions, or cash back.',
    color: 'from-earth-burnt to-earth-300'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Manage your account, track rewards, and make payments all from your phone.',
    color: 'from-earth-slate to-earth-sky'
  },
  {
    icon: Users,
    title: 'Student Community',
    description: 'Connect with other students, share tips, and access exclusive student benefits.',
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
          <div className="grid md:grid-cols-3 gap-8">
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
              <h4 className="text-lg font-semibold text-earth-900 mb-2">Get Your Card</h4>
              <p className="text-earth-600">Receive your Traction debit card in the mail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-earth-700">3</span>
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