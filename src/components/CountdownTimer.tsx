import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  initialSeconds: number;
  onComplete: () => void;
}

export function CountdownTimer({ initialSeconds, onComplete }: CountdownTimerProps) {
  const { seconds, isWarning } = useCountdown(initialSeconds, onComplete);
  
  return (
    <div className="text-center space-y-4">
      <p className="text-base sm:text-lg text-gray-300 font-light">
        Exclusive Link For Workshop will expire in <span className="font-medium">{seconds}</span> seconds
      </p>
    
      <div className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 ${
        isWarning ? 'text-red-500' : 'text-green-400'
      }`}>
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
      </div>
    </div>
  );
}