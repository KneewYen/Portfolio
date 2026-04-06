import { motion } from 'framer-motion'
import './Experience.css'

const desjardinsFallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='72' viewBox='0 0 220 72'><rect width='220' height='72' rx='10' fill='white'/><path d='M24 18l12-7 12 7v14l-12 7-12-7z' fill='none' stroke='%2300924f' stroke-width='5'/><text x='62' y='47' font-family='Arial' font-size='36' fill='%2300924f' font-weight='700'>Desjardins</text></svg>"
const intactFallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='72' viewBox='0 0 180 72'><rect width='180' height='72' rx='10' fill='white'/><path d='M8 22h16v28H8M172 22h-16v28h16' fill='none' stroke='%23d11f2a' stroke-width='6'/><text x='38' y='48' font-family='Georgia' font-size='44' fill='%230b0b0b'>intact</text></svg>"

const Experience = () => {
  const experiences = [
    {
      title: 'Software R&D Intern',
      company: 'Desjardins Group',
      website: 'https://www.desjardins.com',
      logo: '/logos/desjardins.png',
      logoFallback: desjardinsFallback,
      logoClass: 'logo-desjardins',
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
      website: 'https://www.intactfc.com',
      logo: '/logos/intact.png',
      logoFallback: intactFallback,
      logoClass: 'logo-intact',
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
                <a
                  className="experience-company-link"
                  href={exp.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <div className="experience-company-row">
                    <img
                      className={`experience-company-logo ${exp.logoClass}`}
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null
                        event.currentTarget.src = exp.logoFallback
                      }}
                    />
                    <span className="experience-company">{exp.company}</span>
                  </div>
                </a>
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

