import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  })

  // EmailJS configuration
  // You'll need to replace these with your actual EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter your name'
      })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter your email'
      })
      return false
    }
    if (!formData.email.includes('@')) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address'
      })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter a message'
      })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setStatus({
      submitting: true,
      success: false,
      error: false,
      message: ''
    })

    try {
      // Check if EmailJS is configured
      if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Fallback: Use mailto if EmailJS is not configured
        const subject = encodeURIComponent(`Contact from ${formData.name}`)
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
        window.location.href = `mailto:kneewyen9401@gmail.com?subject=${subject}&body=${body}`
        
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Opening your email client...'
        })
        
        // Reset form after a delay
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setStatus({
            submitting: false,
            success: false,
            error: false,
            message: ''
          })
        }, 3000)
        return
      }

      // Initialize EmailJS
      emailjs.init(PUBLIC_KEY)

      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kneewyen9401@gmail.com'
        }
      )

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      })

      // Reset form
      setFormData({ name: '', email: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: false,
          error: false,
          message: ''
        })
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or contact me directly via email.'
      })
    }
  }

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="name@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Your message..."
          rows="6"
          required
        />
      </div>

      {status.message && (
        <motion.div
          className={`form-status ${status.success ? 'success' : status.error ? 'error' : ''}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {status.message}
        </motion.div>
      )}

      <motion.button
        type="submit"
        className="form-submit"
        disabled={status.submitting}
        whileHover={{ scale: status.submitting ? 1 : 1.02 }}
        whileTap={{ scale: status.submitting ? 1 : 0.98 }}
      >
        {status.submitting ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm

