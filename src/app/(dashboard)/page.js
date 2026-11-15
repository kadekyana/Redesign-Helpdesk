"use client";

import { useState } from "react";
import {
  Home,
  ChevronDown,
  RefreshCw,
  X,
  Minus,
  Plus,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
  Info,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

// Komponen Reusable Card Header
const CardHeader = ({ title, subtitle = null, onRefresh = null }) => (
  <div className="flex items-start justify-between mb-3">
    <div>
      <h3 className="font-semibold text-gray-900 text-base leading-snug">
        {title}
      </h3>
      {subtitle && (
        <p className="text-xs text-gray-400 mt-0.5 font-medium">{subtitle}</p>
      )}
    </div>
    <div className="flex gap-2 text-gray-400">
      <button
        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer"
        title="Tutup Menu"
      >
        <ChevronDown size={17} strokeWidth={2.2} />
      </button>
      <button
        onClick={onRefresh}
        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer"
        title="Refresh Data"
      >
        <RefreshCw size={15} strokeWidth={2.2} />
      </button>
      <button
        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer"
        title="Tutup Card"
      >
        <X size={17} strokeWidth={2.2} />
      </button>
    </div>
  </div>
);

export default function DashboardPage() {
  // === STATE FOR CARD 2 (Statistik Issue Per Bulan) ===
  const [hoveredMonthly, setHoveredMonthly] = useState(null);

  const monthlyData = [
    {
      month: "Jan",
      fullName: "Januari 2026",
      count: 12,
      heightPercent: 60,
      color: "#3182ce",
      bgLight: "bg-blue-50",
      selesai: 9,
      diproses: 2,
      pending: 1,
      rate: "92%",
    },
    {
      month: "Feb",
      fullName: "Februari 2026",
      count: 18,
      heightPercent: 90,
      color: "#dd6b20",
      bgLight: "bg-orange-50",
      selesai: 15,
      diproses: 2,
      pending: 1,
      rate: "94%",
    },
    {
      month: "Mar",
      fullName: "Maret 2026",
      count: 9,
      heightPercent: 45,
      color: "#38a169",
      bgLight: "bg-green-50",
      selesai: 8,
      diproses: 1,
      pending: 0,
      rate: "100%",
    },
    {
      month: "Apr",
      fullName: "April 2026",
      count: 14,
      heightPercent: 70,
      color: "#e53e3e",
      bgLight: "bg-red-50",
      selesai: 11,
      diproses: 2,
      pending: 1,
      rate: "89%",
    },
    {
      month: "May",
      fullName: "Mei 2026",
      count: 20,
      heightPercent: 100,
      color: "#805ad5",
      bgLight: "bg-purple-50",
      selesai: 17,
      diproses: 2,
      pending: 1,
      rate: "95%",
    },
    {
      month: "Jun",
      fullName: "Juni 2026",
      count: 15,
      heightPercent: 75,
      color: "#8c6b5d",
      bgLight: "bg-amber-50",
      selesai: 12,
      diproses: 2,
      pending: 1,
      rate: "93%",
    },
  ];

  // === STATE FOR CARD 3 (Status Penanganan Issue) ===
  const [hoveredHandling, setHoveredHandling] = useState(null);
  const [activeTypeFilter, setActiveTypeFilter] = useState(null); // 'pengaduan' | 'permohonan' | null

  const handlingData = [
    {
      month: "Jan",
      fullName: "Januari 2026",
      pengaduan: 3,
      permohonan: 8,
      pHeight: "6%",
      mHeight: "16%",
      total: 11,
    },
    {
      month: "Mar",
      fullName: "Maret 2026",
      pengaduan: 4,
      permohonan: 18,
      pHeight: "8%",
      mHeight: "36%",
      total: 22,
    },
    {
      month: "May",
      fullName: "Mei 2026",
      pengaduan: 3,
      permohonan: 42,
      pHeight: "6%",
      mHeight: "84%",
      total: 45,
    },
    {
      month: "Jul",
      fullName: "Juli 2026",
      pengaduan: 4,
      permohonan: 45,
      pHeight: "8%",
      mHeight: "90%",
      total: 49,
    },
    {
      month: "Sep",
      fullName: "September 2026",
      pengaduan: 1,
      permohonan: 23,
      pHeight: "2%",
      mHeight: "46%",
      total: 24,
    },
    {
      month: "Nov",
      fullName: "November 2026",
      pengaduan: 8,
      permohonan: 15,
      pHeight: "16%",
      mHeight: "30%",
      total: 23,
    },
  ];

  // === STATE FOR CARD 4 (Kualitas Pelayanan Publik Gauge) ===
  const [activeUnitPreset, setActiveUnitPreset] = useState("all");
  const [hoveredDimension, setHoveredDimension] = useState(null);
  const [isGaugeExpanded, setIsGaugeExpanded] = useState(true);

  // Data simulasi per kategori/unit
  const qualityPresets = {
    all: {
      name: "Semua Unit",
      overall: "90.2%",
      respondents: 436,
      dimensions: [
        {
          id: "petugas",
          name: "Petugas",
          percent: 94,
          color: "#8884d8",
          radius: 113,
          maxArc: 384.8,
          gap: 274.9,
          desc: "Keramahan, kesigapan, & kejelasan informasi dari petugas teknis",
          rating: 4.8,
        },
        {
          id: "ketepatan",
          name: "Ketepatan",
          percent: 88,
          color: "#83a6ed",
          radius: 96,
          maxArc: 329.8,
          gap: 235.7,
          desc: "Kesesuaian hasil penanganan teknis terhadap pokok masalah",
          rating: 4.5,
        },
        {
          id: "sarpras",
          name: "Sarpras",
          percent: 82,
          color: "#8dd1e1",
          radius: 79,
          maxArc: 274.8,
          gap: 196.4,
          desc: "Ketersediaan infrastruktur jaringan, server & fasilitas pendukung",
          rating: 4.2,
        },
        {
          id: "kecepatan",
          name: "Kecepatan",
          percent: 91,
          color: "#82ca9d",
          radius: 62,
          maxArc: 219.9,
          gap: 157.1,
          desc: "Kecepatan respons pertama dan durasi waktu penyelesaian tiket",
          rating: 4.7,
        },
        {
          id: "kemudahan",
          name: "Kemudahan",
          percent: 96,
          color: "#06b6d4",
          radius: 45,
          maxArc: 164.9,
          gap: 117.8,
          desc: "Kemudahan alur pelaporan melalui portal sistem MISSU",
          rating: 4.9,
        },
      ],
    },
    tik: {
      name: "UPT TIK",
      overall: "94.6%",
      respondents: 210,
      dimensions: [
        {
          id: "petugas",
          name: "Petugas",
          percent: 97,
          color: "#8884d8",
          radius: 113,
          maxArc: 384.8,
          gap: 274.9,
          desc: "Staf IT sigap dan kompeten dalam analisis kendala",
          rating: 4.9,
        },
        {
          id: "ketepatan",
          name: "Ketepatan",
          percent: 93,
          color: "#83a6ed",
          radius: 96,
          maxArc: 329.8,
          gap: 235.7,
          desc: "Solusi jaringan & akun SSO tepat sasaran tanpa kendala ulang",
          rating: 4.7,
        },
        {
          id: "sarpras",
          name: "Sarpras",
          percent: 89,
          color: "#8dd1e1",
          radius: 79,
          maxArc: 274.8,
          gap: 196.4,
          desc: "Perangkat server & bandwidth mencukupi beban pelaporan",
          rating: 4.5,
        },
        {
          id: "kecepatan",
          name: "Kecepatan",
          percent: 95,
          color: "#82ca9d",
          radius: 62,
          maxArc: 219.9,
          gap: 157.1,
          desc: "Penyelesaian cepat rata-rata kurang dari 2 jam",
          rating: 4.8,
        },
        {
          id: "kemudahan",
          name: "Kemudahan",
          percent: 98,
          color: "#06b6d4",
          radius: 45,
          maxArc: 164.9,
          gap: 117.8,
          desc: "Integrasi SSO memudahkan proses login pelapor",
          rating: 5.0,
        },
      ],
    },
    siak: {
      name: "Akademik (SIAK)",
      overall: "87.4%",
      respondents: 145,
      dimensions: [
        {
          id: "petugas",
          name: "Petugas",
          percent: 90,
          color: "#8884d8",
          radius: 113,
          maxArc: 384.8,
          gap: 274.9,
          desc: "Pelayanan bagian akademik responsif terhadap masalah KRS",
          rating: 4.6,
        },
        {
          id: "ketepatan",
          name: "Ketepatan",
          percent: 86,
          color: "#83a6ed",
          radius: 96,
          maxArc: 329.8,
          gap: 235.7,
          desc: "Verifikasi dokumen dan status akademik sesuai data valid",
          rating: 4.4,
        },
        {
          id: "sarpras",
          name: "Sarpras",
          percent: 78,
          color: "#8dd1e1",
          radius: 79,
          maxArc: 274.8,
          gap: 196.4,
          desc: "Server SIAK perlu peningkatan kapasitas saat masa KRS serentak",
          rating: 4.0,
        },
        {
          id: "kecepatan",
          name: "Kecepatan",
          percent: 88,
          color: "#82ca9d",
          radius: 62,
          maxArc: 219.9,
          gap: 157.1,
          desc: "Buka tutup KRS diproses sesuai instruksi fakultas",
          rating: 4.5,
        },
        {
          id: "kemudahan",
          name: "Kemudahan",
          percent: 93,
          color: "#06b6d4",
          radius: 45,
          maxArc: 164.9,
          gap: 117.8,
          desc: "Alur pengajuan dispensasi KRS jelas dan transparan",
          rating: 4.7,
        },
      ],
    },
  };

  const currentQuality = qualityPresets[activeUnitPreset];
  const activeDimObj = currentQuality.dimensions.find(
    (d) => d.id === hoveredDimension
  );

  return (
    <div className="flex flex-col min-h-full">
      {/* BREADCRUMB */}
      <div className="bg-white px-6 md:px-8 py-4 flex items-center justify-between border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
        <div className="flex items-center gap-2 text-gray-800">
          <Home size={18} className="text-gray-600" />
          <span className="font-bold text-[13px] text-gray-800">Home</span>
          <span className="text-gray-300 text-sm font-light">/</span>
          <span className="text-gray-500 text-[13px] font-medium">
            Dashboard
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Data Simulasi Interaktif Aktif
        </div>
      </div>

      <div className="p-4 md:p-6 lg:p-8 flex-1">
        {/* GRID LAYOUT UNTUK CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* ========================================================= */}
          {/* CARD 1: Aktivitas Terkini                                */}
          {/* ========================================================= */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[360px] flex flex-col justify-between">
            <div>
              <CardHeader
                title="Aktivitas Hari Ini"
                subtitle="Log penanganan issue dan penugasan real-time"
              />

              {/* Feed Aktivitas */}
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-gray-50/90 hover:bg-blue-50/60 rounded-lg border border-gray-100 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs mb-0.5">
                      <span className="font-bold text-gray-800 truncate">
                        TKT-1503 Diselesaikan
                      </span>
                      <span className="text-gray-400 text-[11px] whitespace-nowrap">
                        10 menit lalu
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1">
                      Reset kredensial akun SSO oleh staf Luh Setiani, S.Pd.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50/90 hover:bg-blue-50/60 rounded-lg border border-gray-100 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Clock size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs mb-0.5">
                      <span className="font-bold text-gray-800 truncate">
                        TKT-1502 Ditugaskan
                      </span>
                      <span className="text-gray-400 text-[11px] whitespace-nowrap">
                        35 menit lalu
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1">
                      Ditugaskan ke Komang Aditya Pratama (Divisi Akademik).
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50/90 hover:bg-blue-50/60 rounded-lg border border-gray-100 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <AlertCircle size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs mb-0.5">
                      <span className="font-bold text-gray-800 truncate">
                        Tiket Baru Dilaporkan
                      </span>
                      <span className="text-gray-400 text-[11px] whitespace-nowrap">
                        1 jam lalu
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1">
                      TKT-1500: Jaringan internet Undiksha Harmoni lambat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={14} className="text-emerald-500" /> Sistem Operasional Normal
              </span>
              <span className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer">
                Lihat Semua Log →
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 2: Statistik Issue Per Bulan (Hover Interaktif)      */}
          {/* ========================================================= */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[360px] flex flex-col relative group/card">
            <CardHeader
              title="Statistik Issue Per Bulan (2026)"
              subtitle="Sorot diagram untuk melihat rincian penyelesaian"
            />

            {/* Dynamic Status / Simulation Header Strip */}
            <div className="h-8 mb-2 flex items-center justify-between px-3 py-1 bg-gray-50 rounded-lg border border-gray-100 transition-all">
              {hoveredMonthly !== null ? (
                <div className="flex items-center justify-between w-full text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: monthlyData[hoveredMonthly].color }}
                    ></span>
                    <span className="text-gray-900 font-bold">
                      {monthlyData[hoveredMonthly].fullName}:
                    </span>
                    <span className="text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded text-[11px]">
                      {monthlyData[hoveredMonthly].count} Issue
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-[11px]">
                    <span className="text-emerald-600">
                      Selesai: {monthlyData[hoveredMonthly].selesai}
                    </span>
                    <span className="text-blue-600">
                      Proses: {monthlyData[hoveredMonthly].diproses}
                    </span>
                    <span className="text-amber-600">
                      Rate: {monthlyData[hoveredMonthly].rate}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={13} className="text-amber-500" />
                    Arahkan kursor ke batang grafik untuk simulasi rincian
                  </span>
                  <span className="text-[11px] font-bold text-gray-700">
                    Total: 88 Issue (Rata-rata 14.7/bln)
                  </span>
                </div>
              )}
            </div>

            {/* Area Grafik */}
            <div className="flex-1 flex mt-3 relative">
              {/* Y-axis Title (Rotated) */}
              <div className="w-5 shrink-0 flex items-center justify-center pb-6 pointer-events-none">
                <span className="-rotate-90 whitespace-nowrap text-[10px] text-gray-400 font-bold tracking-wider uppercase">
                  Jumlah Issue
                </span>
              </div>

              {/* Y-axis Labels */}
              <div className="w-9 shrink-0 flex flex-col justify-between text-[11px] text-gray-500 font-semibold h-[calc(100%-1.5rem)] pr-2 text-right leading-none pointer-events-none">
                <span>20 -</span>
                <span>15 -</span>
                <span>10 -</span>
                <span>5 -</span>
                <span>0 -</span>
              </div>

              {/* Bars Area with Dynamic Hover States */}
              <div className="flex-1 flex items-end justify-around border-l border-b border-gray-200 pb-0 px-2 sm:px-4 h-[calc(100%-1.5rem)] relative">
                {monthlyData.map((item, idx) => {
                  const isHovered = hoveredMonthly === idx;
                  const isAnyHovered = hoveredMonthly !== null;

                  return (
                    <div
                      key={item.month}
                      className="relative flex flex-col items-center h-full justify-end group/bar cursor-pointer px-1"
                      onMouseEnter={() => setHoveredMonthly(idx)}
                      onMouseLeave={() => setHoveredMonthly(null)}
                    >
                      {/* Floating Tooltip Pill right above bar when hovered */}
                      <div
                        className={`absolute -top-10 transition-all duration-200 pointer-events-none z-30 flex flex-col items-center ${
                          isHovered
                            ? "opacity-100 -translate-y-1 scale-100"
                            : "opacity-0 translate-y-2 scale-90"
                        }`}
                      >
                        <div
                          className="px-2.5 py-1 rounded-md text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap"
                          style={{ backgroundColor: item.color }}
                        >
                          <span>{item.count} Issue</span>
                          <span className="text-[10px] opacity-80 font-normal">
                            ({item.rate})
                          </span>
                        </div>
                        {/* Triangle arrow */}
                        <div
                          className="w-0 h-0 border-x-4 border-x-transparent border-t-4"
                          style={{ borderTopColor: item.color }}
                        ></div>
                      </div>

                      {/* Bar Pillar */}
                      <div
                        className={`w-9 sm:w-11 rounded-t-md transition-all duration-300 relative ${
                          isHovered
                            ? "scale-y-[1.03] shadow-md ring-2 ring-blue-400/40 z-20"
                            : isAnyHovered
                            ? "opacity-45"
                            : "opacity-100 hover:opacity-90"
                        }`}
                        style={{
                          height: `${item.heightPercent}%`,
                          backgroundColor: item.color,
                        }}
                      >
                        {/* Shimmer light effect inside bar */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 rounded-t-md pointer-events-none"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-around pl-14 pr-2 sm:pr-4 mt-3 text-[11px] font-semibold">
              {monthlyData.map((item, idx) => (
                <span
                  key={item.month}
                  className={`transition-colors cursor-pointer text-center w-9 sm:w-11 ${
                    hoveredMonthly === idx
                      ? "text-blue-700 font-bold scale-110"
                      : "text-gray-600"
                  }`}
                  onMouseEnter={() => setHoveredMonthly(idx)}
                  onMouseLeave={() => setHoveredMonthly(null)}
                >
                  {item.month}
                </span>
              ))}
            </div>
            <div className="text-center text-[10px] text-gray-400 font-bold uppercase mt-2 pl-14 tracking-wider">
              Bulan
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 3: Statistik Status Penanganan Issue (Interaktif)    */}
          {/* ========================================================= */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[360px] flex flex-col relative group/card">
            <CardHeader
              title="Statistik Status Penanganan Issue"
              subtitle="Perbandingan Pengaduan vs Permohonan informasi"
            />

            {/* Interactive Header Ticker */}
            <div className="h-8 mb-2 flex items-center justify-between px-3 py-1 bg-gray-50 rounded-lg border border-gray-100 transition-all">
              {hoveredHandling !== null ? (
                <div className="flex items-center justify-between w-full text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-bold">
                      {handlingData[hoveredHandling].fullName}:
                    </span>
                    <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-[11px]">
                      Total {handlingData[hoveredHandling].total} Laporan
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-[#e15759] font-bold">
                      Pengaduan: {handlingData[hoveredHandling].pengaduan} (
                      {Math.round(
                        (handlingData[hoveredHandling].pengaduan /
                          handlingData[hoveredHandling].total) *
                          100
                      )}
                      %)
                    </span>
                    <span className="text-[#69b3a2] font-bold">
                      Permohonan: {handlingData[hoveredHandling].permohonan} (
                      {Math.round(
                        (handlingData[hoveredHandling].permohonan /
                          handlingData[hoveredHandling].total) *
                          100
                      )}
                      %)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={13} className="text-teal-500" />
                    Sorot bulan untuk membandingkan rasio jenis laporan
                  </span>
                  <span className="text-[11px] font-bold text-gray-700">
                    Total: 174 Laporan Terarsip
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 flex mt-2 pl-8 relative">
              {/* Background Grid Lines & Y-Axis */}
              <div className="absolute left-8 right-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-gray-400 font-medium h-[calc(100%-1.5rem)] pointer-events-none">
                {[50, 40, 30, 20, 10, 0].map((val) => (
                  <div key={val} className="flex items-center w-full h-0 relative">
                    <span className="w-8 text-right pr-2 absolute -left-8 top-[-7px]">
                      {val}
                    </span>
                    <div className="flex-1 border-b border-gray-100"></div>
                  </div>
                ))}
              </div>

              {/* Bars Area with Column Hover Simulation */}
              <div className="flex-1 grid grid-cols-6 items-end z-10 pl-2 pr-4 h-[calc(100%-1.5rem)]">
                {handlingData.map((item, idx) => {
                  const isHovered = hoveredHandling === idx;
                  const isDimmed =
                    hoveredHandling !== null && hoveredHandling !== idx;

                  return (
                    <div
                      key={item.month}
                      className={`relative flex justify-center gap-1 sm:gap-1.5 items-end h-full w-full px-1 cursor-pointer transition-all duration-200 rounded-t-lg ${
                        isHovered ? "bg-blue-50/60" : ""
                      } ${isDimmed ? "opacity-45" : "opacity-100"}`}
                      onMouseEnter={() => setHoveredHandling(idx)}
                      onMouseLeave={() => setHoveredHandling(null)}
                    >
                      {/* Floating Mini Tooltip */}
                      {isHovered && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2.5 py-1.5 rounded shadow-xl whitespace-nowrap z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                          <div className="font-bold text-gray-200 text-center mb-0.5">
                            {item.month}: {item.total} Lap.
                          </div>
                          <div className="flex items-center gap-2 font-mono">
                            <span className="text-red-300">P: {item.pengaduan}</span>
                            <span className="text-teal-300">M: {item.permohonan}</span>
                          </div>
                        </div>
                      )}

                      {/* Bar 1: Pengaduan */}
                      <div
                        className={`w-[14px] sm:w-[18px] bg-[#e15759] rounded-t-sm transition-all duration-300 ${
                          activeTypeFilter === "permohonan" ? "opacity-20" : ""
                        } ${isHovered ? "scale-y-[1.04] shadow-xs" : ""}`}
                        style={{ height: item.pHeight }}
                        title={`Pengaduan: ${item.pengaduan}`}
                      ></div>

                      {/* Bar 2: Permohonan */}
                      <div
                        className={`w-[14px] sm:w-[18px] bg-[#69b3a2] rounded-t-sm transition-all duration-300 ${
                          activeTypeFilter === "pengaduan" ? "opacity-20" : ""
                        } ${isHovered ? "scale-y-[1.04] shadow-xs" : ""}`}
                        style={{ height: item.mHeight }}
                        title={`Permohonan: ${item.permohonan}`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="grid grid-cols-6 pl-10 pr-4 mt-3 text-[11px] font-semibold text-center">
              {handlingData.map((item, idx) => (
                <span
                  key={item.month}
                  className={`transition-colors cursor-pointer ${
                    hoveredHandling === idx
                      ? "text-blue-700 font-bold scale-110"
                      : "text-gray-500"
                  }`}
                  onMouseEnter={() => setHoveredHandling(idx)}
                  onMouseLeave={() => setHoveredHandling(null)}
                >
                  {item.month}
                </span>
              ))}
            </div>

            {/* Interactive Legend with Filter Capability */}
            <div className="flex justify-center gap-8 mt-5 text-[11px] font-medium text-gray-600">
              <button
                onClick={() =>
                  setActiveTypeFilter((prev) =>
                    prev === "pengaduan" ? null : "pengaduan"
                  )
                }
                onMouseEnter={() => setActiveTypeFilter("pengaduan")}
                onMouseLeave={() => setActiveTypeFilter(null)}
                className={`flex items-center gap-2 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTypeFilter === "pengaduan"
                    ? "bg-red-50 text-red-700 font-bold ring-1 ring-red-300"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="w-3 h-3 bg-[#e15759] rounded-xs"></div>
                Pengaduan (Total: 23)
              </button>

              <button
                onClick={() =>
                  setActiveTypeFilter((prev) =>
                    prev === "permohonan" ? null : "permohonan"
                  )
                }
                onMouseEnter={() => setActiveTypeFilter("permohonan")}
                onMouseLeave={() => setActiveTypeFilter(null)}
                className={`flex items-center gap-2 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTypeFilter === "permohonan"
                    ? "bg-teal-50 text-teal-700 font-bold ring-1 ring-teal-300"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="w-3 h-3 bg-[#69b3a2] rounded-xs"></div>
                Permohonan (Total: 151)
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 4: Statistik Kualitas Pelayanan Publik (Gauge Arcs)  */}
          {/* ========================================================= */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[360px] flex flex-col relative overflow-hidden group/card">
            <CardHeader
              title="Statistik Kualitas Pelayanan Publik"
              subtitle="Indeks kepuasan pengguna per dimensi layanan"
            />

            {/* Presets / Unit Simulation Switcher */}
            <div className="flex items-center justify-between gap-2 mb-2 bg-gray-50/90 p-1.5 rounded-lg border border-gray-100">
              <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-semibold">
                <span className="text-gray-400 font-normal pl-1 hidden sm:inline">
                  Filter Unit:
                </span>
                <button
                  onClick={() => setActiveUnitPreset("all")}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activeUnitPreset === "all"
                      ? "bg-white text-[#1b2b65] font-bold shadow-xs border border-gray-200"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Semua Unit
                </button>
                <button
                  onClick={() => setActiveUnitPreset("tik")}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activeUnitPreset === "tik"
                      ? "bg-white text-[#1b2b65] font-bold shadow-xs border border-gray-200"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  UPT TIK
                </button>
                <button
                  onClick={() => setActiveUnitPreset("siak")}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activeUnitPreset === "siak"
                      ? "bg-white text-[#1b2b65] font-bold shadow-xs border border-gray-200"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  SIAK
                </button>
              </div>

              {/* Overall Index Badge */}
              <div className="flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md shrink-0">
                <span>IKM:</span>
                <span>{currentQuality.overall}</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative mt-2">
              {/* Floating Info / Toggle Button */}
              <button
                onClick={() => setIsGaugeExpanded(!isGaugeExpanded)}
                className="absolute right-0 top-0 w-9 h-9 bg-[#6c8cd5] rounded-full flex items-center justify-center cursor-pointer shadow-md text-white hover:bg-[#5b7bc3] transition-transform active:scale-95 z-20"
                title={isGaugeExpanded ? "Sembunyikan Rincian" : "Tampilkan Rincian"}
              >
                {isGaugeExpanded ? (
                  <Minus size={20} strokeWidth={2.5} />
                ) : (
                  <Plus size={20} strokeWidth={2.5} />
                )}
              </button>

              {/* Container Grafik Gauge */}
              <div className="relative w-[340px] h-[340px] flex items-center justify-center">
                {/* Labels Seputar Arc */}
                <div className="absolute text-[12px] text-slate-400 font-semibold uppercase top-[5%] right-[32%] rotate-[20deg] pointer-events-none">
                  0%
                </div>
                <div className="absolute text-[12px] text-slate-400 font-semibold uppercase top-[25%] right-[5%] rotate-[70deg] pointer-events-none">
                  20%
                </div>
                <div className="absolute text-[12px] text-slate-400 font-semibold uppercase bottom-[25%] right-[10%] rotate-[130deg] pointer-events-none">
                  40%
                </div>
                <div className="absolute text-[12px] text-slate-400 font-semibold uppercase bottom-[5%] right-[35%] rotate-[170deg] pointer-events-none">
                  60%
                </div>
                <div className="absolute text-[12px] text-slate-400 font-semibold uppercase bottom-[10%] left-[28%] -rotate-[145deg] pointer-events-none">
                  80%
                </div>
                <div className="absolute text-[12px] text-slate-400 font-semibold uppercase top-[65%] left-[12%] -rotate-[100deg] pointer-events-none">
                  100%
                </div>

                {/* Teks List Terpusat di rongga (gap) dengan Hover Interaktif */}
                <div className="absolute left-[4%] top-[10%] flex flex-col items-end gap-0.5 font-bold text-[12px] tracking-wide z-20 bg-white/85 py-2 px-2 rounded-xl backdrop-blur-md shadow-xs border border-white/60">
                  {currentQuality.dimensions.map((dim) => {
                    const isHovered = hoveredDimension === dim.id;
                    return (
                      <div
                        key={dim.id}
                        onMouseEnter={() => setHoveredDimension(dim.id)}
                        onMouseLeave={() => setHoveredDimension(null)}
                        className={`transition-all duration-200 cursor-pointer flex items-center gap-1.5 px-2 py-0.5 rounded-md ${
                          isHovered
                            ? "bg-gray-100 scale-105 shadow-xs font-black"
                            : "hover:bg-gray-50/80"
                        }`}
                        style={{ color: dim.color }}
                      >
                        <span>
                          {dim.name}-{dim.percent}%
                        </span>
                        {isHovered && (
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* SVG 5 Arcs with Interactive Dynamic Fill and Glow */}
                <svg
                  width="280"
                  height="280"
                  viewBox="0 0 240 240"
                  className="transform -rotate-[65deg]"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Render 5 Rings from inside to outside */}
                  {currentQuality.dimensions.map((dim) => {
                    const isHovered = hoveredDimension === dim.id;
                    const isAnyHovered = hoveredDimension !== null;

                    // Hitung panjang dash untuk persentase tersimulasi
                    const filledArcLength = (
                      dim.maxArc *
                      (dim.percent / 100)
                    ).toFixed(1);

                    return (
                      <g key={dim.id}>
                        {/* Background track arc (gray) */}
                        <circle
                          cx="120"
                          cy="120"
                          r={dim.radius}
                          fill="none"
                          stroke="#edf2f7"
                          strokeWidth={isHovered ? "14" : "12"}
                          strokeLinecap="round"
                          strokeDasharray={`${dim.maxArc} ${dim.gap}`}
                          className="transition-all duration-300"
                        />

                        {/* Foreground colored arc (progress simulated) */}
                        <circle
                          cx="120"
                          cy="120"
                          r={dim.radius}
                          fill="none"
                          stroke={dim.color}
                          strokeWidth={isHovered ? "14" : "12"}
                          strokeLinecap="round"
                          strokeDasharray={`${filledArcLength} 1000`}
                          className={`transition-all duration-500 cursor-pointer ${
                            isHovered
                              ? "opacity-100 filter drop-shadow-md"
                              : isAnyHovered
                              ? "opacity-40"
                              : "opacity-90"
                          }`}
                          onMouseEnter={() => setHoveredDimension(dim.id)}
                          onMouseLeave={() => setHoveredDimension(null)}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Interactive Dimension Inspector Tooltip (Center/Bottom) */}
                {activeDimObj && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/95 text-white text-xs p-3 rounded-xl shadow-2xl backdrop-blur-md z-30 w-72 text-left border border-gray-700 animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="font-bold text-[13px] flex items-center gap-1.5"
                        style={{ color: activeDimObj.color }}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
                        {activeDimObj.name}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 font-bold text-[11px]">
                        <Star size={12} fill="currentColor" />
                        <span>{activeDimObj.rating} / 5.0</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed mb-2">
                      {activeDimObj.desc}
                    </p>
                    <div className="flex items-center justify-between pt-1.5 border-t border-gray-800 text-[10px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users size={11} /> {currentQuality.respondents} Responden
                      </span>
                      <span className="font-bold text-emerald-400">
                        Skor: {activeDimObj.percent}% (Sangat Puas)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dummy Line Graphic di Kiri Bawah */}
              <div className="absolute left-0 bottom-0 w-10 h-6 opacity-30 pointer-events-none">
                <svg
                  viewBox="0 0 100 50"
                  className="stroke-slate-500 fill-none"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  <path d="M0,45 L20,25 L40,40 L60,10 L80,30 L100,5" />
                </svg>
                <svg
                  viewBox="0 0 100 50"
                  className="stroke-slate-300 fill-none absolute top-[2px] left-0"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  <path d="M0,45 L20,25 L40,40 L60,10 L80,30 L100,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
