import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-glow-orb hero-glow-left"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-glow-orb hero-glow-right"
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-content hero-tilt-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ rotateX: -5, rotateY: 5, z: 10 }}
      >
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nguyen Le
        </motion.h1>
        <motion.div
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="title-line">Software Engineer</span>
          <span className="title-accent"> • </span>
          <span className="title-line">Vibe Coder</span>
          <span className="title-accent"> • </span>
          <span className="title-line">Token Maxer</span>
        </motion.div>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about building scalable applications and automating workflows.
          Currently pursuing Software Engineering at Concordia University.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Projects
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-decoration"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: [0, 8, 0] }}
        transition={{ duration: 7, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="decoration-circle"></div>
      </motion.div>
    </div>
  )
}

export default Hero

