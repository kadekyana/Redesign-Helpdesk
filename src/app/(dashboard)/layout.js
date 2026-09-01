"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  Power,
  UserCircle,
  Home,
  CheckCircle,
  FileText,
  Info,
  ClipboardList,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("isLoggedIn")) {
      router.replace("/login");
    }
  }, [router, pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  const navItems = [
    { href: "/", icon: Home },
    { href: "/issue", icon: FileText },
    { href: "#1", icon: CheckCircle },
    { href: "#2", icon: Info },
    { href: "#3", icon: ClipboardList },
  ];

  if (!mounted) return null; // Avoid hydration mismatch on redirect

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col font-sans">
      {/* --- TOP NAVBAR --- */}
      <header className="bg-[#1b2b65] text-white h-[64px] flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <Menu size={28} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
              <Image
                src="/undiksha-logo.svg"
                alt="Logo Undiksha"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg tracking-wide">MISSU</span>
          </div>
        </div>
        
        {/* LOGOUT BUTTON */}
        <button onClick={handleLogout} className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center group" title="Logout">
          <Power size={22} className="group-hover:text-red-400 transition-colors" />
        </button>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-[64px] bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-6 z-20 shrink-0 shadow-sm">
          <div className="text-gray-700 cursor-pointer hover:text-[#1b2b65] transition-colors rounded-full overflow-hidden">
            <UserCircle size={30} strokeWidth={1.5} />
          </div>
          <div className="w-8 h-[1px] bg-gray-200 my-1"></div>
          
          <nav className="flex flex-col gap-5 w-full items-center">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`relative flex justify-center w-full py-2 transition-colors ${
                    isActive ? "text-[#1b2b65]" : "text-gray-400 hover:text-[#1b2b65]"
                  }`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 bg-[#1b2b65] rounded-r-md"></div>
                  )}
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto w-full relative content-area flex flex-col bg-[#f5f6f8]">
          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
