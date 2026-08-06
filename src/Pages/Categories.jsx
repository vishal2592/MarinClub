import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { 
  FaMagnifyingGlass, 
  FaGrip, 
  FaList, 
  FaCrown, 
  FaShieldHalved, 
  FaChartLine, 
  FaCoins, 
  FaBullseye, 
  FaClock, 
  FaBolt, 
  FaArrowRight
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    {
      id: 1,
      name: 'Smart Growth',
      subtitle: 'Returns in 24 Hours',
      desc: 'Tap to explore',
      lines: [
        { prefix: 'SMART', suffix: 'GROWTH', gradient: 'from-accent-cyan to-accent-purple' },
      ],
      features: [
        { icon: <FaClock />, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
        { icon: <FaShieldHalved />, color: 'text-accent-gold', bg: 'bg-accent-gold/10' },
        { icon: <FaChartLine />, color: 'text-accent-purple', bg: 'bg-accent-purple/10' },
        { icon: <FaCoins />, color: 'text-accent-lime', bg: 'bg-accent-lime/10' },
      ]
    },
    {
      id: 2,
      name: 'Quick Return',
      subtitle: 'Return in hours',
      desc: 'Tap to explore',
      lines: [
        { prefix: 'QUICK', suffix: 'RETURN', gradient: 'from-accent-purple to-accent-pink' },
      ],
      features: [
        { icon: <FaBolt />, color: 'text-accent-gold', bg: 'bg-accent-gold/10' },
        { icon: <FaBullseye />, color: 'text-accent-pink', bg: 'bg-accent-pink/10' },
        { icon: <FaShieldHalved />, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
        { icon: <FaCoins />, color: 'text-accent-lime', bg: 'bg-accent-lime/10' },
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Top Search & View Toggle Row --- */}
        <div className="flex items-center gap-3">
          
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted">
              <FaMagnifyingGlass size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Search categories..." 
              className="w-full bg-dark-700 border border-border-glass rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/40 transition-colors"
            />
          </div>

          {/* View Toggles */}
          <div className="bg-dark-700 border border-border-glass rounded-xl p-1 flex items-center gap-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-sm transition-colors duration-200 ${viewMode === 'grid' ? 'bg-accent-lime text-dark-900 shadow-sm' : 'text-dark-muted hover:text-white'}`}
            >
              <FaGrip size={16} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg text-sm transition-colors duration-200 ${viewMode === 'list' ? 'bg-accent-lime text-dark-900 shadow-sm' : 'text-dark-muted hover:text-white'}`}
            >
              <FaList size={16} />
            </button>
          </div>
        </div>

        {/* --- Categories Grid --- */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative bg-dark-600 border border-border-glass rounded-2xl overflow-hidden hover:bg-dark-700 hover:border-accent-purple/30 transition-all duration-300 group"
            >
              {/* Top Banner Section */}
              <div className="bg-gradient-to-br from-dark-800 to-dark-600 p-4 relative flex flex-col h-36 border-b border-border-glass">
                
                {/* Active Badge */}
                <div className="absolute top-3 right-3 bg-accent-lime/10 border border-accent-lime/30 text-accent-lime text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Active
                </div>

                {/* Big Banners Text */}
                <div className="mt-4 flex flex-col">
                  {category.lines.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span className={`text-xl font-black tracking-tighter bg-gradient-to-r ${line.gradient} bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
                        {line.prefix}
                      </span>
                      <span className={`text-xl font-black tracking-tighter bg-gradient-to-r ${line.gradient} bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
                        {line.suffix}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Small Feature Icons Below Text */}
                <div className="flex items-center gap-2 mt-auto z-10">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className={`w-6 h-6 rounded-full ${feature.bg} flex items-center justify-center ${feature.color} text-[9px] border border-white/5`}>
                      {feature.icon}
                    </div>
                  ))}
                </div>

                {/* Background faint crown icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-6xl select-none">
                  <FaCrown />
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="p-4 flex flex-col items-start gap-1">
                <h3 className="text-sm font-bold text-white">{category.name}</h3>
                <p className="text-[11px] text-dark-muted">{category.subtitle}</p>
                
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-[9px] text-dark-muted font-medium">{category.desc}</span>
                 <Link to='/smartgrowth'>
                   <button className="flex items-center gap-1 text-[11px] font-semibold text-accent-lime hover:text-accent-lime/80 transition-colors group-hover:translate-x-0.5 duration-200">
                    View Plans 
                    <FaArrowRight size={10} className="text-accent-lime/80" />
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
};

export default Categories;