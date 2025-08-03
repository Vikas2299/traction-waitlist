'use client'

import { useState, useEffect } from 'react'
import { addToWaitlist } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Info } from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  student_status?: string
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    university: '',
    student_status: 'current' as 'current' | 'graduate' | 'prospective',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Real-time validation
  useEffect(() => {
    const newErrors: FormErrors = {}
    
    if (touched.name && !formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (touched.email) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }
    
    if (touched.student_status && !formData.student_status) {
      newErrors.student_status = 'Please select your student status'
    }
    
    setErrors(newErrors)
  }, [formData, touched])

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mark all fields as touched to show validation errors
    setTouched({
      name: true,
      email: true,
      student_status: true
    })
    
    // Check if form is valid
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.student_status) newErrors.student_status = 'Please select your student status'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Focus on the first error field
      const firstErrorField = Object.keys(newErrors)[0]
      const errorElement = document.getElementById(firstErrorField) as HTMLInputElement
      if (errorElement) {
        errorElement.focus()
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    
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
      setTouched({})
      setErrors({})
    } catch (error: any) {
      setSubmitStatus('error')
      
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
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                     formData.student_status

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
              onBlur={() => handleBlur('name')}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-earth-200'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </motion.p>
            )}
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
              onBlur={() => handleBlur('email')}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-earth-200'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.p>
            )}
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
              onBlur={() => handleBlur('student_status')}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors ${
                errors.student_status ? 'border-red-300 bg-red-50' : 'border-earth-200'
              }`}
            >
              <option value="current">Current Student</option>
              <option value="graduate">Graduate</option>
              <option value="prospective">Prospective Student</option>
            </select>
            {errors.student_status && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.student_status}
              </motion.p>
            )}
          </div>

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-red-700 text-sm">{errorMessage}</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="btn-primary w-full disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Joining Waitlist...
              </span>
            ) : (
              'Join the Waitlist'
            )}
          </button>

          {!isFormValid && Object.keys(touched).length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-2 p-3 bg-earth-50 border border-earth-200 rounded-lg"
            >
              <Info className="w-5 h-5 text-earth-600 mt-0.5 flex-shrink-0" />
              <span className="text-earth-700 text-sm">
                Please fill in all required fields to join the waitlist.
              </span>
            </motion.div>
          )}
        </motion.form>
      )}
    </div>
  )
} 