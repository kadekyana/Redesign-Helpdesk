"use client";

import { Home, CircleDot, ChevronDown, RefreshCw, X, Search, FileText, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

const CardHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-6">
    <h3 className="font-semibold text-xl text-gray-900">
      {title}
    </h3>
    <div className="flex gap-3 text-gray-500">
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

const defaultIssues = [
  {
    id: "TKT-1500",
    date: "13 - 04 - 2026",
    title: "Jaringan internet Undiksha Harmoni sulit dijangkau",
    status: "PENDING",
    deadline: "16 - 04 - 2026",
    assignment: "TUGASKAN",
  },
  {
    id: "TKT-1501",
    date: "14 - 04 - 2026",
    title: "Permohonan buka sistem pembayaran UKT",
    status: "DIPROSES",
    deadline: "17 - 04 - 2026",
    assignment: "Made Agus Panji Sujaya, S.Pd",
  },
  {
    id: "TKT-1502",
    date: "15 - 04 - 2026",
    title: "Permohonan Buka Sistem KRS",
    status: "DIPROSES",
    deadline: "18 - 04 - 2026",
    assignment: "Komang Aditya Pratama, S.Pd",
  },
  {
    id: "TKT-1503",
    date: "16 - 04 - 2026",
    title: "Tidak dapat Log-in SSO",
    status: "SELESAI",
    deadline: "19 - 04 - 2026",
    assignment: "Luh Setiani, S.Pd., M.Pd.",
  },
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
  }
  return null;
};

export default function IssuePage() {
  const [issues, setIssues] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [mounted, setMounted] = useState(false);

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
        title: "Contoh Issue Baru " + newId,
        status: "PENDING",
        deadline: "TBD",
        assignment: "TUGASKAN"
    };
    const updated = [newIssue, ...issues];
    setIssues(updated);
    localStorage.setItem("missu_issues", JSON.stringify(updated));
  }

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(filterText.toLowerCase()) || 
    issue.id.toLowerCase().includes(filterText.toLowerCase()) ||
    issue.status.toLowerCase().includes(filterText.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-full">
      {/* BREADCRUMB - MATCHING DASHBOARD */}
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

            {/* Controls: Open Issue Button + Filter */}
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
              <table className="w-full text-sm text-left min-w-[900px]">
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
                        <button 
                          onClick={() => handleToggleStatus(issue.id)} 
                          className="cursor-pointer hover:opacity-80 hover:scale-[1.02] active:scale-[0.98] transition-all"
                          title="Klik untuk mengubah status"
                        >
                          <StatusBadge status={issue.status} />
                        </button>
                      </td>
                      <td className="px-4 py-5 text-center text-gray-700 border-r border-gray-200 whitespace-nowrap">
                        {issue.deadline}
                      </td>
                      <td className="px-4 py-5 text-center border-r border-gray-200">
                        {issue.assignment === "TUGASKAN" ? (
                          <button className="bg-[#ffcc00] hover:bg-[#e6b800] text-gray-900 text-[11px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide transition-colors cursor-pointer">
                            TUGASKAN
                          </button>
                        ) : (
                          <div className="text-gray-700 text-[13px]">{issue.assignment}</div>
                        )}
                      </td>
                      <td className="px-4 py-5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button className="w-8 h-8 rounded bg-[#ffcc00] hover:bg-[#e6b800] text-white flex items-center justify-center transition-colors cursor-pointer" title="Edit">
                            <Pencil size={16} strokeWidth={2.5} />
                          </button>
                          <button 
                            onClick={() => handleDelete(issue.id)}
                            className="w-8 h-8 rounded bg-[#f44336] hover:bg-[#d32f2f] text-white flex items-center justify-center transition-colors cursor-pointer" 
                            title="Hapus"
                          >
                            <Trash2 size={16} strokeWidth={2.5} />
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
    </div>
  );
}
