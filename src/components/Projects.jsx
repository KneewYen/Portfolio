import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Hotel Database Migration SQL to NoSQL',
      description: 'Requirement Analysis Supabase PostgreSQL and MongoDB',
      details: [
        'Designed a full relational database from MIMIC-III using ER modeling, normalization, and Supabase implementation with analytical SQL queries',
        'Migrated the dataset to MongoDB by restructuring relationships into document and developing ETL scripts'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Supabase', 'SQL', 'ETL']
    },
    {
      title: 'Concurrent Bank System',
      description: 'Source Code',
      details: [
        'Designed a multi-user banking system at the OS level, managing concurrent access to accounts and transactions',
        'Developed process synchronization mechanisms using semaphores and mutexes'
      ],
      technologies: ['Java', 'Maven', 'Git', 'Concurrency', 'OS']
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="projects-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <ul className="project-details">
              {project.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects

