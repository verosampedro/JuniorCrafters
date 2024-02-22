// Cube.js
import React, { useState } from 'react';
import { useBox } from '@react-three/cannon';
import * as textures from './images/textures';
import { useStore } from './hooks/useStore';

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { removeCube } = useStore();

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textures[texture + 'Texture'];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture}
        attach='material'
      />
    </mesh>
  );
};
