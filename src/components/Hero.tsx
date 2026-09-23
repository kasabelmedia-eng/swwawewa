import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onOpenLocations: () => void;
  onOpenMission: () => void;
}

interface Slide {
  eyebrow: string;
  headline: string;
  ctaText: string;
  action: 'order' | 'locations' | 'mission';
  image: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    eyebrow: 'HOT HONEY CHICKEN',
    headline: "Fall’s Warm\nWelcome",
    ctaText: 'Order now',
    action: 'order',
    image: '/src/assets/images/hero_autumn_warm_bowl_1790172024840.jpg',
    alt: 'Golden dressing drizzled over an autumn warm grain bowl with roasted chicken, sweet potatoes, and wild rice'
  },
  {
    eyebrow: 'EXPANDING COMMUNITIES',
    headline: 'Where should we\nopen next?',
    ctaText: 'Let us know',
    action: 'locations',
    image: '/src/assets/images/editorial_kitchen_chef_1790172066661.jpg',
    alt: 'Fresh culinary ingredients being prepared by chefs in an open restaurant kitchen'
  },
  {
    eyebrow: 'CAREERS & CULTURE',
    headline: 'Come join\nour team',
    ctaText: 'Find out more',
    action: 'mission',
    image: '/src/assets/images/bowl_harvest_chicken_1790172034842.jpg',
    alt: 'Freshly assembled organic harvest bowl crafted with seasonal ingredients'
  }
];

export function Hero({ onOrderClick, onOpenLocations, onOpenMission }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const activeSlide = SLIDES[currentSlideIndex];

  const handleCta = () => {
    if (activeSlide.action === 'order') onOrderClick();
    else if (activeSlide.action === 'locations') onOpenLocations();
    else if (activeSlide.action === 'mission') onOpenMission();
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f3e7]">
      {/* Container with high-res aspect ratio */}
      <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[720px]">
        {/* Photographic background */}
        <div className="absolute inset-0">
          <img
            src={activeSlide.image}
            alt={activeSlide.alt}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient vignette to guarantee contrast on left-anchored text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none md:block" />
        </div>

        {/* Anchored Text Panel (Left aligned bottom layout) */}
        <div className="relative max-w-[1240px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end pb-12 sm:pb-16 lg:pb-20">
          <div className="bg-[#f4f3e7]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 max-w-[540px] shadow-sm border border-[#00473c]/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#00473c] mb-3 sm:mb-4">
              {activeSlide.eyebrow}
            </p>

            {/* Giant Headline: 400 weight (regular), tight leading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-normal text-[#0e150e] leading-tight-display tracking-tight mb-6 sm:mb-8 whitespace-pre-line">
              {activeSlide.headline}
            </h1>

            {/* CTA + Navigation Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleCta}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#e6ff55] hover:bg-[#d6f040] text-[#0e150e] font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full shadow-xs active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Slider Dots & Arrows */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#00473c] flex items-center justify-center transition-colors cursor-pointer border border-[#00473c]/15"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#00473c] flex items-center justify-center transition-colors cursor-pointer border border-[#00473c]/15"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-1.5 mt-6">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentSlideIndex === idx
                      ? 'w-8 bg-[#00473c]'
                      : 'w-2 bg-[#00473c]/25 hover:bg-[#00473c]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
