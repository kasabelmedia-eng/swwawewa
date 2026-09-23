import { CATEGORIES, Category } from '../data/products';

interface CategoryTabsProps {
  selectedCategory: Category['id'];
  onSelectCategory: (id: Category['id']) => void;
  itemCounts: Record<Category['id'], number>;
}

export function CategoryTabs({ selectedCategory, onSelectCategory, itemCounts }: CategoryTabsProps) {
  return (
    <div className="w-full border-b border-[#00473c]/10 pb-4 pt-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal scroll container with hidden scrollbars */}
        <div className="flex items-baseline space-x-8 sm:space-x-12 overflow-x-auto no-scrollbar scroll-smooth py-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col items-center cursor-pointer pb-2 transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00473c] rounded-md px-1`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-2xl sm:text-3xl lg:text-4xl font-normal transition-colors ${
                      isActive
                        ? 'text-[#00473c] font-medium'
                        : 'text-[#00473c]/45 hover:text-[#00473c]'
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={`text-xs tabular-nums font-semibold px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive ? 'bg-[#00473c]/10 text-[#00473c]' : 'text-[#00473c]/30'
                    }`}
                  >
                    {itemCounts[cat.id] || 0}
                  </span>
                </div>

                {/* The Sweetgreen Active State: a discreet dot beneath the category title, not a bulky pill */}
                <div className="h-2 flex items-center justify-center mt-2">
                  {isActive ? (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00473c] transition-all animate-in zoom-in-50 duration-200" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#00473c]/20 transition-all" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
