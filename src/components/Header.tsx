import { useState } from 'react';
import { SweetgreenLogo } from './SweetgreenLogo';
import { ShoppingBag, Menu as MenuIcon, X, MapPin } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (category: 'salads' | 'warm-bowls' | 'sides' | 'sweets' | 'drinks') => void;
  onOpenLocations: () => void;
  onOpenMission: () => void;
}

export function Header({
  cartCount,
  onOpenCart,
  onSelectCategory,
  onOpenLocations,
  onOpenMission
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToMenu = (cat?: 'salads' | 'warm-bowls' | 'sides' | 'sweets' | 'drinks') => {
    if (cat) onSelectCategory(cat);
    const menuEl = document.getElementById('menu-section');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f4f3e7]/95 backdrop-blur-md border-b border-[#00473c]/10 transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Zone */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00473c]"
            aria-label="sweetgreen homepage"
          >
            <SweetgreenLogo className="h-5 sm:h-6 w-auto text-[#00473c] hover:opacity-90 transition-opacity" />
          </a>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center space-x-7 text-[13px] font-bold tracking-wider uppercase text-[#00473c]">
          <button
            onClick={() => scrollToMenu()}
            className="hover:text-[#00473c]/70 transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00473c] hover:after:w-full after:transition-all"
          >
            Our Menu
          </button>
          <button
            onClick={onOpenMission}
            className="hover:text-[#00473c]/70 transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00473c] hover:after:w-full after:transition-all"
          >
            Our Mission
          </button>
          <button
            onClick={() => scrollToSection('work-section')}
            className="hover:text-[#00473c]/70 transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00473c] hover:after:w-full after:transition-all"
          >
            Outpost & Catering
          </button>
          <button
            onClick={() => scrollToSection('kitchen-section')}
            className="hover:text-[#00473c]/70 transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00473c] hover:after:w-full after:transition-all"
          >
            The Kitchen
          </button>
          <button
            onClick={onOpenLocations}
            className="hover:text-[#00473c]/70 transition-colors cursor-pointer py-1 flex items-center gap-1.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00473c] hover:after:w-full after:transition-all"
          >
            <MapPin className="w-3.5 h-3.5 text-[#00473c]" />
            Locations
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label={`Shopping bag with ${cartCount} items`}
            className="relative p-2 text-[#00473c] hover:bg-[#00473c]/5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#e6ff55] text-[#0e150e] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-[#00473c]/30 shadow-xs tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => scrollToMenu()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#00473c] border-2 border-[#00473c] rounded-full hover:bg-[#00473c] hover:text-[#f4f3e7] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            Order
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#00473c] hover:bg-[#00473c]/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f4f3e7] border-b border-[#00473c]/15 px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToMenu()}
              className="text-left text-lg font-semibold text-[#00473c] py-2 border-b border-[#00473c]/10"
            >
              Our Menu
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMission();
              }}
              className="text-left text-lg font-semibold text-[#00473c] py-2 border-b border-[#00473c]/10"
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollToSection('work-section')}
              className="text-left text-lg font-semibold text-[#00473c] py-2 border-b border-[#00473c]/10"
            >
              Sweetgreen for Work & Catering
            </button>
            <button
              onClick={() => scrollToSection('kitchen-section')}
              className="text-left text-lg font-semibold text-[#00473c] py-2 border-b border-[#00473c]/10"
            >
              In the Kitchen
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocations();
              }}
              className="text-left text-lg font-semibold text-[#00473c] py-2 border-b border-[#00473c]/10 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#00473c]" />
              Find a Location
            </button>

            <div className="pt-2">
              <button
                onClick={() => scrollToMenu()}
                className="w-full py-3 bg-[#e6ff55] text-[#0e150e] font-bold text-sm uppercase tracking-wider rounded-full shadow-xs hover:bg-[#d6f040] transition-colors"
              >
                Start Your Order
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
