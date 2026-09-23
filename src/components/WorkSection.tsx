import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function WorkSection() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setInquiryModalOpen(false);
        setEmail('');
        setCompany('');
      }, 2000);
    }
  };

  return (
    <section id="work-section" className="w-full bg-[#d8e5d6] py-16 sm:py-24 text-[#0e150e]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#00473c] mb-2">
            SWEETGREEN FOR WORK
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column (Left) */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal leading-tight-display text-[#0e150e] tracking-tight">
              All the ways we keep your workplace working
            </h2>

            <div className="space-y-6 text-[#0e150e]/90">
              {/* Catering */}
              <div className="border-b border-[#00473c]/15 pb-5">
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="text-lg font-bold text-[#00473c]">Catering</h3>
                  <span className="text-xs uppercase tracking-wider text-[#00473c]/70 font-semibold">10+ Guests</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[#0e150e]/80">
                  For the little things and the big milestones alike, we’re here to bring the plant party directly to your team with customizable bowl bars and boxed favorites.
                </p>
              </div>

              {/* Outpost */}
              <div className="border-b border-[#00473c]/15 pb-5">
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="text-lg font-bold text-[#00473c]">Outpost</h3>
                  <span className="text-xs uppercase tracking-wider text-[#00473c]/70 font-semibold">Free Daily Delivery</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[#0e150e]/80">
                  A daily batch delivery right to your office shelf to keep your team firing on all cylinders with zero delivery fees.
                </p>
              </div>

              {/* Still WFH? */}
              <div className="pb-2">
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="text-lg font-bold text-[#00473c]">Still WFH or Hybrid?</h3>
                  <span className="text-xs uppercase tracking-wider text-[#00473c]/70 font-semibold">Flexible Credits</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[#0e150e]/80">
                  Subsidized Sweetgreen digital credits so your team members can fuel up with wholesome meals at any Sweetgreen, wherever they are.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#00473c] hover:bg-[#00382f] text-[#f4f3e7] font-bold text-sm uppercase tracking-wider rounded-full shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Request Office Meal Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Media Column (Right) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#c9d9c7] shadow-sm">
              <img
                src="/src/assets/images/hero_autumn_warm_bowl_1790172024840.jpg"
                alt="Sweetgreen catering spread with assorted fresh salads, grain bowls, and dressings"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#00473c]/10 flex items-center justify-between text-xs text-[#00473c] font-semibold">
                <span>Scratch-prepared for offices & private gatherings</span>
                <span className="text-[#0e150e]/70">Zero hidden service fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {inquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#f4f3e7] rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#00473c]/20">
            <h3 className="text-2xl font-bold text-[#0e150e] mb-2">
              Sweetgreen for Business
            </h3>
            <p className="text-sm text-[#0e150e]/80 mb-6">
              Connect with our corporate meal specialist to unlock recurring team lunches, office Outposts, or event catering.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#00473c] mx-auto animate-in zoom-in" />
                <h4 className="text-lg font-bold text-[#0e150e]">Thank you!</h4>
                <p className="text-sm text-[#555555]">
                  Our catering concierge will reach out to your team within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#00473c] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-[#00473c]/20 text-[#0e150e] text-sm focus:outline-none focus:ring-2 focus:ring-[#00473c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#00473c] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Studios"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-[#00473c]/20 text-[#0e150e] text-sm focus:outline-none focus:ring-2 focus:ring-[#00473c]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-5 py-2.5 text-xs font-bold uppercase text-[#555555] hover:text-[#0e150e]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#e6ff55] hover:bg-[#d6f040] text-[#0e150e] text-xs font-extrabold uppercase tracking-wider rounded-full shadow-xs"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
