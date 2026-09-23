import { X, HeartHandshake, Leaf, Sun, ShieldCheck } from 'lucide-react';

export function MissionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f4f3e7] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#00473c]/15"
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#00473c]/10 mb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#00473c]">OUR MISSION</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0e150e]">Building a transparent food system</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-[#00473c] flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-[#0e150e]/85 text-sm sm:text-base leading-relaxed">
          <p>
            Sweetgreen was founded in 2007 by Nicolas Jammet, Jonathan Neman, and Nathaniel Ru right out of college, operating out of a 560-square-foot converted tavern in Georgetown, Washington, D.C. The goal was simple: serve food that makes you feel good without sacrificing taste or sustainability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div className="p-4 rounded-2xl bg-[#d8e5d6]/70 border border-[#00473c]/10 space-y-2">
              <div className="flex items-center gap-2 text-[#00473c] font-bold">
                <Leaf className="w-5 h-5" />
                <span>Zero Seed Oils</span>
              </div>
              <p className="text-xs text-[#0e150e]/80">
                We cook exclusively with organic extra virgin olive oil and avocado oil. Zero canola, soybean, or synthetic cooking sprays.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#e8dcc6]/70 border border-[#00473c]/10 space-y-2">
              <div className="flex items-center gap-2 text-[#00473c] font-bold">
                <Sun className="w-5 h-5" />
                <span>Regenerative Agriculture</span>
              </div>
              <p className="text-xs text-[#0e150e]/80">
                Our grains and greens are sourced from regional farm networks that practice cover cropping, crop rotation, and soil renewal.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#e8dcc6]/70 border border-[#00473c]/10 space-y-2">
              <div className="flex items-center gap-2 text-[#00473c] font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>Animal Welfare</span>
              </div>
              <p className="text-xs text-[#0e150e]/80">
                All chicken is 100% antibiotic-free, free-roaming, and GAP animal welfare certified across all our restaurant kitchens.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#d8e5d6]/70 border border-[#00473c]/10 space-y-2">
              <div className="flex items-center gap-2 text-[#00473c] font-bold">
                <HeartHandshake className="w-5 h-5" />
                <span>Sweetgreen In Schools</span>
              </div>
              <p className="text-xs text-[#0e150e]/80">
                A non-profit education program providing fresh salad bars and hands-on nutritional literacy to public elementary schools.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#555555] pt-2">
            Every dollar you spend at Sweetgreen actively shifts consumer demand from industrialized monoculture toward regenerative farmers.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#00473c]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#00473c] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#00382f]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
