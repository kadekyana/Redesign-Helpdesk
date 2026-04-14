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
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl bg-white flex flex-col md:flex-row rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden min-h-[600px]">
        {/* === SISI KIRI (Ilustrasi & Background Pattern) === */}
        <div className="hidden md:flex md:w-1/2 bg-[#1b2b65] flex-col items-center justify-center p-10 text-center relative overflow-hidden">
          {/* Background Shape: Top */}
          <div className="absolute top-0 left-0 w-full h-[60%] pointer-events-none origin-top-left opacity-90">
            <Image
              src="/Subtract-top.svg"
              alt="Pattern Top"
              fill
              className="object-cover object-left-top"
              unoptimized
            />
          </div>

          {/* Background Shape: Bottom */}
          <div className="absolute bottom-0 right-0 w-full h-[60%] pointer-events-none origin-bottom-right opacity-90">
            <Image
              src="/Subtract-bottom.svg"
              alt="Pattern Bottom"
              fill
              className="object-cover object-right-bottom"
              unoptimized
            />
          </div>

          {/* Konten Gambar (z-10 agar di atas background shape) */}
          <div className="relative z-10 w-full max-w-[340px] flex justify-center mb-6">
            <Image
              src="/image-login.svg"
              alt="Ilustrasi MISSU"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Teks */}
          <h1 className="relative z-10 text-[22px] font-bold text-white mb-3 mt-2 leading-snug">
            MANAJEMEN ISSUE UNDIKSHA
            <br />
            (MISSU)
          </h1>
          <p className="relative z-10 text-blue-100/80 text-[13px] px-8 leading-relaxed font-light">
            Sistem Manajemen Issue Undiksha (MISSU) bertujuan untuk dokumentasi
            penanganan issue berupa pengaduan/permohonan informasi di
            Universitas Pendidikan Ganesha.
          </p>
        </div>

        {/* === SISI KANAN (Form Login) === */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 relative">
          <div className="flex flex-col items-center mb-10 w-full max-w-[360px] mx-auto">
            <div className="relative w-[80px] h-[80px] mb-6">
              <Image
                src="/logo-undiksha.svg"
                alt="Logo Undiksha"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-[24px] font-bold text-gray-900 leading-tight">Selamat Datang</h2>
            <p className="text-gray-500 text-[13px] mt-2 font-medium">
              Masuk dengan Akun SSO Undiksha
            </p>
          </div>

          <div className="w-full max-w-[360px] mx-auto">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-5 py-3.5 bg-[#f5f7ff] border border-transparent rounded-[10px] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1b2b65] focus:ring-1 focus:ring-[#1b2b65] transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-5 py-3.5 bg-[#f5f7ff] border border-transparent rounded-[10px] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1b2b65] focus:ring-1 focus:ring-[#1b2b65] transition-colors pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* reCAPTCHA */}
              <div className="border border-gray-200 shadow-sm rounded-md bg-white w-max px-3 py-2 flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6 border-gray-300 rounded-sm cursor-pointer accent-[#1b2b65]"
                  />
                  <span className="text-sm text-gray-700">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    width={28}
                    height={28}
                    alt="reCAPTCHA"
                    unoptimized
                  />
                  <span className="text-[9px] text-gray-500 mt-0.5">
                    reCAPTCHA
                  </span>
                </div>
              </div>

              {/* ACTION BUTTON -> Login */}
              <button
                type="button"
                onClick={handleLogin}
                className="w-full mt-8 py-3.5 bg-[#1b2b65] hover:bg-[#121c43] text-white text-[15px] font-semibold rounded-[10px] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Masuk
              </button>
            </div>

            <div className="mt-12 text-center absolute bottom-8 left-0 right-0">
              <p className="text-[11px] text-gray-400 font-medium">© 2026 UPA TIK Undiksha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
