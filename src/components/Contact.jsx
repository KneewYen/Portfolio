import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import './Contact.css'

const Contact = () => {
  const contactInfo = {
    email: 'your.email@example.com', // Update with actual email
    location: 'Montreal, QC, Canada',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/KneewYen'
  }

  return (
    <div className="contact-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
      </motion.div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactForm />

        <div className="contact-divider">
          <span>OR</span>
        </div>

        <div className="contact-info">
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="contact-item"
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <span className="contact-value">{contactInfo.email}</span>
            </div>
          </motion.a>

          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Location</span>
              <span className="contact-value">{contactInfo.location}</span>
            </div>
          </motion.div>

          <motion.a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/KneewYen</span>
            </div>
          </motion.a>

          <motion.a
            href="/cv.pdf"
            download
            className="contact-item cv-download"
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Resume</span>
              <span className="contact-value">Download CV</span>
            </div>
          </motion.a>
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>Designed & Built by Nguyen Le</p>
          <p className="footer-year">© 2025</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact

