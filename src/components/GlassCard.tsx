import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
}

export function GlassCard({ children }: GlassCardProps) {
  return (
    <div className="relative backdrop-blur-lg bg-gray-900/50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto">{children}</div>
    </div>
  );
}