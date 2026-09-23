import { useState, useEffect } from 'react';
import { Product } from '../data/products';
import { X, Check, Plus, Minus, AlertCircle } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, dressingChoice: 'light' | 'regular' | 'on-the-side' | 'heavy', instructions: string) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [dressingChoice, setDressingChoice] = useState<'light' | 'regular' | 'on-the-side' | 'heavy'>('regular');
  const [instructions, setInstructions] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setDressingChoice('regular');
    setInstructions('');
    setAddedNotice(false);
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, dressingChoice, instructions);
    setAddedNotice(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#f4f3e7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#00473c]/15 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-[#00473c] hover:bg-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Layout */}
        <div className="flex flex-col md:flex-row max-h-[85vh] overflow-y-auto">
          {/* Product Image */}
          <div className="md:w-1/2 relative bg-[#e8e7dc] min-h-[260px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {product.onlineOnly && (
              <span className="absolute top-4 left-4 bg-[#e6ff55] text-[#0e150e] text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                Online only
              </span>
            )}
          </div>

          {/* Details & Controls */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category eyebrow */}
              <p className="text-xs font-bold tracking-widest uppercase text-[#00473c] mb-1.5">
                {product.categoryLabel}
              </p>

              <div className="flex items-baseline justify-between mb-3">
                <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-bold text-[#0e150e]">
                  {product.name}
                </h2>
                <span className="text-xl font-semibold text-[#00473c] tabular-nums">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </div>

              <p className="text-sm text-[#0e150e]/80 leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Nutrition breakdown */}
              <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-xl bg-[#d8e5d6]/50 border border-[#00473c]/10 text-center mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#555555]">Calories</div>
                  <div className="text-sm font-bold text-[#0e150e] tabular-nums">{product.calories}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#555555]">Protein</div>
                  <div className="text-sm font-bold text-[#0e150e] tabular-nums">{product.protein}g</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#555555]">Carbs</div>
                  <div className="text-sm font-bold text-[#0e150e] tabular-nums">{product.carbs}g</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#555555]">Fat</div>
                  <div className="text-sm font-bold text-[#0e150e] tabular-nums">{product.fat}g</div>
                </div>
              </div>

              {/* Ingredients List */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00473c] mb-2">
                  Ingredients
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#0e150e]/85">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="bg-white/80 px-2.5 py-1 rounded-md border border-[#00473c]/10">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dressing Choice (if applicable) */}
              {(product.category === 'salads' || product.category === 'warm-bowls') && (
                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#00473c] mb-2">
                    Dressing Amount
                  </label>
                  <div className="grid grid-cols-4 gap-1.5 text-xs">
                    {(['light', 'regular', 'heavy', 'on-the-side'] as const).map((choice) => (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => setDressingChoice(choice)}
                        className={`py-2 px-1 rounded-lg border font-medium capitalize text-center transition-colors cursor-pointer ${
                          dressingChoice === choice
                            ? 'bg-[#00473c] text-white border-[#00473c]'
                            : 'bg-white/70 text-[#0e150e] border-[#00473c]/15 hover:border-[#00473c]/40'
                        }`}
                      >
                        {choice.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Allergens warning */}
              {product.allergens.length > 0 && (
                <div className="flex items-start gap-2 text-xs text-[#555555] mb-5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#00473c] shrink-0 mt-0.5" />
                  <span>Contains: {product.allergens.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#00473c]/15 flex items-center gap-3">
              {/* Quantity Stepper */}
              <div className="flex items-center border border-[#00473c]/20 bg-white rounded-full px-2 py-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-[#00473c] hover:opacity-70 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-bold text-[#0e150e] tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-[#00473c] hover:opacity-70 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Primary Add to Bag Button: Lime Glow */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 bg-[#e6ff55] hover:bg-[#d6f040] text-[#0e150e] font-extrabold text-sm uppercase tracking-wider rounded-full shadow-xs transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <span>Add to Bag · ${(product.price * quantity).toFixed(2)}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
