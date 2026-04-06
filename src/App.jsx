import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import ThreeBackground from './components/ThreeBackground'
import BackgroundMusic from './components/BackgroundMusic'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const sections = [
    { id: 'home', Component: Hero },
    { id: 'skills', Component: Skills },
    { id: 'experience', Component: Experience },
    { id: 'education', Component: Education },
    { id: 'projects', Component: Projects },
    { id: 'leadership', Component: Leadership },
    { id: 'contact', Component: Contact }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <ThreeBackground />
      <div className="app-overlay" />
      <Navigation activeSection={activeSection} />
      <BackgroundMusic />
      <main>
        {sections.map(({ id, Component }, index) => (
          <motion.section
            key={id}
            id={id}
            className="page-section"
            initial={{ opacity: 0, y: 80, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.03, ease: 'easeOut' }}
          >
            <Component />
          </motion.section>
        ))}
      </main>
    </div>
  )
}

export default App

