import { useState } from 'react';
import { X, MapPin, Clock, Phone, Navigation } from 'lucide-react';

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStore: (storeName: string) => void;
}

const STORES = [
  {
    id: 'soho-ny',
    name: 'SoHo - Mercer St',
    address: '101 Mercer St, New York, NY 10012',
    hours: '10:30 AM - 9:30 PM Today',
    status: 'Open now',
    phone: '(212) 555-0192',
    distance: '0.4 mi'
  },
  {
    id: 'nomad-ny',
    name: 'NoMad - Broadway',
    address: '1164 Broadway, New York, NY 10001',
    hours: '10:30 AM - 10:00 PM Today',
    status: 'Open now',
    phone: '(212) 555-0144',
    distance: '1.2 mi'
  },
  {
    id: 'williamsburg-bk',
    name: 'Williamsburg - N 4th',
    address: '162 N 4th St, Brooklyn, NY 11211',
    hours: '10:30 AM - 9:30 PM Today',
    status: 'Open now',
    phone: '(718) 555-0188',
    distance: '2.1 mi'
  },
  {
    id: 'dumbo-bk',
    name: 'DUMBO - Front St',
    address: '81 Front St, Brooklyn, NY 11201',
    hours: '10:30 AM - 9:00 PM Today',
    status: 'Open now',
    phone: '(718) 555-0112',
    distance: '2.8 mi'
  }
];

export function LocationsModal({ isOpen, onClose, onSelectStore }: LocationsModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState('soho-ny');

  if (!isOpen) return null;

  const filteredStores = STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f4f3e7] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-[#00473c]/15 flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#00473c]/15 flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#00473c]" />
            <h3 className="text-xl font-bold text-[#0e150e]">Nearby Sweetgreen Restaurants</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f4f3e7] text-[#00473c] flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-[#00473c]/10 bg-[#f4f3e7]">
          <input
            type="text"
            placeholder="Search by city, neighborhood, or zip..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 bg-white rounded-full border border-[#00473c]/20 text-sm text-[#0e150e] focus:outline-none focus:ring-2 focus:ring-[#00473c]"
          />
        </div>

        {/* Store List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              onClick={() => setSelectedId(store.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedId === store.id
                  ? 'bg-[#d8e5d6]/70 border-[#00473c] shadow-xs'
                  : 'bg-white/70 border-[#00473c]/10 hover:border-[#00473c]/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0e150e]">{store.name}</h4>
                  <p className="text-xs text-[#0e150e]/80 mt-0.5">{store.address}</p>
                </div>
                <span className="text-xs font-bold text-[#00473c] bg-white px-2.5 py-1 rounded-full border border-[#00473c]/15">
                  {store.distance}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-3 text-xs text-[#555555]">
                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>{store.status}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-center gap-1 hidden sm:flex">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{store.phone}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#00473c]/10 flex items-center justify-between">
                <span className="text-[11px] text-[#555555]">In-store Pickup & Delivery Available</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStore(store.name);
                    onClose();
                  }}
                  className="px-4 py-1.5 bg-[#00473c] text-white hover:bg-[#00382f] text-xs font-bold rounded-full transition-colors flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Order Here</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
