// useStore.js
import create from 'zustand';

import { nanoid } from 'nanoid';

export const useStore = create((set) => ({
  texture: 'skull',
  cubes: [
    {
      id: nanoid(),
      pos: [1, 1, 1],
      texture: 'skull',
    },
    {
      id: nanoid(),
      pos: [3, 1, 1],
      texture: 'seeking',
    },
    {
      id: nanoid(),
      pos: [2, 1, 1],
      texture: 'redStairs',
    },
  ],

  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        texture: state.texture,
        pos: [x, y, z],
      }],
    }));
  },

  removeCube: (id) => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },
  
  setTexture: (newTexture) => {
    set({ texture: newTexture });
  },

  saveWorld: () => {
    // Implement saveWorld logic here
  },
  resetWorld: () => {
    // Implement resetWorld logic here
  },
}));
