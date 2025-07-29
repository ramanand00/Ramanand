import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email.')
      return
    }

    // Simulate email being sent
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          🔑 Forgot Password
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 px-4 py-2 rounded text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400">
            ✅ A password reset link has been sent to your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                Enter your email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none border focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          <Link to="/login" className="text-purple-600 hover:underline">
            ← Back to Login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

export default ForgotPassword
