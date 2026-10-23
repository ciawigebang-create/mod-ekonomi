import React, { useState } from 'react';
import { getStandaloneHtmlString, downloadHtmlFile } from '../utils/exportHtml';
import { X, Copy, Check, Download, ExternalLink, HelpCircle, FileCode } from 'lucide-react';

interface GitHubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const GitHubExportModal: React.FC<GitHubExportModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [copying, setCopying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      setCopying(true);
      const html = await getStandaloneHtmlString();
      await navigator.clipboard.writeText(html);
      setCopied(true);
      onShowToast('Seluruh kode HTML mandiri (1 File) berhasil disalin ke clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      onShowToast('Gagal menyalin otomatis. Silakan gunakan tombol unduh file.');
    } finally {
      setCopying(false);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const html = await getStandaloneHtmlString();
      downloadHtmlFile('index.html', html);
      onShowToast('File index.html berhasil diunduh! Siap diunggah ke GitHub.');
    } catch (err) {
      onShowToast('Gagal mengunduh file.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 transition-opacity">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white flex items-center justify-center font-bold">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                Siap GitHub Pages (1 File Mandiri)
              </h3>
              <p className="text-xs text-slate-500">
                Siswa dapat langsung membuka modul ini di HP masing-masing
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1-Click Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleCopyCode}
            disabled={copying}
            className="p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex flex-col items-center justify-center gap-1.5 cursor-pointer min-h-[70px]"
          >
            <div className="flex items-center gap-2">
              {copied ? <Check className="w-5 h-5 text-emerald-300" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Seluruh Kode HTML'}</span>
            </div>
            <span className="text-[11px] font-normal text-indigo-100">
              1 File Lengkap (Tinggal Paste di GitHub)
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex flex-col items-center justify-center gap-1.5 cursor-pointer min-h-[70px]"
          >
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-emerald-400" />
              <span>Unduh File index.html</span>
            </div>
            <span className="text-[11px] font-normal text-slate-300">
              Langsung Upload ke Repo GitHub
            </span>
          </button>
        </div>

        {/* Step-by-Step GitHub Pages Deployment Guide */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <span>🚀</span>
            <span>Cara Deploy ke GitHub Pages dalam 1 Menit:</span>
          </div>

          <ol className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2.5 list-decimal pl-5 leading-relaxed">
            <li>
              <strong>Buka GitHub & Buat Repository Baru:</strong> Masuk ke <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold underline">github.com/new</a>, beri nama misal <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono font-bold text-indigo-600">ekonomi-sma</code>, pilih <strong>Public</strong>, lalu klik <em>Create repository</em>.
            </li>
            <li>
              <strong>Upload File index.html:</strong> Klik <em>Add file &rarr; Upload files</em> (atau <em>creating a new file</em> dengan nama <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono font-bold text-indigo-600">index.html</code>), paste kode yang sudah disalin atau seret file <code className="font-mono font-bold">index.html</code> hasil unduhan, lalu klik <strong>Commit changes</strong>.
            </li>
            <li>
              <strong>Aktifkan Fitur GitHub Pages:</strong> Buka menu <strong>Settings &rarr; Pages</strong> di repository tersebut. Pada bagian <strong>Build and deployment &rarr; Branch</strong>, pilih branch <code className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 font-mono font-bold text-emerald-700 dark:text-emerald-300">main</code> (atau <code className="font-mono font-bold">master</code>) dan folder <code className="font-mono font-bold">/(root)</code>, lalu klik <strong>Save</strong>.
            </li>
            <li>
              <strong>Bagikan Link ke HP Siswa:</strong> Dalam waktu 1 menit, link web gratis <code className="px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 font-mono font-bold text-indigo-700 dark:text-indigo-300">https://username.github.io/ekonomi-sma/</code> siap dikirimkan ke grup WhatsApp kelas agar siswa langsung belajar di HP masing-masing!
            </li>
          </ol>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold transition cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
