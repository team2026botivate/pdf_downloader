"use client";
import { Download, FileText } from "lucide-react";
import { useSearchParams } from "next/navigation";

function App() {
  const searchParams = useSearchParams();

  const bucketId = searchParams.get("bucketId");
  const path = searchParams.get("path");
  console.log(bucketId);
  console.log(path);
  const handleDownload = () => {};

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

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 mb-8">
            <span className="text-sm font-medium text-slate-600">
              Professional Salon Resources
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Download Your Bill
            <br />
            {path}
            <br />
            {bucketId}
            <br />
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover Saloon Mate - your complete salon management solution. From
            appointment scheduling to client retention strategies, we provide
            everything you need to grow and manage your successful salon
            business.
          </p>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>
      </main>

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

export default App;
