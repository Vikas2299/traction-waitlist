'use client'

import { useState } from 'react'
import { addToWaitlist } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    university: '',
    student_status: 'current' as 'current' | 'graduate' | 'prospective',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      await addToWaitlist({
        email: formData.email,
        name: formData.name,
        university: formData.university || undefined,
        student_status: formData.student_status,
        referral_source: 'website',
      })
      
      setSubmitStatus('success')
      setFormData({ email: '', name: '', university: '', student_status: 'current' })
    } catch (error: any) {
      setSubmitStatus('error')
      console.error('Waitlist submission error:', error)
      
      // Provide more specific error messages
      if (error.message?.includes('Supabase client not configured')) {
        setErrorMessage('Database connection not configured. Please check environment variables.')
      } else if (error.message?.includes('relation "waitlist" does not exist')) {
        setErrorMessage('Database table not found. Please create the waitlist table in Supabase.')
      } else if (error.message?.includes('duplicate key')) {
        setErrorMessage('This email is already registered. Please use a different email address.')
      } else {
        setErrorMessage(`Error: ${error.message || 'Something went wrong. Please try again.'}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card text-center"
        >
          <CheckCircle className="w-12 h-12 text-earth-sage mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-earth-700 mb-2">You're on the list!</h3>
          <p className="text-earth-600">
            We'll notify you when Traction launches. Get ready to earn rewards on your student loan payments!
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="university" className="block text-sm font-medium text-earth-700 mb-1">
              University (Optional)
            </label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors"
              placeholder="Your university name"
            />
          </div>

          <div>
            <label htmlFor="student_status" className="block text-sm font-medium text-earth-700 mb-1">
              Student Status *
            </label>
            <select
              id="student_status"
              name="student_status"
              value={formData.student_status}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors"
            >
              <option value="current">Current Student</option>
              <option value="graduate">Graduate</option>
              <option value="prospective">Prospective Student</option>
            </select>
          </div>

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 text-sm">{errorMessage}</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}
          </button>
        </motion.form>
      )}
    </div>
  )
} 