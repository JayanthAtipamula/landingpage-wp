import React from 'react';

export function Avatar() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500/20 shadow-xl">
          <img
            src="https://i.ibb.co/JKv2ZhK/14d8e259-9156-48b1-a78c-901696837fde.jpg"
            alt="Mentor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-green-500 text-white text-sm rounded-full shadow-lg">
            Mentor
          </span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white">GVS ANIRUDH SREEVATSAV</h3>
        <p className="text-gray-300 text-sm">TECHNICAL TRAINER</p>
      </div>
    </div>
  );
}