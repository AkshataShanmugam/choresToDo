import { useState } from 'react';

function useConfetti() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  function startConfetti() {
    setShowConfetti(true);
    setFadeOut(false);

    setTimeout(() => setFadeOut(true), 3000);
    setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
  }

  return { showConfetti, fadeOut, startConfetti };
}

export default useConfetti;
