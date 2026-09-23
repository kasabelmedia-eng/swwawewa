export function MissionBanner({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <section className="w-full bg-[#f4f3e7] py-20 border-t border-b border-[#00473c]/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#00473c] mb-4">
          THE SWEETGREEN STANDARD
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-normal leading-tight-display text-[#0e150e] max-w-4xl mx-auto tracking-tight mb-8">
          Food that connects people to the land, growers, and each other.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-6 text-left">
          <div className="space-y-2 border-t border-[#00473c]/20 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00473c]">01. Farm Direct</span>
            <p className="text-sm text-[#0e150e]/80 leading-relaxed">
              We partner with over 200 regenerative and organic farmers who prioritize soil health, biodiverse crops, and seasonal growing cycles.
            </p>
          </div>

          <div className="space-y-2 border-t border-[#00473c]/20 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00473c]">02. 100% Scratch Prep</span>
            <p className="text-sm text-[#0e150e]/80 leading-relaxed">
              No freezers, no can openers, no artificial stabilizers. Fresh produce arrives whole at 6am and is prepped by human hands.
            </p>
          </div>

          <div className="space-y-2 border-t border-[#00473c]/20 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00473c]">03. Healthy Communities</span>
            <p className="text-sm text-[#0e150e]/80 leading-relaxed">
              From school salad bar donations to carbon-transparent menu items, we build sustainable food systems from the ground up.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={onLearnMore}
            className="ghost-link text-sm uppercase tracking-wider font-bold text-[#00473c]"
          >
            <span>Read our annual impact report</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
