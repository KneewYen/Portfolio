import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = {
    degree: 'Bachelor of Engineering Co-op, Software Engineering',
    university: 'Concordia University',
    location: 'Montreal, QC',
    period: 'Aug. 2023 - May 2027'
  }

  return (
    <div className="education-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="section-divider"></div>
      </motion.div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="education-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
          </svg>
        </div>
        <h3 className="education-degree">{education.degree}</h3>
        <h4 className="education-university">{education.university}</h4>
        <div className="education-meta">
          <span className="education-location">{education.location}</span>
          <span className="education-period">{education.period}</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Education

