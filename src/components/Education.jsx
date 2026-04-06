import { motion } from 'framer-motion'
import './Education.css'

const concordiaFallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='72' viewBox='0 0 180 72'><rect width='180' height='72' rx='10' fill='white'/><circle cx='36' cy='36' r='26' fill='%23901f3d'/><text x='36' y='48' text-anchor='middle' font-family='Arial' font-size='42' fill='white' font-weight='700'>C</text><text x='72' y='44' font-family='Arial' font-size='24' fill='%23901f3d' font-weight='700'>Concordia</text></svg>"

const Education = () => {
  const education = {
    degree: 'Bachelor of Engineering Co-op, Software Engineering',
    university: 'Concordia University',
    logo: '/logos/concordia.png',
    logoFallback: concordiaFallback,
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
        <div className="education-university-row">
          <img
            className="education-university-logo"
            src={education.logo}
            alt={`${education.university} logo`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = education.logoFallback
            }}
          />
          <h4 className="education-university">{education.university}</h4>
        </div>
        <div className="education-meta">
          <span className="education-location">{education.location}</span>
          <span className="education-period">{education.period}</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Education

