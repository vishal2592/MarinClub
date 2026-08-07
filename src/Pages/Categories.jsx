import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { 
  FaMagnifyingGlass, 
  FaGrip, 
  FaList, 
  FaArrowRight
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// Import your local images
import image1 from '../assets/images/smart Growth.jpg';
import image2 from '../assets/images/quickreturn.jpg';

const Categories = () => {
  const [viewMode, setViewMode] = useState('grid');

  // Updated categories array with image imports
  const categories = [
    {
      id: 1,
      name: 'Smart Growth',
      subtitle: 'Returns in 24 Hours',
      desc: 'Tap to explore',
      image: image1
    },
    {
      id: 2,
      name: 'Quick Return',
      subtitle: 'Return in hours',
      desc: 'Tap to explore',
      image: image2
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

          {/* View Toggles (Lime replaced with Purple/Pink Gradient) */}
          <div className="bg-dark-700 border border-border-glass rounded-xl p-1 flex items-center gap-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-sm transition-colors duration-200 ${viewMode === 'grid' ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-md shadow-accent-purple/20' : 'text-dark-muted hover:text-white'}`}
            >
              <FaGrip size={16} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg text-sm transition-colors duration-200 ${viewMode === 'list' ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-md shadow-accent-purple/20' : 'text-dark-muted hover:text-white'}`}
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
              className="bg-dark-600 border border-border-glass rounded-xl overflow-hidden group hover:border-accent-purple/40 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-accent-purple/5"
            >
              {/* Top Image Banner Section */}
              <div className="h-32 w-full overflow-hidden relative border-b border-border-glass">
                
                {/* Actual Image */}
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600 via-dark-600/50 to-transparent"></div>

                {/* Active Badge (No Lime, using Pink) */}
                <div className="absolute top-3 right-3 bg-accent-pink/10 border border-accent-pink/30 text-accent-pink text-[9px] font-bold px-2 py-0.5 rounded-full z-10">
                  Active
                </div>

                {/* Text Overlay on Image */}
                <div className="absolute bottom-3 left-4 z-10">
                  <h4 className="text-sm font-bold text-white drop-shadow-md tracking-tight">{category.name}</h4>
                  <p className="text-[9px] text-dark-muted drop-shadow-md">{category.subtitle}</p>
                </div>

              </div>

              {/* Bottom Content Section */}
              <div className="p-4 flex flex-col gap-1.5">
                <h3 className="text-[13px] font-bold text-white">{category.name}</h3>
                <p className="text-[9px] text-dark-muted">• Plans available</p>
                
                <div className="flex items-center justify-between w-full mt-1">
                  <span className="text-[9px] text-dark-muted font-medium">{category.desc}</span>
                  
                  <Link to='/smartgrowth'>
                    <button className="flex items-center gap-1 text-[11px] font-semibold text-accent-purple hover:text-accent-pink transition-colors duration-200 group-hover:translate-x-0.5 duration-200">
                      View Plans 
                      <FaArrowRight size={10} className="text-accent-purple/80" />
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