import React from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { GlassCard } from './components/GlassCard';
import { JoinButton } from './components/JoinButton';
import { Logo } from './components/Logo';
import { TopicsList } from './components/TopicsList';
import { TargetAudience } from './components/TargetAudience';
import { Avatar } from './components/Avatar';
import { SocialProof } from './components/SocialProof';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/EK79g6A2eZ9J0x3ZVscoJn';
const INITIAL_SECONDS = 60;

function App() {
  const handleComplete = () => {
    window.location.href = WHATSAPP_LINK;
  };

  const handleJoinClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        <GlassCard>
          <Logo />
          <div className="text-center space-y-4">
            <div className="inline-block">
              <h2 className="text-lg sm:text-xl font-bold mb-2 tracking-wide bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text px-4 py-1 rounded-full border border-green-500/20">
                FREE FREE FREE
              </h2>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            FULL STACK DEVELOPMENT WORKSHOP
            </h1>
            <CountdownTimer
              initialSeconds={INITIAL_SECONDS}
              onComplete={handleComplete}
            />
            
            <div className="flex justify-center px-4 sm:px-0 pt-4">
              <JoinButton onClick={handleJoinClick} />
            </div>
          </div>

          <div className="mt-12 mb-12">
            <Avatar />
          </div>

          <div className="space-y-12">
            <TopicsList onJoinClick={handleJoinClick} />
            <TargetAudience onJoinClick={handleJoinClick} />
          </div>
        </GlassCard>
        <SocialProof />
      </div>
    </div>
  );
}

export default App;