import { useState } from 'react';
import { ArrowRight, Check, Smartphone } from 'lucide-react';

export function FooterCards() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@') && email.includes('.')) {
      setSubscribed(true);
      setError(false);
      setEmail('');
    } else {
      setError(true);
    }
  };

  return (
    <section className="w-full bg-[#f4f3e7] py-14 border-t border-[#00473c]/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Join Our Newsletter */}
          <div className="bg-[#d8e5d6]/70 rounded-[24px] p-8 sm:p-10 flex flex-col justify-between border border-[#00473c]/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0e150e] mb-3">
                Join Our Newsletter
              </h3>
              <p className="text-sm sm:text-base text-[#0e150e]/80 leading-relaxed mb-6">
                Sign up for exclusive promos, new seasonal menu drops, store openings, and culinary lab recipes.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 p-4 bg-white/90 rounded-xl text-[#00473c] text-sm font-semibold border border-[#00473c]/20 animate-in fade-in">
                <Check className="w-5 h-5 stroke-[2.5]" />
                <span>Thank you for subscribing! You’ll be hearing from us soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(false);
                    }}
                    placeholder="Email Address"
                    aria-label="Email address for newsletter"
                    className="w-full pl-5 pr-14 py-3.5 bg-white rounded-full border border-[#00473c]/20 text-[#0e150e] text-sm placeholder:text-[#555555]/70 focus:outline-none focus:ring-2 focus:ring-[#00473c]"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter subscription"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-11 h-11 rounded-full bg-[#00473c] hover:bg-[#00382f] text-[#f4f3e7] flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-red-600 pl-4 font-medium">
                    Please provide a valid email address.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Card 2: Download the App */}
          <div className="bg-[#e8dcc6]/70 rounded-[24px] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00473c]/10">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0e150e]">
                Download the app
              </h3>
              <p className="text-sm text-[#0e150e]/80 leading-relaxed max-w-xs">
                Customize bowls, order ahead for pickup or delivery, and earn Sweetpass rewards with every visit.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#download-ios"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert("Sweetgreen for iOS: Available on the Apple App Store.");
                  }}
                  className="px-5 py-2.5 bg-white text-[#00473c] hover:bg-[#00473c] hover:text-white text-xs font-bold uppercase tracking-wider rounded-full border border-[#00473c]/20 transition-colors"
                >
                  iOS
                </a>
                <a
                  href="#download-android"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert("Sweetgreen for Android: Available on Google Play.");
                  }}
                  className="px-5 py-2.5 bg-white text-[#00473c] hover:bg-[#00473c] hover:text-white text-xs font-bold uppercase tracking-wider rounded-full border border-[#00473c]/20 transition-colors"
                >
                  Android
                </a>
              </div>
            </div>

            {/* Visual Icon / Illustration */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white/80 p-4 border border-[#00473c]/15 flex flex-col items-center justify-center text-center shadow-xs shrink-0">
              <Smartphone className="w-10 h-10 text-[#00473c] mb-2" />
              <span className="text-[11px] font-extrabold uppercase text-[#00473c] tracking-wider">
                Sweetpass™
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
