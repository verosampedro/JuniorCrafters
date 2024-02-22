import { Canvas } from "@react-three/fiber";
import { Sky, Stars, Sparkles } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./Ground.jsx";
import { Cam } from "./Camera.jsx";
import { Player } from "./Player.jsx";
import { Cubes } from "./Cubes.jsx";
import { TextureSelector } from "./TextureSelected.jsx";
import "./FlipatedVerse.css";
function FlipatedVerse() {
  return (
    <div className="flipated-container">
      <Canvas>
        <Sky
          distance={450000}
          sunPosition={[0, 0, 1]}
          inclination={0}
          rayleigh={0.5}
          azimuth={65}
        />
        <Stars count={5000} color={0xff0000} />
        <Sparkles
          count={800} // Aumenta la cantidad de partículas para un efecto más denso
          speed={0.8} // Reduce la velocidad de las partículas
          opacity={0.7} // Reduce la opacidad para un efecto más sutil
          color={0xff0000} // rojas
          size={4} // Tamaño de las partículas
          scale={[8, 8, 8]} // Escala para expandir las partículas
          noise={[1, 1, 1]} // Factor de movimiento para crear variabilidad en la posición de las partículas
        />
        <Sparkles
          count={800} // Aumenta la cantidad de partículas para un efecto más denso
          speed={0.8} // Reduce la velocidad de las partículas
          opacity={0.7} // Reduce la opacidad para un efecto más sutil
          color={0x0000ff} // azul
          size={4} // Tamaño de las partículas
          scale={[8, 8, 8]} // Escala para expandir las partículas
          noise={[1, 1, 1]} // Factor de movimiento para crear variabilidad en la posición de las partículas
        />

        <ambientLight intensity={0.5} />
        <Cam />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div> {/* 💀 */}
      {/* <TextureSelector /> */}
    </div>
  );
}

export default FlipatedVerse;
