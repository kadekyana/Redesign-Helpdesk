"use client";

import { Home, CircleDot, ChevronDown, RefreshCw, X, Search, FileText, Pencil, Trash2, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CardHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-6">
    <h3 className="font-semibold text-xl text-gray-900">
      {title}
    </h3>
    <div className="flex gap-3 text-gray-500">
      <button className="hover:text-gray-700 transition-colors cursor-pointer">
        <ChevronDown size={18} strokeWidth={2.5} />
      </button>
      <button className="hover:text-gray-700 transition-colors cursor-pointer">
        <RefreshCw size={16} strokeWidth={2.5} />
      </button>
      <button className="hover:text-gray-700 transition-colors cursor-pointer">
        <X size={18} strokeWidth={2.5} />
      </button>
    </div>
  </div>
);

const defaultIssues = [
  {
    id: "TKT-1500",
    date: "13 - 04 - 2026",
    pengirim: "Made Sutama",
    noWa: "081234567890",
    email: "sutama@undiksha.ac.id",
    title: "Jaringan internet Undiksha Harmoni sulit dijangkau",
    kategori: "Infrastruktur Jaringan",
    deskripsiMasalah: "Internet putus nyambung di area lab bahasa.",
    klasifikasi: "",
    urgensi: "",
    status: "PENDING",
    deadline: "Cek Detail Issue", // Followed mockup text
    assignment: null
  },
  {
    id: "TKT-1501",
    date: "14 - 04 - 2026",
    pengirim: "Ni Luh Putu",
    noWa: "081987654321",
    email: "putu.luh@undiksha.ac.id",
    title: "Permohonan buka sistem pembayaran UKT",
    kategori: "Sistem Akademik",
    deskripsiMasalah: "Masa pembayaran sudah lewat namun mahasiswa belum membayar karena masalah teknis bank.",
    klasifikasi: "Permohonan",
    urgensi: "Medium",
    status: "DIPROSES",
    deadline: "17 - 04 - 2026",
    assignment: {
      sistemInformasi: "SIAK Undiksha",
      divisiTerkait: "Keuangan",
      petugas: "Made Agus Panji Sujaya, S.Pd",
      catatan: "Harap segera dibuka."
    }
  },
  {
    id: "TKT-1502",
    date: "15 - 04 - 2026",
    pengirim: "Gede Budi",
    noWa: "085612345678",
    email: "budi.gede@undiksha.ac.id",
    title: "Permohonan Buka Sistem KRS",
    kategori: "Sistem Akademik",
    deskripsiMasalah: "Mahasiswa telat KRS-an dikarenakan sedang sakit.",
    klasifikasi: "Permohonan",
    urgensi: "Medium",
    status: "DIPROSES",
    deadline: "18 - 04 - 2026",
    assignment: {
      sistemInformasi: "SIAK Undiksha",
      divisiTerkait: "Akademik",
      petugas: "Komang Aditya Pratama, S.Pd",
      catatan: "Tolong dicek."
    }
  },
  {
    id: "TKT-1503",
    date: "16 - 04 - 2026",
    pengirim: "Ayu Saraswati",
    noWa: "082233445566",
    email: "ayu.saraswati@undiksha.ac.id",
    title: "Tidak dapat Log-in SSO Undiksha",
    kategori: "Akun/SSO",
    deskripsiMasalah: "Password salah terus padahal sudah benar.",
    klasifikasi: "Pengaduan",
    urgensi: "High",
    status: "SELESAI",
    deadline: "19 - 04 - 2026",
    assignment: {
      sistemInformasi: "SSO Undiksha",
      divisiTerkait: "UPT TIK",
      petugas: "Luh Setiani, S.Pd., M.Pd.",
      catatan: "Selesai direset."
    }
  },
  {
    id: "TKT-1505",
    date: "18 - 04 - 2026",
    pengirim: "Wayan Darma",
    noWa: "081122223333",
    email: "wayan.darma@undiksha.ac.id",
    title: "Permohonan Pengecekan Akun SSO",
    kategori: "Akun/SSO",
    deskripsiMasalah: "Mohon dicek kenapa akun sering terkunci sendiri tanpa sebab yang jelas.",
    klasifikasi: "Pengaduan",
    urgensi: "Low",
    status: "DITOLAK",
    deadline: "21 - 04 - 2026",
    alasanDitolak: "Harap melampirkan screenshot pesan error, karena log sistem tidak menunjukkan anomali.",
    assignment: {
      sistemInformasi: "SSO Undiksha",
      divisiTerkait: "Helpdesk",
      petugas: "I Nyoman Arya Yudiharta, A.Md",
      catatan: ""
    }
  }
];

const StatusBadge = ({ status }) => {
  if (status === "PENDING") {
    return (
      <div className="inline-flex items-center gap-1 bg-gray-200 text-gray-600 text-[11px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
        PENDING <ChevronDown size={12} strokeWidth={3} />
      </div>
    );
  } else if (status === "DIPROSES") {
    return (
      <div className="inline-flex items-center gap-1 bg-[#4b8feb] text-white text-[11px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
        DIPROSES <ChevronDown size={12} strokeWidth={3} />
      </div>
    );
  } else if (status === "SELESAI") {
    return (
      <div className="inline-flex items-center gap-1 bg-[#2ea64e] text-white text-[11px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
        SELESAI <ChevronDown size={12} strokeWidth={3} />
      </div>
    );
  } else if (status === "DITOLAK") {
    return (
      <div className="inline-flex items-center gap-1 bg-[#d32f2f] text-white text-[11px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
        DITOLAK <ChevronDown size={12} strokeWidth={3} />
      </div>
    );
  }
  return null;
};

// Urgency Badge to show underneath Status if set
const UrgencyBadge = ({ urgency }) => {
  if (!urgency) return null;
  let bgColors = "bg-gray-100 text-gray-600 border-gray-300";
  if (urgency === "High") bgColors = "bg-red-50 text-red-600 border-red-200";
  if (urgency === "Medium") bgColors = "bg-yellow-50 text-yellow-700 border-yellow-200";
  if (urgency === "Low") bgColors = "bg-green-50 text-green-600 border-green-200";

  return (
    <div className={`mt-1.5 inline-flex items-center mx-auto text-[9px] font-semibold px-2 py-0.5 rounded-full border ${bgColors}`}>
      URGENSI: {urgency.toUpperCase()}
    </div>
  );
};

export default function IssuePage() {
  const router = useRouter();
  const [issues, setIssues] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [mounted, setMounted] = useState(false);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIssueId, setActiveIssueId] = useState(null);
  
  const [penugasanForm, setPenugasanForm] = useState({
    sistemInformasi: "",
    divisiTerkait: "",
    petugas: "",
    catatan: ""
  });

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("missu_issues");
    if (stored) {
      setIssues(JSON.parse(stored));
    } else {
      setIssues(defaultIssues);
      localStorage.setItem("missu_issues", JSON.stringify(defaultIssues));
    }
  }, []);

  const handleDelete = (id) => {
    if(!window.confirm("Apakah anda yakin ingin menghapus issue ini?")) return;
    const updated = issues.filter(i => i.id !== id);
    setIssues(updated);
    localStorage.setItem("missu_issues", JSON.stringify(updated));
  };
  
  const handleToggleStatus = (id) => {
    const updated = issues.map(issue => {
      if (issue.id === id) {
        let nextStatus;
        if (issue.status === "PENDING") nextStatus = "DIPROSES";
        else if (issue.status === "DIPROSES") nextStatus = "SELESAI";
        else if (issue.status === "SELESAI") nextStatus = "DITOLAK";
        else nextStatus = "PENDING";
        return { ...issue, status: nextStatus };
      }
      return issue;
    });
    setIssues(updated);
    localStorage.setItem("missu_issues", JSON.stringify(updated));
  };
  
  const handleOpenIssue = () => {
    const randomNum = Math.floor(Math.random() * 900) + 100;
    const newId = `TKT-${1500 + issues.length + randomNum}`;
    const newIssue = {
        id: newId,
        date: new Date().toLocaleDateString('id-ID').replace(/\//g, ' - '),
        pengirim: "Anonymous",
        noWa: "-",
        email: "-",
        title: "Contoh Issue Baru " + newId,
        kategori: "Lainnya",
        deskripsiMasalah: "Belum ada deskripsi spesifik.",
        klasifikasi: "",
        urgensi: "",
        status: "PENDING",
        deadline: "TBD",
        assignment: null,
        alasanDitolak: ""
    };
    const updated = [newIssue, ...issues];
    setIssues(updated);
    localStorage.setItem("missu_issues", JSON.stringify(updated));
  };

  const openPenugasanModal = (id) => {
    setActiveIssueId(id);
    const issue = issues.find(i => i.id === id);
    if (issue && issue.assignment) {
      if (typeof issue.assignment === "string") {
        setPenugasanForm({
          sistemInformasi: "",
          divisiTerkait: "",
          petugas: issue.assignment === "TUGASKAN" ? "" : issue.assignment,
          catatan: ""
        });
      } else {
        setPenugasanForm(issue.assignment);
      }
    } else {
      setPenugasanForm({ sistemInformasi: "", divisiTerkait: "", petugas: "", catatan: "" });
    }
    setIsModalOpen(true);
  };

  const closePenugasanModal = () => {
    setIsModalOpen(false);
    setActiveIssueId(null);
  };

  const handleSavePenugasan = () => {
    const updated = issues.map(issue => {
      if (issue.id === activeIssueId) {
        return { ...issue, assignment: penugasanForm };
      }
      return issue;
    });
    setIssues(updated);
    localStorage.setItem("missu_issues", JSON.stringify(updated));
    closePenugasanModal();
  };

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(filterText.toLowerCase()) || 
    issue.id.toLowerCase().includes(filterText.toLowerCase()) ||
    issue.status.toLowerCase().includes(filterText.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-full relative">
      {/* BREADCRUMB */}
      <div className="bg-white px-6 md:px-8 py-4 flex items-center gap-2 text-gray-800 border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
        <Home size={18} className="text-gray-600" />
        <span className="font-bold text-[13px] text-gray-800">Home</span>
        <span className="text-gray-300 text-sm font-light">/</span>
        <span className="text-gray-500 text-[13px] font-medium">Issue</span>
      </div>

      <div className="p-4 md:p-6 lg:p-8 flex-1">
        <div className="w-full">
          <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 min-h-[600px]">
            <CardHeader title="Data Issue" />

            {/* Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <button 
                onClick={handleOpenIssue}
                className="flex items-center rounded-md overflow-hidden shadow-sm hover:opacity-90 transition-opacity w-fit h-[40px] cursor-pointer"
              >
                <div className="bg-[#247f43] px-3 h-full flex items-center justify-center pointer-events-none">
                  <CircleDot size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="bg-[#2ea64e] px-4 h-full flex items-center justify-center text-white font-medium text-sm pointer-events-none">
                  Open Issue
                </div>
              </button>

              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800 text-sm">Filter:</span>
                <div className="relative border-b border-gray-300 w-[200px]">
                  <input 
                    type="text" 
                    placeholder="Type to filter" 
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    className="w-full pb-1 text-sm text-gray-600 focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                  <Search size={16} className="absolute right-0 top-0 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* TABLE SCROLL CONTAINER */}
            <div className="overflow-x-auto border border-gray-200 rounded-sm">
              <table className="w-full text-sm text-left min-w-[1000px]">
                <thead className="bg-[#f8f9fa] text-gray-800 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">ID</th>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">Tanggal<br/>Dilaporkan</th>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">Judul</th>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">Dokumen<br/>Pendukung</th>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">Status</th>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">Deadline</th>
                    <th className="px-4 py-4 font-bold text-center border-r border-gray-200">Penugasan</th>
                    <th className="px-4 py-4 font-bold text-center">Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIssues.length === 0 ? (
                      <tr>
                          <td colSpan="8" className="text-center py-10 text-gray-500 font-medium">Brak data yang sesuai filter</td>
                      </tr>
                  ) : filteredIssues.map((issue, idx) => (
                    <tr key={issue.id} className="bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-5 text-center text-gray-700 font-medium border-r border-gray-200">
                        <div className="whitespace-pre-line">{issue.id.replace("-", "-\n")}</div>
                      </td>
                      <td className="px-4 py-5 text-center text-gray-700 border-r border-gray-200 whitespace-nowrap">
                        {issue.date}
                      </td>
                      <td className="px-4 py-5 text-gray-800 text-[13px] border-r border-gray-200 max-w-[200px]">
                        {issue.title}
                      </td>
                      <td className="px-4 py-5 border-r border-gray-200 text-center">
                        <button className="inline-flex flex-col items-center justify-center bg-[#4b8feb] hover:bg-[#3876c9] text-white rounded-[4px] px-3 py-1.5 transition-colors cursor-pointer">
                          <FileText size={16} className="mb-0.5" />
                          <span className="text-[10px] font-medium leading-tight">Akses File</span>
                        </button>
                      </td>
                      <td className="px-4 py-5 text-center border-r border-gray-200">
                        <div className="flex flex-col items-center">
                          <div className="pointer-events-none">
                            <StatusBadge status={issue.status} />
                          </div>
                          <UrgencyBadge urgency={issue.urgensi} />
                        </div>
                      </td>
                      <td className="px-4 py-5 text-center text-gray-700 border-r border-gray-200 whitespace-nowrap">
                        {issue.deadline}
                      </td>
                      <td className="px-4 py-5 text-center border-r border-gray-200">
                        {(() => {
                          const isString = typeof issue.assignment === "string";
                          const petugasName = isString 
                            ? (issue.assignment === "TUGASKAN" ? "" : issue.assignment) 
                            : (issue.assignment?.petugas || "");

                          if (!petugasName) {
                            return (
                              <button 
                                onClick={() => openPenugasanModal(issue.id)}
                                className="bg-[#ffcc00] hover:bg-[#e6b800] text-gray-900 text-[11px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide transition-colors cursor-pointer"
                              >
                                TUGASKAN
                              </button>
                            );
                          }
                          return (
                            <div 
                              className="text-gray-700 text-[13px] cursor-pointer hover:text-blue-600 hover:underline"
                              onClick={() => openPenugasanModal(issue.id)}
                              title="Klik untuk mengedit penugasan"
                            >
                              {petugasName}
                            </div>
                          );
                        })()}
                      </td>
                      <td className="px-4 py-5 text-center">
                        <div className="flex items-center justify-center gap-1.5 flex-wrap w-[76px] mx-auto">
                          <button 
                            onClick={() => router.push(`/issue/${issue.id}/edit`)}
                            className="w-8 h-8 rounded bg-[#ffcc00] hover:bg-[#e6b800] text-white flex items-center justify-center transition-colors cursor-pointer" title="Edit">
                            <Pencil size={15} strokeWidth={2.5} />
                          </button>
                          <button 
                            onClick={() => handleDelete(issue.id)}
                            className="w-8 h-8 rounded bg-[#f44336] hover:bg-[#d32f2f] text-white flex items-center justify-center transition-colors cursor-pointer" 
                            title="Hapus"
                          >
                            <Trash2 size={15} strokeWidth={2.5} />
                          </button>
                          <button 
                            onClick={() => router.push(`/issue/${issue.id}/detail`)}
                            className="w-8 h-8 rounded bg-[#2196f3] hover:bg-[#1976d2] text-white flex items-center justify-center transition-colors cursor-pointer" title="Detail">
                            <Info size={18} strokeWidth={2.5} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Penugasan Modal - Matched Design */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white w-full max-w-3xl rounded-sm shadow-xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-gray-800 font-bold text-lg uppercase tracking-wide">Penugasan Ke Divisi Terkait</h2>
              <button onClick={closePenugasanModal} className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer">
                <X size={24} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto w-full">
              <div className="space-y-8">
                {/* Sistem Informasi */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <label className="text-gray-800 font-medium text-15px w-40 shrink-0 mt-2">Sistem Informasi</label>
                  <div className="flex-1 w-full">
                    <div className="relative border-b border-gray-400">
                      <select 
                        value={penugasanForm.sistemInformasi}
                        onChange={(e) => setPenugasanForm({...penugasanForm, sistemInformasi: e.target.value})}
                        className="w-full appearance-none bg-transparent outline-none py-2 text-gray-800 focus:border-b-2 focus:border-blue-500 cursor-pointer"
                      >
                        <option value="">Pilih Sistem Informasi</option>
                        <option value="SIAK Undiksha">SIAK Undiksha</option>
                        <option value="SSO Undiksha">SSO Undiksha</option>
                        <option value="E-Learning Undiksha">E-Learning Undiksha</option>
                        <option value="Sistem Pembayaran UKT">Sistem Pembayaran UKT</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
                    </div>
                    <p className="text-[12px] text-gray-400 mt-1 italic">*Divisi dapat dipilih lebih dari satu</p>
                  </div>
                </div>

                {/* Divisi Terkait */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <label className="text-gray-800 font-medium text-15px w-40 shrink-0 mt-2">Divisi Terkait</label>
                  <div className="flex-1 w-full">
                    <div className="relative border-b border-gray-400">
                      <select 
                        value={penugasanForm.divisiTerkait}
                        onChange={(e) => setPenugasanForm({...penugasanForm, divisiTerkait: e.target.value})}
                        className="w-full appearance-none bg-transparent outline-none py-2 text-gray-800 focus:border-b-2 focus:border-blue-500 cursor-pointer"
                      >
                        <option value="">Pilih Divisi Terkait</option>
                        <option value="UPT TIK">UPT TIK</option>
                        <option value="Keuangan">Keuangan</option>
                        <option value="Akademik">Akademik</option>
                        <option value="Helpdesk">Helpdesk</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
                    </div>
                    <p className="text-[12px] text-gray-400 mt-1 italic">*Divisi dapat dipilih lebih dari satu</p>
                  </div>
                </div>

                {/* Petugas */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <label className="text-gray-800 font-medium text-15px w-40 shrink-0 mt-2">Petugas</label>
                  <div className="flex-1 w-full">
                    <div className="relative border-b border-gray-400">
                      <select 
                        value={penugasanForm.petugas}
                        onChange={(e) => setPenugasanForm({...penugasanForm, petugas: e.target.value})}
                        className="w-full appearance-none bg-transparent outline-none py-2 text-gray-800 focus:border-b-2 focus:border-blue-500 cursor-pointer"
                      >
                        <option value="">Pilih Petugas</option>
                        <option value="Made Agus Panji Sujaya, S.Pd">Made Agus Panji Sujaya, S.Pd</option>
                        <option value="Komang Aditya Pratama, S.Pd">Komang Aditya Pratama, S.Pd</option>
                        <option value="Luh Setiani, S.Pd., M.Pd.">Luh Setiani, S.Pd., M.Pd.</option>
                        <option value="I Nyoman Arya Yudiharta, A.Md">I Nyoman Arya Yudiharta, A.Md</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
                    </div>
                    <p className="text-[12px] text-gray-400 mt-1 italic">*Petugas dapat dipilih lebih dari satu</p>
                  </div>
                </div>

                {/* Catatan */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <label className="text-gray-800 font-medium text-15px w-40 shrink-0 mt-2">Catatan</label>
                  <div className="flex-1 w-full">
                    <p className="text-[12px] text-gray-400 mb-2 italic">*Deskripsikan laporan yang diterima</p>
                    <textarea 
                      value={penugasanForm.catatan}
                      onChange={(e) => setPenugasanForm({...penugasanForm, catatan: e.target.value})}
                      className="w-full min-h-[140px] resize-y bg-transparent outline-none py-2 text-gray-800 border-b border-gray-400 focus:border-blue-500"
                    ></textarea>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-gray-100 flex justify-end">
              <button 
                onClick={handleSavePenugasan}
                className="bg-[#59a8ff] hover:bg-[#4a8eea] text-white px-8 py-2.5 rounded-[4px] font-medium transition-colors shadow-sm w-32 cursor-pointer"
              >
                KIRIM
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
