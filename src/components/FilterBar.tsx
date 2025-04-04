import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FilterItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

const filters: FilterItem[] = [
  {
    id: 'amazing-views',
    label: 'Amazing views',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
      </svg>
    )
  },
  {
    id: 'beachfront',
    label: 'Beachfront',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M29.080 9.019V4.414a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v4.605a6.007 6.007 0 0 0-3.894 1.764l-6.89 6.891a2 2 0 0 0 0 2.828l3.879 3.879a2 2 0 0 0 2.828 0l6.89-6.891a6.007 6.007 0 0 0 1.764-3.894h4.605a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v4.605a6.007 6.007 0 0 0-3.894 1.764l-6.89 6.891a2 2 0 0 0 0 2.828l3.879 3.879a2 2 0 0 0 2.828 0l6.89-6.891a6.007 6.007 0 0 0 1.764-3.894h4.605a2 2 0 0 0 2-2z" />
      </svg>
    )
  },
  {
    id: 'cabins',
    label: 'Cabins',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M27.982 14.123L17.707 3.848a2 2 0 0 0-2.828 0L4.604 14.123a2 2 0 0 0-.586 1.414V28a2 2 0 0 0 2 2h20.95a2 2 0 0 0 2-2V15.537a2 2 0 0 0-.586-1.414zM12.707 27v-7.172a2 2 0 0 1 2-2h3.172a2 2 0 0 1 2 2V27h-7.172z" />
      </svg>
    )
  },
  {
    id: 'tiny-homes',
    label: 'Tiny homes',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M28.293 11.293L16.707 2.707a1 1 0 0 0-1.414 0L3.707 11.293A1 1 0 0 0 4 13h2v15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V13h2a1 1 0 0 0 .293-1.707zM18 26h-4v-8h4v8z" />
      </svg>
    )
  },
  {
    id: 'design',
    label: 'Design',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M20 8.847c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm7-13H5a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-20a3 3 0 0 0-3-3zm1 23a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-20a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v20z" />
      </svg>
    )
  }
];

export const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full px-4 md:px-8">
      {/* Left Arrow */}
      {showLeftArrow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          onClick={() => scroll('left')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </motion.button>
      )}

      {/* Filter Items */}
      <div
        ref={containerRef}
        className="flex gap-x-8 overflow-x-auto scrollbar-hide py-4"
        onScroll={checkScroll}
      >
          {filters.map((filter) => (
          <motion.button
              key={filter.id}
            whileHover={{ y: -2 }}
            onClick={() => setSelectedFilter(filter.id === selectedFilter ? null : filter.id)}
            className={`flex flex-col items-center min-w-[56px] transition-all duration-200 ${
              selectedFilter && selectedFilter !== filter.id ? 'opacity-60' : 'opacity-100'
            }`}
          >
            <div className={`p-2 ${selectedFilter === filter.id ? 'text-[#FF385C]' : 'text-gray-700'}`}>
              {filter.icon}
            </div>
            <span className={`text-xs whitespace-nowrap ${
              selectedFilter === filter.id 
                ? 'font-medium text-[#FF385C] border-b-2 border-[#FF385C]' 
                : 'text-gray-600'
            }`}>
              {filter.label}
            </span>
          </motion.button>
          ))}
        </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          onClick={() => scroll('right')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default FilterBar;
