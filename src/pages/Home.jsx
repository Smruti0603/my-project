// src/pages/Home.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshWobbleMaterial } from '@react-three/drei';

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-900 to-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Hey, I’m [Your Name]</h1>

      <div className="w-full h-96">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Sphere args={[1.5, 32, 32]} scale={1.5}>
            <MeshWobbleMaterial color="#8352FD" speed={2} factor={0.6} />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <p className="mt-8 max-w-xl px-4 text-center text-lg">
        I build cool 3D web experiences with React Three Fiber and Tailwind CSS.
      </p>
    </div>
  );
}
