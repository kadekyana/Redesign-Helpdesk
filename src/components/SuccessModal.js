"use client";

import { useEffect } from "react";
import { CheckCircle2, X, ArrowRight, Check } from "lucide-react";

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Berhasil!",
  message = "Tindakan telah berhasil diproses.",
  badgeText = "Sukses",
  details = null, // array of { label, value }
  primaryAction = null, // { text, onClick, icon }
  secondaryAction = null, // { text, onClick }
  autoCloseMs = null,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && autoCloseMs && typeof autoCloseMs === "number") {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseMs);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseMs, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Top decorative gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X size={18} />
        </button>

        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          {/* Animated Success Badge */}
          <div className="relative mb-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/70 flex items-center justify-center shadow-xs transition-transform duration-300 hover:scale-105">
              <CheckCircle2 size={32} strokeWidth={2.3} className="text-emerald-500" />
            </div>
            {badgeText && (
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-xs">
                {badgeText}
              </span>
            )}
          </div>

          {/* Title & Message */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mt-2 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-6">
            {message}
          </p>

          {/* Optional Details Card */}
          {details && details.length > 0 && (
            <div className="w-full bg-gray-50/80 border border-gray-200/70 rounded-xl p-4 mb-6 text-left space-y-2.5">
              {details.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between text-xs py-1 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <span className="text-gray-500 font-medium shrink-0 pr-2">
                    {item.label}
                  </span>
                  <span className="text-gray-900 font-semibold text-right break-all">
                    {item.value || "-"}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3 w-full">
            {secondaryAction && (
              <button
                type="button"
                onClick={() => {
                  if (secondaryAction.onClick) {
                    secondaryAction.onClick();
                  } else {
                    onClose();
                  }
                }}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98]"
              >
                {secondaryAction.text || "Batal"}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (primaryAction && primaryAction.onClick) {
                  primaryAction.onClick();
                } else {
                  onClose();
                }
              }}
              className="w-full sm:flex-1 py-2.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-sm shadow-md shadow-emerald-200/60 transition-all duration-150 cursor-pointer active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>{primaryAction?.text || "Mengerti & Tutup"}</span>
              {primaryAction?.icon ? (
                <primaryAction.icon size={16} />
              ) : (
                <Check size={16} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
