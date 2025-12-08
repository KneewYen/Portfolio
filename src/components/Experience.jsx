import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software R&D Intern',
      company: 'Desjardins Group',
      location: 'Montreal, QC',
      period: 'Jan. 2025 - Expected December 2025',
      achievements: [
        'Redesigned and migrated the enterprise CI/CD pipeline from Jenkins to GitHub Actions, reducing build and release cycles by 40%',
        'Implemented end-to-end automation for compilation, testing, deployment, and artifact publishing',
        'Built pipelines to pull and validate application metadata, enforce consistency checks, and publish artifacts',
        'Developed a semantic versioning automation tool to auto-increment versions after pull requests, ensuring consistency across deployments',
        'Returned as a part-time employee'
      ]
    },
    {
      title: 'Fullstack Software Engineer Intern',
      company: 'Intact Financial Corporation',
      location: 'Toronto, ON',
      period: 'May 2025 - August 2025',
      achievements: [
        'Streamlined data retrieval for policyholders, enabling detection of policies for Auto + Home bundle discounts',
        'Designed and implemented new API endpoints and integrated them into the UI gateway to update model',
        'Developed low-latency algorithms to automatically update client insurance contracts upon quote creation, reducing manual errors and increasing efficiency',
        'Automated underwriting workflows by calculating distances to nearby fire hydrants and firehalls',
        'Diagnosed and resolved production defects using SOAP UI, ensuring seamless request-response handling',
        'Built a GPS-based localization feature to evaluate building structural risk, increasing risk assessment precision',
        'Troubleshot real-time production issues, maintaining 100% service availability for critical defects',
        'Offered part-time after internship'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className="experience-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>
      </motion.div>

      <motion.div
        className="experience-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            variants={itemVariants}
          >
            <div className="timeline-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-meta">
                <span className="experience-location">{exp.location}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + achIndex * 0.05 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience

