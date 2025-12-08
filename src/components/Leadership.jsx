import { motion } from 'framer-motion'
import './Leadership.css'

const Leadership = () => {
  const leadership = {
    role: 'Director of Corporate Relation & Product Developer',
    organization: 'HackConcordia',
    period: 'June 2025 - Present',
    achievements: [
      'Worked closely with the technical team to develop AI tools and automation tools to reach out to company representatives effectively',
      'Implemented web scraping for emails to streamline corporate outreach'
    ]
  }

  return (
    <div className="leadership-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Leadership</h2>
        <div className="section-divider"></div>
      </motion.div>

      <motion.div
        className="leadership-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="leadership-header">
          <h3 className="leadership-role">{leadership.role}</h3>
          <h4 className="leadership-organization">{leadership.organization}</h4>
          <span className="leadership-period">{leadership.period}</span>
        </div>
        <ul className="leadership-achievements">
          {leadership.achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Leadership

