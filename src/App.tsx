import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WorkSection } from './components/WorkSection';
import { KitchenSection } from './components/KitchenSection';
import { MissionBanner } from './components/MissionBanner';
import { FooterCards } from './components/FooterCards';
import { Footer } from './components/Footer';
import { LocationsModal } from './components/LocationsModal';
import { MissionModal } from './components/MissionModal';
import { NutritionModal } from './components/NutritionModal';
import { PRODUCTS, Product, Category, CartItem } from './data/products';
import { Check, Search } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category['id']>('salads');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Harvest Bowl pre-added for immediate realism
      quantity: 1,
      dressingChoice: 'regular'
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('SoHo - Mercer St');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'V' | 'GF'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter products by active category, search query, and dietary tag
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = p.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiet =
        dietaryFilter === 'all' || (p.dietaryTags && p.dietaryTags.includes(dietaryFilter));
      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  // Compute item count per category
  const itemCounts = useMemo(() => {
    const counts: Record<Category['id'], number> = {
      'salads': 0,
      'warm-bowls': 0,
      'sides': 0,
      'sweets': 0,
      'drinks': 0
    };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (
    product: Product,
    quantity: number,
    dressingChoice: 'light' | 'regular' | 'on-the-side' | 'heavy',
    instructions: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.dressingChoice === dressingChoice
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          dressingChoice,
          specialInstructions: instructions
        }
      ];
    });
    triggerToast(`Added ${quantity} × ${product.name} to bag`);
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(product, 1, 'regular', '');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
    triggerToast('Item removed from bag');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f3e7] text-[#0e150e] flex flex-col font-body selection:bg-[#e6ff55] selection:text-[#0e150e]">
      {/* Location pickup banner (slim, restrained, single-line) */}
      <div className="bg-[#00473c] text-[#f4f3e7] text-xs py-2 px-4">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between text-[11px] sm:text-xs tracking-wider">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#e6ff55] shrink-0" />
            <span className="font-semibold truncate">Ordering for Pickup at {selectedLocation}</span>
          </div>
          <button
            onClick={() => setLocationsOpen(true)}
            className="underline hover:text-[#e6ff55] cursor-pointer shrink-0 ml-4 font-bold uppercase tracking-wider"
          >
            Change
          </button>
        </div>
      </div>

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToMenu();
        }}
        onOpenLocations={() => setLocationsOpen(true)}
        onOpenMission={() => setMissionOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOrderClick={scrollToMenu}
          onOpenLocations={() => setLocationsOpen(true)}
          onOpenMission={() => setMissionOpen(true)}
        />

        {/* Menu Section */}
        <section id="menu-section" className="w-full bg-[#f4f3e7] pt-8 pb-20">
          {/* Category Navigation (Text-driven with active indicator dot) */}
          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            itemCounts={itemCounts}
          />

          {/* Sub-bar: Search & Dietary Filter */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#00473c]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ingredients, bowls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/80 rounded-full border border-[#00473c]/15 text-xs text-[#0e150e] placeholder:text-[#555555]/70 focus:outline-none focus:ring-2 focus:ring-[#00473c]"
              />
            </div>

            {/* Dietary Filter Segmented Control */}
            <div className="flex items-center gap-1 self-start sm:self-auto bg-white/80 border border-[#00473c]/15 rounded-full p-1 text-xs">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#00473c] text-white font-bold'
                    : 'text-[#555555] hover:text-[#0e150e]'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setDietaryFilter('V')}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  dietaryFilter === 'V'
                    ? 'bg-[#00473c] text-white font-bold'
                    : 'text-[#555555] hover:text-[#0e150e]'
                }`}
              >
                Plant-Based (V)
              </button>
              <button
                onClick={() => setDietaryFilter('GF')}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  dietaryFilter === 'GF'
                    ? 'bg-[#00473c] text-white font-bold'
                    : 'text-[#555555] hover:text-[#0e150e]'
                }`}
              >
                Gluten-Free (GF)
              </button>
            </div>
          </div>

          {/* Product Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center text-[#555555]">
                <p className="text-base font-semibold text-[#00473c]">No items found matching your criteria</p>
                <p className="text-xs mt-1">Try clearing your search query or dietary filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                  }}
                  className="mt-4 px-5 py-2 bg-[#00473c] text-white text-xs font-bold rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                    onQuickAdd={handleQuickAdd}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 1: Sweetgreen for Work (Sage Mist #d8e5d6) */}
        <WorkSection />

        {/* Section 2: In the Kitchen (Warm Sand #e8dcc6) */}
        <KitchenSection />

        {/* Section 3: Sourcing & Mission Values (Cream Canvas #f4f3e7) */}
        <MissionBanner onLearnMore={() => setMissionOpen(true)} />

        {/* Section 4: Newsletter & App Download Cards */}
        <FooterCards />
      </main>

      {/* Footer */}
      <Footer
        onOpenLocations={() => setLocationsOpen(true)}
        onOpenMission={() => setMissionOpen(true)}
        onOpenNutrition={() => setNutritionOpen(true)}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <LocationsModal
        isOpen={locationsOpen}
        onClose={() => setLocationsOpen(false)}
        onSelectStore={(name) => {
          setSelectedLocation(name);
          triggerToast(`Pickup location set to ${name}`);
        }}
      />

      <MissionModal
        isOpen={missionOpen}
        onClose={() => setMissionOpen(false)}
      />

      <NutritionModal
        isOpen={nutritionOpen}
        onClose={() => setNutritionOpen(false)}
      />

      {/* Quick feedback toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#00473c] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2.5 text-xs font-bold tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#e6ff55] stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
