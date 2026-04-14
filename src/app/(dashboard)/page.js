import { Home, ChevronDown, RefreshCw, X, Minus } from "lucide-react";

// Komponen Reusable untuk Card Header
const CardHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold text-gray-900 text-base">
      {title}
    </h3>
    <div className="flex gap-2 text-gray-500">
      <button className="hover:text-gray-700 transition-colors">
        <ChevronDown size={18} strokeWidth={2.5} />
      </button>
      <button className="hover:text-gray-700 transition-colors">
        <RefreshCw size={16} strokeWidth={2.5} />
      </button>
      <button className="hover:text-gray-700 transition-colors">
        <X size={18} strokeWidth={2.5} />
      </button>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* BREADCRUMB */}
      <div className="bg-white px-6 md:px-8 py-4 flex items-center gap-2 text-gray-800 border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
        <Home size={18} className="text-gray-600" />
        <span className="font-bold text-[13px] text-gray-800">Home</span>
        <span className="text-gray-300 text-sm font-light">/</span>
        <span className="text-gray-500 text-[13px] font-medium">Dashboard</span>
      </div>

      <div className="p-4 md:p-6 lg:p-8 flex-1">
        {/* GRID LAYOUT UNTUK CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* CARD 1: Aktivitas */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[350px]">
            <CardHeader title="Aktivitas 2026-03-28" />
            <div className="text-gray-400 text-sm mt-4 font-medium">
              Aktivitas hari ini masih kosong
            </div>
          </div>

          {/* CARD 2: Statistik Issue Per Bulan */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[350px] flex flex-col relative">
            <CardHeader title="Statistik Issue Per Bulan (2026)" />
            <div className="flex-1 flex mt-2 pl-10 relative">
              {/* Y-axis Labels */}
              <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-gray-500 font-semibold h-[calc(100%-1.5rem)] pr-2 text-right w-8">
                <span>20 -</span>
                <span>15 -</span>
                <span>10 -</span>
                <span>5 -</span>
                <span>0 -</span>
              </div>
              {/* Y-axis Title (Rotated) */}
              <div className="absolute -left-6 top-1/2 -rotate-90 text-[10px] text-gray-400 font-bold tracking-wider -translate-y-1/2 uppercase">
                Jumlah Issue
              </div>

              {/* Bars Area */}
              <div className="flex-1 flex items-end justify-around border-l border-b border-gray-200 pb-0 px-4 h-[calc(100%-1.5rem)]">
                <div className="w-12 bg-[#3182ce] h-[60%] rounded-t-sm"></div>
                <div className="w-12 bg-[#dd6b20] h-[90%] rounded-t-sm"></div>
                <div className="w-12 bg-[#38a169] h-[45%] rounded-t-sm"></div>
                <div className="w-12 bg-[#e53e3e] h-[70%] rounded-t-sm"></div>
                <div className="w-12 bg-[#805ad5] h-[100%] rounded-t-sm"></div>
                <div className="w-12 bg-[#8c6b5d] h-[75%] rounded-t-sm"></div>
              </div>
            </div>
            {/* X-Axis Labels */}
            <div className="flex justify-around pl-10 pr-4 mt-3 text-[11px] text-gray-600 font-semibold">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
            <div className="text-center text-[10px] text-gray-400 font-bold uppercase mt-2 pl-10 tracking-wider">
              Bulan
            </div>
          </div>

          {/* CARD 3: Statistik Status Penanganan Issue */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[350px] flex flex-col relative">
            <CardHeader title="Statistik Status Penanganan Issue" />
            
            {/* Floating Blue Dot (Optional UI from Figma) */}
            <div className="absolute right-10 top-[80px] w-3 h-3 bg-[#6c8cd4] rounded-full opacity-90 shadow-sm"></div>

            <div className="flex-1 flex mt-4 pl-8 relative">
              {/* Background Grid Lines & Y-Axis */}
              <div className="absolute left-0 top-0 bottom-6 w-full flex flex-col justify-between text-[11px] text-gray-400 font-medium h-[calc(100%-1.5rem)]">
                {[50, 40, 30, 20, 10, 0].map((val) => (
                  <div key={val} className="flex items-center w-full h-0 relative">
                    <span className="w-6 text-right pr-2 absolute -left-8 top-[-7px]">
                      {val}
                    </span>
                    <div className="flex-1 border-b border-gray-100"></div>
                  </div>
                ))}
              </div>

              {/* Bars Area */}
              <div className="flex-1 grid grid-cols-6 items-end z-10 pl-2 pr-4 h-[calc(100%-1.5rem)]">
                <div className="flex justify-center gap-[2px] items-end h-full w-full">
                  <div className="w-[18px] bg-[#e15759] h-[5%] rounded-t-sm"></div>
                  <div className="w-[18px] bg-[#69b3a2] h-[15%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-center gap-[2px] items-end h-full w-full">
                  <div className="w-[18px] bg-[#e15759] h-[8%] rounded-t-sm"></div>
                  <div className="w-[18px] bg-[#69b3a2] h-[35%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-center gap-[2px] items-end h-full w-full">
                  <div className="w-[18px] bg-[#e15759] h-[5%] rounded-t-sm"></div>
                  <div className="w-[18px] bg-[#69b3a2] h-[85%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-center gap-[2px] items-end h-full w-full">
                  <div className="w-[18px] bg-[#e15759] h-[8%] rounded-t-sm"></div>
                  <div className="w-[18px] bg-[#69b3a2] h-[90%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-center gap-[2px] items-end h-full w-full">
                  <div className="w-[18px] bg-[#e15759] h-[0%] rounded-t-[1px]"></div>
                  <div className="w-[18px] bg-[#69b3a2] h-[45%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-center gap-[2px] items-end h-full w-full">
                  <div className="w-[18px] bg-[#e15759] h-[15%] rounded-t-sm"></div>
                  <div className="w-[18px] bg-[#69b3a2] h-[30%] rounded-t-sm"></div>
                </div>
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="grid grid-cols-6 pl-10 pr-4 mt-3 text-[11px] text-gray-500 font-semibold text-center">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-5 text-[11px] font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#e15759] rounded-sm"></div>
                Pengaduan
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#69b3a2] rounded-sm"></div>
                Permohonan
              </div>
            </div>
          </div>

          {/* CARD 4: Statistik Kualitas Pelayanan Publik (MATCHING GAMBAR 3) */}
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 min-h-[350px] flex flex-col relative overflow-hidden">
            <CardHeader title="Statistik Kualitas Pelayanan Publik" />

            {/* Floating Minus Button */}
            <div className="absolute right-6 top-[68px] w-9 h-9 bg-[#6c8cd5] rounded-full flex items-center justify-center cursor-pointer shadow-md text-white hover:bg-[#5b7bc3] transition-colors z-20">
              <Minus size={20} strokeWidth={2.5} />
            </div>

            <div className="flex-1 flex items-center justify-center relative mt-4">
              
              {/* Container Grafik Gauge */}
              <div className="relative w-[340px] h-[340px] flex items-center justify-center">
                
                {/* Labels Seputar Arc */}
                {/* 0% di ~1 o'clock */}
                <div className="absolute text-[12px] text-slate-500 font-semibold uppercase top-[5%] right-[32%] rotate-[20deg]">0%</div>
                
                {/* 20% di ~3 o'clock */}
                <div className="absolute text-[12px] text-slate-500 font-semibold uppercase top-[25%] right-[5%] rotate-[70deg]">20%</div>
                
                {/* 40% di ~5 o'clock */}
                <div className="absolute text-[12px] text-slate-500 font-semibold uppercase bottom-[25%] right-[10%] rotate-[130deg]">40%</div>
                
                {/* 60% di ~6:30 o'clock */}
                <div className="absolute text-[12px] text-slate-500 font-semibold uppercase bottom-[5%] right-[35%] rotate-[170deg]">60%</div>
                
                {/* 80% di ~7:30 o'clock */}
                <div className="absolute text-[12px] text-slate-500 font-semibold uppercase bottom-[10%] left-[28%] -rotate-[145deg]">80%</div>
                
                {/* 100% di ~8 o'clock */}
                <div className="absolute text-[12px] text-slate-500 font-semibold uppercase top-[65%] left-[12%] -rotate-[100deg]">100%</div>


                {/* Teks List Terpusat namun sejajar kanan di rongga (gap) */}
                {/* Rongga (Gap) ada di area kiri atas - kiri tengah */}
                <div className="absolute left-[8%] top-[25%] flex flex-col items-end gap-1 font-bold text-[13px] tracking-wide z-10 bg-white/70 py-4 px-2 rounded-xl backdrop-blur-sm">
                  <span className="text-[#8884d8]">Petugas-0%</span>
                  <span className="text-[#83a6ed]">Ketepatan-0%</span>
                  <span className="text-[#8dd1e1]">Sarpras-0%</span>
                  <span className="text-[#82ca9d]">Kecepatan-0%</span>
                  <span className="text-[#06b6d4]">Kemudahan-0%</span>
                </div>

                {/* SVG 5 Arcs */}
                <svg width="280" height="280" viewBox="0 0 240 240" className="transform -rotate-[65deg]" aria-hidden="true">
                  {/* Lingkaran terdalam ke terluar */}
                  {/* Rumus Circumference C = 2 * PI * r */}
                  {/* Kita render arc sekitar 210 derajat (210/360 = 0.5833 dari keliling) sisanya gap */}
                  
                  {/* Arc 1 (Dalam - Kemudahan) - R=45, C=282.7. Dash=164.9, Gap=117.8 */}
                  <circle cx="120" cy="120" r="45" fill="none" stroke="#ebeef2" strokeWidth="12" strokeLinecap="round" strokeDasharray="164.9 117.8" />
                  
                  {/* Arc 2 (Kecepatan) - R=60, C=377. Dash=219.9, Gap=157.1 */}
                  <circle cx="120" cy="120" r="62" fill="none" stroke="#ebeef2" strokeWidth="12" strokeLinecap="round" strokeDasharray="219.9 157.1" />
                  
                  {/* Arc 3 (Sarpras) - R=75, C=471.2. Dash=274.8, Gap=196.4 */}
                  <circle cx="120" cy="120" r="79" fill="none" stroke="#ebeef2" strokeWidth="12" strokeLinecap="round" strokeDasharray="274.8 196.4" />
                  
                  {/* Arc 4 (Ketepatan) - R=90, C=565.5. Dash=329.8, Gap=235.7 */}
                  <circle cx="120" cy="120" r="96" fill="none" stroke="#ebeef2" strokeWidth="12" strokeLinecap="round" strokeDasharray="329.8 235.7" />
                  
                  {/* Arc 5 (Luar - Petugas) - R=105, C=659.7. Dash=384.8, Gap=274.9 */}
                  <circle cx="120" cy="120" r="113" fill="none" stroke="#ebeef2" strokeWidth="12" strokeLinecap="round" strokeDasharray="384.8 274.9" />

                </svg>

              </div>

              {/* Dummy Line Graphic di Kiri Bawah (seperti di Figma) */}
              <div className="absolute left-0 bottom-0 w-10 h-6 opacity-40">
                <svg viewBox="0 0 100 50" className="stroke-slate-500 fill-none" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M0,45 L20,25 L40,40 L60,10 L80,30 L100,5" />
                </svg>
                {/* Additional shadow line */}
                <svg viewBox="0 0 100 50" className="stroke-slate-300 fill-none absolute top-[2px] left-0" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
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
