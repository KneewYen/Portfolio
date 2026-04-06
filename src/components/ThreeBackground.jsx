import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import './ThreeBackground.css'

const FloatingCluster = () => {
  const groupRef = useRef(null)
  const shapeRefs = useRef([])

  const shapes = useMemo(() => ([
    { position: [-3, 1.3, -1.2], size: 1.1, speed: 0.45, color: '#00ff88' },
    { position: [2.8, -1.2, -0.8], size: 0.8, speed: 0.65, color: '#00cc6a' },
    { position: [0.2, 2.5, -2], size: 0.65, speed: 0.55, color: '#7dffd0' },
    { position: [0.8, -2.3, -1.8], size: 1.4, speed: 0.35, color: '#44ffc8' }
  ]), [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.1
    }

    shapeRefs.current.forEach((ref, index) => {
      if (!ref) {
        return
      }
      const direction = index % 2 === 0 ? 1 : -1
      ref.rotation.x += delta * 0.35 * direction
      ref.rotation.y += delta * 0.25
    })
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <Float
          key={index}
          speed={shape.speed}
          rotationIntensity={1.4}
          floatIntensity={1.8}
          position={shape.position}
        >
          <mesh ref={(el) => { shapeRefs.current[index] = el }}>
            <icosahedronGeometry args={[shape.size, 1]} />
            <meshStandardMaterial
              color={shape.color}
              emissive={shape.color}
              emissiveIntensity={0.25}
              wireframe
              roughness={0.15}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
      <Sparkles count={110} speed={0.2} size={2} color="#8affe0" scale={[22, 16, 10]} />
    </group>
  )
}

const ThreeBackground = () => {
  return (
    <div className="three-background" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.25} />
        <pointLight position={[6, 4, 5]} intensity={2.5} color="#00ff88" />
        <pointLight position={[-5, -4, -3]} intensity={1.2} color="#6effd0" />
        <FloatingCluster />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
