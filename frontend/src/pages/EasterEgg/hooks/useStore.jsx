// useStore.js
import create from "zustand";

import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "category1",
  cubes: [
    {
      id: nanoid(),
      pos: [8, 0, 2],  // Cambiado a [2, 0, 2]
      texture: "first",
    },
    {
      id: nanoid(),
      pos: [8, 0, 6],  // Cambiado a [6, 0, 4]
      texture: "second",
    },
    {
      id: nanoid(),
      pos: [8, 0, 10],  // Cambiado a [8, 0, 6]
      texture: "third",
    },
    {
      id: nanoid(),
      pos: [8, 0, 14], // Cambiado a [10, 0, 8]
      texture: "fourth",
    },
    {
      id: nanoid(),
      pos: [8, 0, 18],// Cambiado a [12, 0, 10]
      texture: "fifth",
    },
  ],

  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          pos: [x, y, z],
        },
      ],
    }));
  },

  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }));
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
