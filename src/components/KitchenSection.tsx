import { useState } from 'react';
import { Play, X, Sparkles } from 'lucide-react';

export function KitchenSection() {
  const [recipeOpen, setRecipeOpen] = useState(false);

  return (
    <section id="kitchen-section" className="w-full bg-[#e8dcc6] py-16 sm:py-24 text-[#0e150e]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Editorial Authority */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#00473c]">
              IN THE LAB
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-normal leading-tight-display text-[#0e150e] tracking-tight">
              Step inside the sweetgreen kitchen
            </h2>

            <p className="text-base sm:text-lg text-[#0e150e]/85 leading-relaxed font-normal">
              Every single morning, our team members chop crisp whole heads of romaine, roast sweet potatoes in avocado oil, and whisk small-batch dressings from scratch. Real food takes real craft.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setRecipeOpen(true)}
                className="ghost-link text-base text-[#00473c] font-bold group inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discover our scratch dressing recipe</span>
                <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Kitchen Media */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#ded0b6] shadow-sm group">
              <img
                src="/src/assets/images/editorial_kitchen_chef_1790172066661.jpg"
                alt="Chef in open kitchen prepping fresh organic herbs and crisp produce"
                className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={() => setRecipeOpen(true)}
                aria-label="Watch kitchen prep story"
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#f4f3e7]/90 text-[#00473c] flex items-center justify-center backdrop-blur-xs group-hover:scale-110 active:scale-95 transition-transform shadow-md">
                  <Play className="w-6 h-6 fill-[#00473c] translate-x-0.5" />
                </div>
              </button>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00473c] border border-[#00473c]/10">
                100% Scratch Kitchen
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Kitchen Story / Scratch Recipe Modal */}
      {recipeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#f4f3e7] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#00473c]/15 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-[#00473c]/10 mb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00473c]" />
                <h3 className="text-xl font-bold text-[#0e150e]">
                  The Scratch Kitchen Standard
                </h3>
              </div>
              <button
                onClick={() => setRecipeOpen(false)}
                className="w-8 h-8 rounded-full bg-white text-[#00473c] flex items-center justify-center hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#0e150e]/85">
              <p>
                Unlike conventional fast casual chains that buy plastic tubs of preserved salad dressing filled with seed oils, xantham gum, and artificial stabilizers, our dressings are blended fresh in store:
              </p>

              <div className="bg-[#d8e5d6]/60 rounded-xl p-4 space-y-2 border border-[#00473c]/10">
                <h4 className="font-bold text-[#00473c] text-xs uppercase tracking-wider">
                  Signature Lime Cilantro Jalapeño Blend
                </h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-[#0e150e]/80">
                  <li>Whole roasted jalapeños (seeded by hand)</li>
                  <li>Fresh cilantro bunches with stems</li>
                  <li>Pure cold-pressed lime juice</li>
                  <li>Extra virgin olive oil & avocado oil</li>
                  <li>Garlic cloves, sea salt & unrefined apple cider vinegar</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-3 bg-white/70 rounded-lg border border-[#00473c]/10">
                  <div className="text-lg font-bold text-[#00473c]">0g</div>
                  <div className="text-[11px] text-[#555555]">Seed Oils Used</div>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-[#00473c]/10">
                  <div className="text-lg font-bold text-[#00473c]">100%</div>
                  <div className="text-[11px] text-[#555555]">Whole Produce</div>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-[#00473c]/10">
                  <div className="text-lg font-bold text-[#00473c]">Daily</div>
                  <div className="text-[11px] text-[#555555]">Batch Whisked</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#00473c]/10 flex justify-end">
              <button
                onClick={() => setRecipeOpen(false)}
                className="px-6 py-2.5 bg-[#00473c] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#00382f]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
