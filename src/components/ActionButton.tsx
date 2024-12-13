import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ActionButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function ActionButton({ onClick, children, variant = 'primary' }: ActionButtonProps) {
  const baseStyles = "group w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white hover:shadow-green-500/25",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white hover:shadow-gray-500/25 border border-gray-600"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}