import { useEffect, useState } from 'react';
import { UserCircle2 } from 'lucide-react';

const names = [
  'Priya Sharma',
  'Rahul Patel',
  'Ananya Singh',
  'Arjun Kumar',
  'Neha Gupta',
  'Ravi Verma',
  'Meera Reddy',
  'Arun Mehta',
  'Kavita Iyer',
  'Deepak Nair',
  'Pooja Malhotra',
  'Sanjay Desai'
];

const timeFrames = ['just now', '1 min ago', '2 mins ago', '3 mins ago', '5 mins ago'];

export function SocialProof() {
  const [notification, setNotification] = useState({ name: '', time: '', isVisible: false });

  useEffect(() => {
    const showNotification = () => {
      // Hide current notification
      setNotification(prev => ({ ...prev, isVisible: false }));

      // Wait for exit animation, then show new notification
      setTimeout(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomTime = timeFrames[Math.floor(Math.random() * timeFrames.length)];
        setNotification({ name: randomName, time: randomTime, isVisible: true });
      }, 500);
    };

    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomTime = timeFrames[Math.floor(Math.random() * timeFrames.length)];
      setNotification({ name: randomName, time: randomTime, isVisible: true });
    }, 2000);

    // Show new notification every 7 seconds
    const interval = setInterval(showNotification, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification.name) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-3 
      rounded-lg border border-gray-700/50 shadow-xl transition-all duration-500 ease-in-out
      hover:scale-105 hover:border-green-500/30
      ${notification.isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <UserCircle2 className="w-8 h-8 text-green-400" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full 
            animate-pulse ring-2 ring-gray-800" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">
            <span className="font-medium bg-gradient-to-r from-green-400 to-green-600 
              bg-clip-text text-transparent">{notification.name}</span>
            <span className="ml-1">joined the workshop group</span>
          </p>
          <span className="text-xs text-gray-400">{notification.time}</span>
        </div>
      </div>
    </div>
  );
} 