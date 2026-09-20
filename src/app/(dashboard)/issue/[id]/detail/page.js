"use client";

import { Home, FileText, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import SuccessModal from "@/components/SuccessModal";
import { useMounted } from "@/hooks/useMounted";
import { useIssues } from "@/hooks/useIssues";

function DetailContent({ issue, onAction }) {
  const [klasifikasi, setKlasifikasi] = useState(issue?.klasifikasi || "");
  const [urgensi, setUrgensi] = useState(issue?.urgensi || "");

  // Convert 'DD - MM - YYYY' to 'YYYY-MM-DD' for input type="date"
  const [deadline, setDeadline] = useState(() => {
    if (issue?.deadline && issue.deadline.includes(" - ")) {
      const parts = issue.deadline.split(" - ");
      if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      }
    }
    return "";
  });

  const [alasanDitolak, setAlasanDitolak] = useState(issue?.alasanDitolak || "");
  const [showAlasan, setShowAlasan] = useState(issue?.status === "DITOLAK");

  const handleStatusClick = (statusTrigger) => {
    if (statusTrigger === "DITOLAK" && !showAlasan) {
      setShowAlasan(true);
      return;
    }

    let formattedDeadline = "-";
    if (deadline) {
      const parts = deadline.split("-");
      if (parts.length === 3) {
        formattedDeadline = `${parts[2]} - ${parts[1]} - ${parts[0]}`;
      }
    }

    onAction({
      statusTrigger,
      klasifikasi,
      urgensi,
      deadline: deadline ? formattedDeadline : issue.deadline,
      alasanDitolak: statusTrigger === "DITOLAK" ? alasanDitolak : "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
      {/* INFORMSI TIKET */}
      <div className="p-6 md:p-8 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FileText className="text-blue-500" size={20} /> Informasi Tiket
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <p className="text-[13px] text-gray-500 font-medium mb-1">
              Tanggal Dibuat
            </p>
            <p className="font-medium text-gray-900">{issue.date}</p>
          </div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium mb-1">
              Status Saat Ini
            </p>
            <div className="inline-flex">
              <span
                className={`text-[12px] font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wide text-white ${
                  issue.status === "PENDING"
                    ? "bg-gray-400"
                    : issue.status === "DIPROSES"
                    ? "bg-[#4b8feb]"
                    : issue.status === "SELESAI"
                    ? "bg-[#2ea64e]"
                    : "bg-[#f44336]"
                }`}
              >
                {issue.status}
              </span>
            </div>
          </div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium mb-1">Pengirim</p>
            <p className="font-medium text-gray-900">{issue.pengirim}</p>
          </div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium mb-1">ID Ticket</p>
            <p className="font-medium text-gray-900">{issue.id}</p>
          </div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium mb-1">
              Nomor WhatsApp
            </p>
            <p className="font-medium text-gray-900">{issue.noWa}</p>
          </div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium mb-1">Email</p>
            <p className="font-medium text-gray-900">{issue.email}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[13px] text-gray-500 font-medium mb-1">
              Judul Pengaduan
            </p>
            <p className="font-medium text-gray-900 text-lg">{issue.title}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[13px] text-gray-500 font-medium mb-1">
              Kategori Laporan
            </p>
            <p className="font-medium text-gray-900">{issue.kategori}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[13px] text-gray-500 font-medium mb-1">
              Deskripsi Masalah
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-1">
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                {issue.deskripsiMasalah}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-[13px] text-gray-500 font-medium mb-2">
              File Pendukung
            </p>
            <button className="flex items-center gap-2 bg-[#f0f7ff] text-[#2196f3] border border-[#bbdefb] px-4 py-2 rounded-md hover:bg-[#e3f2fd] transition-colors cursor-pointer">
              <FileText size={18} />
              <span className="font-medium text-sm">Lihat Lampiran</span>
            </button>
          </div>
        </div>
      </div>

      {/* KLASIFIKASI LAPORAN */}
      <div className="p-6 md:p-8 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
          Klasifikasi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[13px] text-gray-700 font-bold mb-2">
              Jenis Issue / Klasifikasi
            </label>
            <select
              value={klasifikasi}
              onChange={(e) => setKlasifikasi(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">Pilih Klasifikasi</option>
              <option value="Pengaduan">Pengaduan</option>
              <option value="Permohonan">Permohonan</option>
              <option value="Pengembangan Sistem">Pengembangan Sistem</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] text-gray-700 font-bold mb-2">
              Tingkat Urgensi
            </label>
            <select
              value={urgensi}
              onChange={(e) => setUrgensi(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">Pilih Urgensi</option>
              <option value="Pending">Pending</option>
              <option value="Evaluasi">Evaluasi</option>
              <option value="Normal">Normal</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] text-gray-700 font-bold mb-2">
              Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* ALASAN DITOLAK */}
        {showAlasan && (
          <div className="mt-6 animate-in slide-in-from-top-2 fade-in duration-200">
            <label className="block text-sm text-red-600 font-bold mb-2">
              Alasan Ditolak (Wajib Diisi)
            </label>
            <textarea
              value={alasanDitolak}
              onChange={(e) => setAlasanDitolak(e.target.value)}
              placeholder="Jelaskan alasan mengapa laporan ini ditolak..."
              className="w-full min-h-[100px] resize-y bg-white border border-red-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            ></textarea>
          </div>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="p-4 md:p-6 bg-white border-t border-gray-100 flex flex-col md:flex-row flex-wrap items-center justify-end gap-3">
        <span className="w-full text-center md:text-left md:w-auto md:mr-auto text-sm text-gray-500 font-medium mb-2 md:mb-0">
          Tindakan Akhir Laporan:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={() => handleStatusClick("PENDING")}
            className="flex-1 md:flex-none px-5 py-2.5 bg-gray-500 hover:bg-gray-600 text-white font-bold text-sm rounded-md transition-colors shadow-sm cursor-pointer text-center"
          >
            PENDING
          </button>
          <button
            type="button"
            onClick={() => handleStatusClick("DIPROSES")}
            className="flex-1 md:flex-none px-5 py-2.5 bg-[#4b8feb] hover:bg-[#3876c9] text-white font-bold text-sm rounded-md transition-colors shadow-sm cursor-pointer text-center"
          >
            DIPROSES
          </button>
          <button
            type="button"
            onClick={() => handleStatusClick("SELESAI")}
            className="flex-1 md:flex-none px-5 py-2.5 bg-[#2ea64e] hover:bg-[#258a3f] text-white font-bold text-sm rounded-md transition-colors shadow-sm cursor-pointer text-center"
          >
            SELESAI
          </button>
          <button
            type="button"
            onClick={() => handleStatusClick("DITOLAK")}
            className="flex-1 md:flex-none px-5 py-2.5 bg-[#f44336] hover:bg-[#d32f2f] text-white font-bold text-sm rounded-md transition-colors shadow-sm cursor-pointer text-center"
          >
            DITOLAK
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DetailIssuePage() {
  const router = useRouter();
  const params = useParams();
  const rawId = params?.id;
  const issueId = typeof rawId === "string" ? decodeURIComponent(rawId) : "";

  const mounted = useMounted();
  const [issuesData, setIssuesData] = useIssues();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [actionSummary, setActionSummary] = useState(null);

  const issue = issuesData.find((i) => i.id === issueId);

  const handleAction = ({
    statusTrigger,
    klasifikasi,
    urgensi,
    deadline,
    alasanDitolak,
  }) => {
    const updated = issuesData.map((i) => {
      if (i.id === issueId) {
        return {
          ...i,
          status: statusTrigger,
          klasifikasi,
          urgensi,
          deadline,
          alasanDitolak,
        };
      }
      return i;
    });

    setIssuesData(updated);
    setActionSummary({
      statusTrigger,
      klasifikasi,
      urgensi,
      deadline,
      alasanDitolak,
    });
    setShowSuccessModal(true);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-full">
      {/* BREADCRUMB */}
      <div className="bg-white px-6 md:px-8 py-4 flex flex-wrap items-center gap-2 text-gray-800 border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
        <Home size={18} className="text-gray-600 shrink-0" />
        <span
          className="font-bold text-[13px] text-gray-800 cursor-pointer hover:underline whitespace-nowrap"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span className="text-gray-300 text-sm font-light shrink-0">/</span>
        <span
          className="font-bold text-[13px] text-gray-800 cursor-pointer hover:underline whitespace-nowrap"
          onClick={() => router.push("/issue")}
        >
          Issue
        </span>
        <span className="text-gray-300 text-sm font-light shrink-0">/</span>
        <span className="text-gray-500 text-[13px] font-medium whitespace-nowrap">
          Detail
        </span>
      </div>

      <div className="p-4 md:p-6 lg:p-8 flex-1">
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-start md:items-center gap-3 md:gap-4 mb-6">
            <button
              onClick={() => router.push("/issue")}
              className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors border border-gray-100 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 md:line-clamp-1 mt-1.5 md:mt-0">
              Detail Laporan ({issueId})
            </h1>
          </div>

          {issue ? (
            <DetailContent
              key={issue.id}
              issue={issue}
              onAction={handleAction}
            />
          ) : (
            <div className="bg-white rounded-xl p-8 text-center text-gray-500 border border-gray-100">
              Data laporan tidak ditemukan atau sedang dimuat...
            </div>
          )}
        </div>
      </div>

      {/* MODAL KONFIRMASI BERHASIL PERBARUI STATUS */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Status Berhasil Diperbarui!"
        message={`Status laporan ${issueId} telah berhasil diperbarui menjadi "${actionSummary?.statusTrigger}".`}
        badgeText="Status Updated"
        details={[
          { label: "ID Ticket", value: issueId },
          { label: "Status Baru", value: actionSummary?.statusTrigger },
          {
            label: "Klasifikasi",
            value: actionSummary?.klasifikasi || "Belum ditentukan",
          },
          {
            label: "Tingkat Urgensi",
            value: actionSummary?.urgensi || "Belum ditentukan",
          },
          { label: "Deadline", value: actionSummary?.deadline || "Tidak ada" },
          ...(actionSummary?.statusTrigger === "DITOLAK"
            ? [{ label: "Alasan Ditolak", value: actionSummary?.alasanDitolak }]
            : []),
        ]}
        primaryAction={{
          text: "Kembali ke Daftar Issue",
          onClick: () => router.push("/issue"),
        }}
        secondaryAction={{
          text: "Lihat Halaman Ini",
          onClick: () => setShowSuccessModal(false),
        }}
      />
    </div>
  );
}
