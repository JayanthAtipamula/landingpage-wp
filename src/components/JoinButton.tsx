import { MessageCircle } from 'lucide-react';

interface JoinButtonProps {
  onClick: () => void;
}

export function JoinButton({ onClick }: JoinButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 bg-green-500 text-white font-medium rounded-lg 
      hover:bg-green-600 transition-all duration-300 animate-pulse
      before:absolute before:inset-0 before:rounded-lg before:bg-green-500/50
      before:animate-[glow_2s_ease-in-out_infinite] before:z-[-1]
      flex items-center gap-2"
    >
      <MessageCircle className="w-5 h-5" />
      <span>Join WhatsApp Group</span>
    </button>
  );
}