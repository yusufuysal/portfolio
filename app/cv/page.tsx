import Link from "next/link";

export default function CVPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Üst Bar (Navigasyon ve İndirme Butonu) */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            ← Ana Sayfa
          </Link>
          <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
            Yusuf Uysal - CV
          </h1>
        </div>

        {/* Doğrudan public klasöründeki Yusuf_Uysal_CV.pdf dosyasına gider, download niteliği indirmeyi zorunlu kılar */}
        <a
          href="/Yusuf_Uysal_CV.pdf"
          download="Yusuf_Uysal_CV.pdf"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          CV İndir
        </a>
      </header>

      {/* PDF Görüntüleme Alanı */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-6 h-[calc(100vh-73px)]">
        <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <object
            data="/Yusuf_Uysal_CV.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Tarayıcı PDF görüntülemeyi desteklemiyorsa gösterilecek alternatif alan */}
            <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
              <p className="text-gray-600">
                Tarayıcınız doğrudan PDF görüntülemeyi desteklemiyor.
              </p>
              <a
                href="/Yusuf_Uysal_CV.pdf"
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                CV'yi Yeni Sekmede Aç
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
}
