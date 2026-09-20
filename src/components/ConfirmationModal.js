"use client";

import { useEffect } from "react";
import { LogOut, Trash2, AlertTriangle, AlertCircle, X } from "lucide-react";

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Konfirmasi Tindakan",
  message = "Apakah Anda yakin ingin melanjutkan tindakan ini?",
  confirmText = "Lanjutkan",
  cancelText = "Batal",
  variant = "danger", // 'danger' | 'warning' | 'primary'
  icon = null,
  confirmButtonClass = "",
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

  if (!isOpen) return null;

  // Icon and theme config based on variant
  let IconComponent = icon;
  let iconBgClass = "bg-red-50 text-red-600 ring-8 ring-red-50/60";
  let btnConfirmClass = "bg-red-600 hover:bg-red-700 text-white shadow-red-200";

  if (variant === "warning") {
    if (!IconComponent) IconComponent = AlertTriangle;
    iconBgClass = "bg-amber-50 text-amber-600 ring-8 ring-amber-50/60";
    btnConfirmClass = "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200";
  } else if (variant === "primary") {
    if (!IconComponent) IconComponent = AlertCircle;
    iconBgClass = "bg-blue-50 text-blue-600 ring-8 ring-blue-50/60";
    btnConfirmClass = "bg-[#1b2b65] hover:bg-[#14214f] text-white shadow-blue-200";
  } else {
    // danger
    if (!IconComponent) IconComponent = LogOut;
    iconBgClass = "bg-red-50 text-red-600 ring-8 ring-red-50/60";
    btnConfirmClass = "bg-red-600 hover:bg-red-700 text-white shadow-red-200";
  }

  if (confirmButtonClass) {
    btnConfirmClass = confirmButtonClass;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button at top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <X size={18} />
        </button>

        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          {/* Badge Icon */}
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${iconBgClass} transition-transform duration-300 hover:scale-105`}
          >
            <IconComponent size={28} strokeWidth={2.2} />
          </div>

          {/* Title & Message */}
          <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs md:max-w-sm mb-6">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              {cancelText}
            </button>
            <button
              type="button"
              onClick={() => {
                onConfirm();
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-150 cursor-pointer shadow-md active:scale-[0.98] flex items-center justify-center gap-2 ${btnConfirmClass}`}
            >
              <IconComponent size={16} strokeWidth={2.5} />
              <span>{confirmText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
