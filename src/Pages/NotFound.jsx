import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHouse } from 'react-icons/fa6'; // <--- FIX: Changed FaHome to FaHouse

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-dark-700 border border-border-glass flex items-center justify-center">
            <span className="text-xs font-bold text-white">M</span>
          </div>
          <span className="text-lg font-bold text-white">Marin Club</span>
        </div>

        {/* Animated Line Chart (SVG) */}
        <div className="w-64 h-24 mb-6 relative">
          <svg viewBox="0 0 200 80" className="w-full h-full">
            {/* Rise (Solid Lime) */}
            <path d="M 20 60 L 50 35 L 80 45 L 110 20 L 140 15" fill="none" stroke="#d1f542" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Fall (Dashed Pink) */}
            <path d="M 140 15 L 160 40 L 180 30 L 200 55" fill="none" stroke="#ec4899" strokeWidth="3" strokeDasharray="5,5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Peak Dot (Pink) */}
            <circle cx="140" cy="15" r="5" fill="#ec4899" />
            {/* Peak Glow */}
            <circle cx="140" cy="15" r="10" fill="#ec4899" fillOpacity="0.3" />
          </svg>
        </div>

        {/* Main 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black text-accent-cyan tracking-tighter drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          404
        </h1>

        {/* Signal Lost Badge */}
        <div className="mt-2 mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-pink/10 border border-accent-pink/30 text-accent-pink text-[10px] font-semibold">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          Signal Lost
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl font-bold text-white mb-2">This page went off the charts</h2>
        <p className="text-dark-muted text-sm leading-relaxed max-w-sm">
          The page you're looking for doesn't exist, moved, or never listed in the first place. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-8 w-full sm:w-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-dark-700 border border-border-glass hover:bg-dark-600 hover:border-accent-cyan/40 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
          >
            <FaArrowLeft size={14} /> Go Back
          </button>
          <Link 
            to="/home"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-accent-lime hover:bg-accent-lime/80 text-dark-900 px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-accent-lime/20 hover:shadow-accent-lime/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaHouse size={14} className="text-dark-900/60" /> Back to Home {/* <--- FIX: Changed FaHome to FaHouse here too */}
          </Link>
        </div>

        {/* Footer Error Code */}
        <div className="mt-10 text-[10px] text-dark-muted/60 font-mono tracking-widest flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-dark-muted/20"></span>
          ERROR CODE - 404 - NOT FOUND
          <span className="w-1 h-1 rounded-full bg-dark-muted/20"></span>
        </div>

      </div>
    </div>
  );
};

export default NotFound;