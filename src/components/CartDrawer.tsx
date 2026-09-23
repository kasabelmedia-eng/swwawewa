import { useState } from 'react';
import { CartItem } from '../data/products';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08875;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      const fakeOrderNumber = 'SG-' + Math.floor(100000 + Math.random() * 900000);
      setOrderConfirmed(fakeOrderNumber);
      onClearCart();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#f4f3e7] h-full shadow-2xl flex flex-col justify-between border-l border-[#00473c]/20 animate-in slide-in-from-right duration-300"
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[#00473c]/15 flex items-center justify-between bg-white/60">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#00473c]" />
            <h2 className="text-xl font-bold text-[#0e150e]">Your Bag</h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#00473c]/10 text-[#00473c] tabular-nums">
              {items.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close bag"
            className="w-9 h-9 rounded-full bg-[#f4f3e7] hover:bg-slate-200 flex items-center justify-center text-[#00473c] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderConfirmed ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#00473c] mx-auto animate-in zoom-in" />
              <h3 className="text-2xl font-bold text-[#0e150e]">Order Confirmed!</h3>
              <p className="text-sm text-[#0e150e]/80">
                Order <span className="font-mono font-bold text-[#00473c]">{orderConfirmed}</span> is being freshly prepped by our culinary team.
              </p>
              <div className="p-4 bg-[#d8e5d6]/70 rounded-2xl border border-[#00473c]/10 text-xs text-[#00473c] font-semibold space-y-1">
                <div>Pickup Window: ~15 minutes</div>
                <div className="text-[#0e150e]/70">Express Pickup Shelf · Downtown Store</div>
              </div>
              <button
                onClick={() => {
                  setOrderConfirmed(null);
                  onClose();
                }}
                className="mt-6 px-8 py-3 bg-[#e6ff55] hover:bg-[#d6f040] text-[#0e150e] font-extrabold text-xs uppercase tracking-wider rounded-full"
              >
                Done
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00473c]/5 flex items-center justify-center mx-auto text-[#00473c]/40">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#00473c]">Your bag is empty</h3>
              <p className="text-xs text-[#555555] max-w-xs mx-auto">
                Explore our seasonal warm bowls, crisp salads, and fresh sides to craft your order.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-2xl bg-white/70 border border-[#00473c]/10 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 rounded-xl object-cover shrink-0 bg-[#e8e7dc]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-[#0e150e] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-sm font-semibold text-[#00473c] tabular-nums shrink-0">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {item.dressingChoice && (
                      <p className="text-xs text-[#555555] capitalize mt-0.5">
                        Dressing: {item.dressingChoice.replace('-', ' ')}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      {/* Stepper */}
                      <div className="flex items-center border border-[#00473c]/20 bg-white rounded-full px-2 py-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#00473c] hover:opacity-70 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#0e150e] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#00473c] hover:opacity-70 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#555555] hover:text-red-600 p-1 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Checkout Section */}
        {items.length > 0 && !orderConfirmed && (
          <div className="p-6 bg-white/90 border-t border-[#00473c]/15 space-y-3">
            <div className="space-y-1.5 text-xs text-[#555555]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#0e150e] tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (NYC 8.875%)</span>
                <span className="tabular-nums">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#00473c] pt-2 border-t border-[#00473c]/10">
                <span>Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 bg-[#e6ff55] hover:bg-[#d6f040] text-[#0e150e] font-extrabold text-sm uppercase tracking-wider rounded-full shadow-xs active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <span>Transmitting Order...</span>
              ) : (
                <>
                  <span>Checkout · ${total.toFixed(2)}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#555555]">
              Pickup in ~15 mins at nearest Sweetgreen location
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
