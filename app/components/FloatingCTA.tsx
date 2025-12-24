import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-700">
      <a 
        href="#" 
        className="flex items-center justify-center bg-brand-600 text-white font-bold w-32 h-32 rounded-full text-center text-sm shadow-2xl hover:bg-brand-700 hover:scale-105 transition-all border-4 border-white leading-tight p-2 flex-col gap-1 ring-2 ring-brand-200"
      >
        <span>7日間</span>
        <span className="text-base">無料</span>
        <span>トライアルを</span>
        <span>試してみる</span>
      </a>
    </div>
  );
};

export default FloatingCTA;