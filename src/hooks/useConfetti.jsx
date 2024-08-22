// hooks/useConfetti.js
import { useState } from 'react';
import useWindowSize from "react-use/lib/useWindowSize";

export function useConfetti() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  function startConfetti() {
    setShowConfetti(true);
    setFadeOut(false);
    setTimeout(() => setFadeOut(true), 3000);
    setTimeout(() => setShowConfetti(false), 5000);
  }

  return { showConfetti, fadeOut, width, height, startConfetti };
}
