import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Digit1: "picture-1",
  Digit2: "picture-2",
  Digit3: "picture-3",
  Digit4: "picture-4",
  Digit5: "picture-5",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    category1: false,
    second: false,
    third: false,
    wood: false,
    log: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];

      if (action) {
        // if (actions[action]) return

        setActions((prevActions) => ({
          ...prevActions,
          [action]: true,
        }));
      }
    };

    const handleKeyUp = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];

      if (action) {
        setActions((prevActions) => ({
          ...prevActions,
          [action]: false,
        }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};
