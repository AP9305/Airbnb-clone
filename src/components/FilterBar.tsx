
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type FilterOption = {
  id: string;
  label: string;
  icon: string;
};

const filters: FilterOption[] = [
  { id: 'amazing-views', label: 'Amazing views', icon: '🏞️' },
  { id: 'beachfront', label: 'Beachfront', icon: '🏖️' },
  { id: 'cabins', label: 'Cabins', icon: '🌲' },
  { id: 'tiny-homes', label: 'Tiny homes', icon: '🏠' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'countryside', label: 'Countryside', icon: '🌄' },
  { id: 'luxe', label: 'Luxe', icon: '✨' },
  { id: 'treehouses', label: 'Treehouses', icon: '🌳' },
  { id: 'camping', label: 'Camping', icon: '⛺' },
  { id: 'lakefront', label: 'Lakefront', icon: '🏞️' },
  { id: 'skiing', label: 'Skiing', icon: '⛷️' },
  { id: 'castles', label: 'Castles', icon: '🏰' },
  { id: 'tropical', label: 'Tropical', icon: '🌴' },
  { id: 'historic', label: 'Historic homes', icon: '🏛️' },
];

const FilterBar = ({ onChange }: { onChange?: (activeFilters: string[]) => void }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    const newActiveFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(id => id !== filterId)
      : [...activeFilters, filterId];
    
    setActiveFilters(newActiveFilters);
    onChange?.(newActiveFilters);
  };

  return (
    <div className="py-4 border-b border-gray-200">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 px-4">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="outline"
              className={`
                flex items-center space-x-2 rounded-full px-4 py-2 text-sm
                ${activeFilters.includes(filter.id) 
                  ? 'bg-airbnb-dark text-white border-airbnb-dark'
                  : 'bg-white text-airbnb-dark border-gray-200 hover:border-gray-900'
                }
              `}
              onClick={() => toggleFilter(filter.id)}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FilterBar;
