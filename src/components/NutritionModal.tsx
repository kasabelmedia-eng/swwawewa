import { X } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export function NutritionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f4f3e7] rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-[#00473c]/15 flex flex-col"
      >
        <div className="p-6 border-b border-[#00473c]/15 flex items-center justify-between bg-white/70">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#00473c]">TRANSPARENCY</span>
            <h3 className="text-2xl font-bold text-[#0e150e]">Nutrition & Allergen Matrix</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f4f3e7] text-[#00473c] flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-xs text-[#555555] mb-4">
            Sweetgreen prepares food fresh in an open kitchen where allergens are handled. All nutrition figures are based on standard recipe builds.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#00473c]/15 bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#d8e5d6]/60 border-b border-[#00473c]/15 font-bold text-[#00473c]">
                <tr>
                  <th className="py-3 px-4">Menu Item</th>
                  <th className="py-3 px-3 text-right">Calories</th>
                  <th className="py-3 px-3 text-right">Protein</th>
                  <th className="py-3 px-3 text-right">Carbs</th>
                  <th className="py-3 px-3 text-right">Fat</th>
                  <th className="py-3 px-4">Known Allergens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00473c]/10 text-[#0e150e]/85">
                {PRODUCTS.map((prod) => (
                  <tr key={prod.id} className="hover:bg-[#f4f3e7]/50">
                    <td className="py-3 px-4 font-semibold text-[#00473c]">{prod.name}</td>
                    <td className="py-3 px-3 text-right tabular-nums">{prod.calories}</td>
                    <td className="py-3 px-3 text-right tabular-nums">{prod.protein}g</td>
                    <td className="py-3 px-3 text-right tabular-nums">{prod.carbs}g</td>
                    <td className="py-3 px-3 text-right tabular-nums">{prod.fat}g</td>
                    <td className="py-3 px-4 text-[#555555]">
                      {prod.allergens.length > 0 ? prod.allergens.join(', ') : 'None'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 border-t border-[#00473c]/10 bg-white/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#00473c] text-white text-xs font-bold uppercase rounded-full hover:bg-[#00382f]"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
