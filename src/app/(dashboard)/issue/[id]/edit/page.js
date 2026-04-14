"use client";

import { Home, ChevronLeft, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditIssuePage() {
  const router = useRouter();
  const params = useParams();
  const rawId = params?.id;
  const issueId = typeof rawId === "string" ? decodeURIComponent(rawId) : "";

  const [mounted, setMounted] = useState(false);
  const [issuesData, setIssuesData] = useState([]);
  
  const [formData, setFormData] = useState({
    pengirim: "",
    noWa: "",
    email: "",
    title: "",
    kategori: "",
    deskripsiMasalah: ""
  });

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("missu_issues");
    if (stored) {
      const parsed = JSON.parse(stored);
      setIssuesData(parsed);
      const found = parsed.find(i => i.id === issueId);
      if (found) {
        setFormData({
          pengirim: found.pengirim || "",
          noWa: found.noWa || "",
          email: found.email || "",
          title: found.title || "",
          kategori: found.kategori || "",
          deskripsiMasalah: found.deskripsiMasalah || ""
        });
      }
    }
  }, [issueId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updated = issuesData.map(i => {
      if (i.id === issueId) {
        return {
          ...i,
          ...formData
        };
      }
      return i;
    });

    localStorage.setItem("missu_issues", JSON.stringify(updated));
    alert("Berhasil menyimpan perubahan data issue!");
    router.push("/issue");
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-full">
      {/* BREADCRUMB */}
      <div className="bg-white px-6 md:px-8 py-4 flex items-center gap-2 text-gray-800 border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
        <Home size={18} className="text-gray-600" />
        <span className="font-bold text-[13px] text-gray-800 cursor-pointer hover:underline" onClick={() => router.push('/')}>Home</span>
        <span className="text-gray-300 text-sm font-light">/</span>
        <span className="font-bold text-[13px] text-gray-800 cursor-pointer hover:underline" onClick={() => router.push('/issue')}>Issue</span>
        <span className="text-gray-300 text-sm font-light">/</span>
        <span className="text-gray-500 text-[13px] font-medium">Edit</span>
      </div>

      <div className="p-4 md:p-6 lg:p-8 flex-1">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => router.push('/issue')} 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors border border-gray-100 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Edit Data Laporan ({issueId})</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] text-gray-700 font-bold mb-2">Nama Pengirim</label>
                  <input 
                    name="pengirim"
                    value={formData.pengirim}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-700 font-bold mb-2">Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-700 font-bold mb-2">Nomor WhatsApp</label>
                  <input 
                    name="noWa"
                    value={formData.noWa}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-700 font-bold mb-2">Kategori Laporan</label>
                  <input 
                    name="kategori"
                    value={formData.kategori}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[13px] text-gray-700 font-bold mb-2">Judul Laporan</label>
                  <input 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[13px] text-gray-700 font-bold mb-2">Deskripsi Masalah</label>
                  <textarea 
                    name="deskripsiMasalah"
                    value={formData.deskripsiMasalah}
                    onChange={handleChange}
                    className="w-full min-h-[140px] resize-y bg-white border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <button 
                onClick={() => router.push('/issue')}
                className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-sm rounded-md transition-colors shadow-sm cursor-pointer"
              >
                BATAL
              </button>
              <button 
                onClick={handleSave}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-md transition-colors shadow-sm cursor-pointer flex items-center gap-2"
              >
                <Save size={18} /> SIMPAN PERUBAHAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
