'use client'

import { motion } from 'framer-motion'
import { Gift, TrendingUp, Target, Zap, Users, CreditCard, PiggyBank, Trophy, GraduationCap } from 'lucide-react'

const pointRewards = [
  { points: '2,500', reward: '$12.50', description: 'Quick start bonus' },
  { points: '7,000', reward: '$35', description: 'Free textbook' },
  { points: '15,000', reward: '$75', description: 'Course materials' },
  { points: '25,000', reward: '$125', description: 'Semester fees' },
  { points: '35,000', reward: '$175', description: 'Major milestone' },
  { points: '50,000', reward: '$250', description: 'Tuition payment' },
  { points: '75,000', reward: '$375', description: 'Loan paydown' },
  { points: '100,000', reward: '$500', description: 'Ultimate goal' }
]

const actionRewards = [
  { action: 'Set up Round-Up Program', points: '200', icon: TrendingUp, description: 'One-time bonus' },
  { action: 'Set up auto-payment for loans', points: '200', icon: Target, description: 'One-time bonus' },
  { action: 'Refer a friend', points: '50', icon: Users, description: 'Every time' },
  { action: 'Set up direct deposit', points: '400', icon: CreditCard, description: 'One-time bonus' },
  { action: 'Transfer initial $100 to Tuition Vault', points: '300', icon: PiggyBank, description: 'One-time bonus' },
  { action: 'Complete financial education course', points: '150', icon: GraduationCap, description: 'One-time bonus' }
]

export default function Rewards() {
  return (
    <section id="rewards" className="py-20 pb-0 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
            Your Rewards Journey to Tuition Freedom
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Every purchase brings you closer to your goals. Earn points, unlock rewards, and watch your Tuition Vault grow.
          </p>
        </motion.div>

        {/* Round-Up Program */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="card max-w-4xl mx-auto border-l-4 border-l-earth-forest">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-600 to-earth-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-earth-900 mb-2">Round-Up Program</h3>
              <p className="text-earth-600">Turn spare change into tuition freedom</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-earth-900 mb-4">How It Works</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-sage rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-earth-700">Round up every transaction to the nearest dollar</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-sage rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-earth-700">Traction matches 5% of your monthly round-up total</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-sage rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-earth-700">All funds go directly to your Tuition Vault</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-earth-900 mb-4">Real Example</h4>
                <div className="bg-earth-100 rounded-lg p-4">
                  <div className="text-sm text-earth-700 mb-2">Your $4.50 latte becomes:</div>
                  <div className="space-y-1 text-sm">
                    <div>• $0.50 round-up to Tuition Vault</div>
                    <div>• +$0.025 Traction match (5%)</div>
                    <div className="font-semibold text-earth-900">Total: $0.525 closer to tuition!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-earth-100 text-earth-700 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Average member earns $15.75/month in round-ups + matches</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Points System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Points System</h3>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Every dollar spent is worth 1 point. Educational expenses earn 1.5x points. 
              Your progress never resets - keep building toward bigger rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pointRewards.map((reward, index) => (
              <motion.div
                key={reward.points}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-earth-600 mb-2">{reward.points}</div>
                <div className="text-lg font-semibold text-earth-900 mb-1">{reward.reward}</div>
                <div className="text-sm text-earth-600">{reward.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Power-Up Bonuses</h3>
            <p className="text-earth-600 max-w-2xl mx-auto">
              High-value actions that accelerate your rewards journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionRewards.map((action, index) => (
              <motion.div
                key={action.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-earth-forest"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-earth-600 to-earth-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-earth-900 mb-2">{action.action}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-earth-600">+{action.points}</span>
                      <span className="text-sm text-earth-600">{action.description}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tuition Vault */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="card max-w-4xl mx-auto border-l-4 border-l-earth-sage">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-earth-sage to-earth-moss rounded-full flex items-center justify-center mx-auto mb-6">
                <PiggyBank className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-earth-900 mb-3">Tuition Vault</h3>
              <p className="text-lg text-earth-600">Your FDIC-insured high-yield savings account</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-earth-600">3% APY</div>
                <div className="text-earth-700 text-lg">Competitive interest rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-earth-600">FDIC Insured</div>
                <div className="text-earth-700 text-lg">Your money is protected</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-earth-600">$294.66</div>
                <div className="text-earth-700 text-lg">Projected year-end balance*</div>
              </div>
            </div>
            
            {/* Debit Card Preview */}
            <div className="mt-12 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="relative inline-block">
                  <div className="w-56 h-36 bg-gradient-to-br from-earth-700 to-earth-800 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-earth-600 to-earth-700 rounded-xl opacity-90"></div>
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-gradient-to-r from-earth-500/30 to-earth-600/30 rounded-xl"></div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="relative p-4 h-full flex flex-col justify-between">
                      <div className="text-right">
                        <span className="text-white text-sm font-medium">traction</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-yellow-500 rounded"></div>
                        <div className="text-white text-xs">DEBIT</div>
                      </div>
                      
                      <div className="text-white text-xs">
                        <div>4558 0200 1234 5678</div>
                        <div>12/27</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-earth-sage rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-earth-400 rounded-full opacity-60"></div>
                </div>
                <p className="text-sm text-earth-600 mt-3">Your Traction debit card</p>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-earth-600 bg-earth-50 px-4 py-2 rounded-lg inline-block">
                *Based on $100 initial deposit + $15.75 monthly round-ups + 3% APY compounding
              </p>
            </div>
          </div>
        </motion.div>

        {/* Monthly Raffle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-3"
        >
          <div className="card max-w-2xl mx-auto border-l-4 border-l-earth-terracotta">
            <div className="w-16 h-16 bg-gradient-to-br from-earth-terracotta to-earth-rust rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-earth-900 mb-2">Monthly Raffle</h3>
            <p className="text-earth-600 mb-4">
              Pay your loans this month? You're automatically entered to win 100 bonus points!
            </p>
            <div className="inline-flex items-center space-x-2 bg-earth-100 text-earth-700 px-4 py-2 rounded-full">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Surprise boost to your rewards journey</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 