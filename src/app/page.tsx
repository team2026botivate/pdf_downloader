import DownloadPdf from "@/components/downlaodPdf-components";
import { FileText } from "lucide-react";
import { Suspense } from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <nav className="w-full px-6 py-4 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-slate-800" />
            <span className="text-xl font-semibold text-slate-800">
              Saloon Mate
            </span>
          </div>
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <DownloadPdf />
      </Suspense>

      <footer className="w-full py-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-600">
            Powered by{" "}
            <span className="font-semibold text-slate-900">Salon Mate</span> ©
            2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
