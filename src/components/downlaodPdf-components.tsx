"use client";

import { Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const DownloadPdf = () => {
  const searchParams = useSearchParams();
  const bucketId = searchParams.get("bucketId");
  const path = searchParams.get("path");

  console.log(bucketId, path);
  return (
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
          everything you need to grow and manage your successful salon business.
        </p>

        <button
          
          className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>
    </main>
  );
};

export default DownloadPdf;
