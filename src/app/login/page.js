"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#e8eaef] flex items-center justify-center p-4">
      {/* Container Card */}
      <div className="w-full max-w-[960px] h-[580px] bg-white flex flex-col md:flex-row rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        
        {/* === SISI KIRI (Ilustrasi & Background Pattern) === */}
        <div className="hidden md:flex md:w-[45%] bg-[#244bb6] flex-col items-center justify-center p-10 text-center relative overflow-hidden">
          
          {/* Pure CSS Blobs for reliable organic background (menggantikan SVG yang terpotong berantakan) */}
          <div className="absolute -top-16 -left-10 w-[300px] h-[250px] bg-[#3a5dce] rounded-[40%] opacity-40 mix-blend-screen pointer-events-none transform rotate-12"></div>
          <div className="absolute -bottom-32 -right-20 w-[450px] h-[350px] bg-[#1a3891] rounded-[45%] opacity-90 pointer-events-none transform -rotate-12"></div>

          {/* Konten Gambar */}
          <div className="relative z-10 w-full max-w-[300px] flex justify-center mb-6">
            <Image
              src="/image-login.svg"
              alt="Ilustrasi MISSU"
              width={350}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Teks */}
          <h1 className="relative z-10 text-[22px] font-bold text-white mb-4 mt-2 leading-snug w-full whitespace-nowrap">
            MANAJEMEN ISSUE UNDIKSHA
            <br />
            (MISSU)
          </h1>
          <p className="relative z-10 text-blue-100/90 text-[12px] px-2 leading-[1.6] font-light max-w-[90%]">
            Sistem Manajemen Issue Undiksha (MISSU) bertujuan untuk dokumentasi
            penanganan issue berupa pengaduan/permohonan informasi di
            Universitas Pendidikan Ganesha.
          </p>
        </div>

        {/* === SISI KANAN (Form Login) === */}
        <div className="w-full md:flex-1 flex flex-col justify-center relative px-8 lg:px-16 pt-10 pb-16">
          
          <div className="w-full max-w-[380px] mx-auto flex flex-col items-center mb-6">
            <div className="relative w-20 h-20 mb-3">
              <Image
                src="/undiksha-logo.svg"
                alt="Logo Undiksha"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-[25px] font-bold text-gray-900 leading-tight">Selamat Datang</h2>
            <p className="text-gray-500 text-[14px] mt-1.5 font-medium">
              Masuk dengan Akun SSO Undiksha
            </p>
          </div>

          <div className="w-full max-w-[380px] mx-auto">
            <div className="space-y-4">
              
              {/* Input Username */}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-5 py-[14px] bg-[#eef3fc] border border-transparent rounded-[8px] text-[14px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                />
              </div>
              
              {/* Input Password */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-5 py-[14px] bg-[#eef3fc] border border-transparent rounded-[8px] text-[14px] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Eye size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Exact Google reCAPTCHA Replica */}
              <div className="border border-gray-300 shadow-sm rounded-[3px] bg-[#f9f9f9] w-[304px] h-[76px] px-3 flex items-center justify-between mt-1 mb-2">
                <div className="flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="w-7 h-7 border-2 border-gray-300 rounded-[2px] cursor-pointer bg-white"
                  />
                  <span className="text-[14px] text-[#222] font-medium tracking-wide">I&apos;m not a robot</span>
                </div>
                <div className="flex flex-col items-center justify-center pt-1 mr-1">
                  <Image
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    width={32}
                    height={32}
                    alt="reCAPTCHA"
                    unoptimized
                  />
                  <span className="text-[10px] text-[#555] font-semibold mt-1 tracking-tight">reCAPTCHA</span>
                  <span className="text-[8px] text-[#555] tracking-tight">Privacy - Terms</span>
                </div>
              </div>

              {/* ACTION BUTTON -> Login */}
              <button
                type="button"
                onClick={handleLogin}
                className="w-full mt-2 py-[14px] bg-[#223984] hover:bg-[#1a2d6b] text-white text-[15px] font-semibold rounded-[8px] transition-all duration-200 shadow-sm"
              >
                Masuk
              </button>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="absolute bottom-6 flex justify-center left-0 right-0">
            <p className="text-[12px] text-gray-400 font-medium font-sans">
              © 2026 UPA TIK Undiksha
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
