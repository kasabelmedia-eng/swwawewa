import { SweetgreenLogo } from './SweetgreenLogo';

interface FooterProps {
  onOpenLocations: () => void;
  onOpenMission: () => void;
  onOpenNutrition: () => void;
}

export function Footer({ onOpenLocations, onOpenMission, onOpenNutrition }: FooterProps) {
  return (
    <footer className="w-full bg-[#d8e5d6] text-[#00473c] border-t border-[#00473c]/15 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand statement */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 border-b border-[#00473c]/15 gap-4">
          <SweetgreenLogo className="h-6 w-auto text-[#00473c]" />
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00473c]/80">
            Inspiring healthier communities by connecting people to real food.
          </p>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs sm:text-sm">
          {/* Col 1: About Us */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-xs text-[#00473c]">
              About Us
            </h4>
            <ul className="space-y-2 text-[#00473c]/80 font-medium">
              <li>
                <button onClick={onOpenMission} className="hover:text-[#00473c] hover:underline cursor-pointer">
                  Our Mission & Sourcing
                </button>
              </li>
              <li>
                <button onClick={onOpenLocations} className="hover:text-[#00473c] hover:underline cursor-pointer">
                  Store Locations
                </button>
              </li>
              <li>
                <a href="#careers" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Careers: Join our kitchen and corporate teams nationwide."); }} className="hover:text-[#00473c] hover:underline">
                  Careers & Culture
                </a>
              </li>
              <li>
                <a href="#investor" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Investor Relations (NYSE: SG)."); }} className="hover:text-[#00473c] hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#press" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Press & Media inquiries."); }} className="hover:text-[#00473c] hover:underline">
                  Press & Releases
                </a>
              </li>
              <li>
                <span className="text-[#00473c]/50">The Hex Bowl™</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Social Media */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-xs text-[#00473c]">
              Social Media
            </h4>
            <ul className="space-y-2 text-[#00473c]/80 font-medium">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#00473c] hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#00473c] hover:underline">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#00473c] hover:underline">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-[#00473c] hover:underline">
                  Spotify Playlists
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#00473c] hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support + Services */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-xs text-[#00473c]">
              Support + Services
            </h4>
            <ul className="space-y-2 text-[#00473c]/80 font-medium">
              <li>
                <button onClick={onOpenNutrition} className="hover:text-[#00473c] hover:underline cursor-pointer">
                  Nutrition + Allergens Guide
                </button>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); alert("Customer Support: sweetgreen guest assistance is available 7 days a week."); }} className="hover:text-[#00473c] hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#gift-cards" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Digital & Physical Gift Cards."); }} className="hover:text-[#00473c] hover:underline">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#catering" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Catering: Pre-order group meals online."); }} className="hover:text-[#00473c] hover:underline">
                  Catering Direct
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Privacy */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-xs text-[#00473c]">
              Legal
            </h4>
            <ul className="space-y-2 text-[#00473c]/80 font-medium">
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Privacy Policy."); }} className="hover:text-[#00473c] hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Terms of Use."); }} className="hover:text-[#00473c] hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#privacy-choices" onClick={(e) => { e.preventDefault(); alert("Your Privacy Choices: All preferences managed in accordance with state laws."); }} className="hover:text-[#00473c] hover:underline">
                  Your Privacy Choices
                </a>
              </li>
              <li>
                <a href="#accessibility" onClick={(e) => { e.preventDefault(); alert("Sweetgreen Accessibility Statement."); }} className="hover:text-[#00473c] hover:underline">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#rewards-terms" onClick={(e) => { e.preventDefault(); alert("SG Rewards Program Terms."); }} className="hover:text-[#00473c] hover:underline">
                  SG Rewards Program Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#00473c]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#00473c]/70">
          <p>© 2026 sweetgreen inc.</p>
          <p>Sweetgreen® and the Hex Bowl™ are registered trademarks of Sweetgreen, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
