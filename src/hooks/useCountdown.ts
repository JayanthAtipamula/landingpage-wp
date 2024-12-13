import { useState, useEffect, useCallback } from 'react';

export function useCountdown(initialSeconds: number, onComplete: () => void) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (seconds <= 0) {
      onComplete();
      return;
    }

    if (seconds <= 10) {
      setIsWarning(true);
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onComplete]);

  return { seconds, isWarning };
}