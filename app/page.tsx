'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  const pdfUrl = '/CV_GAAD_RAYAN_Stage.pdf';

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
      {/* 🧭 NAVBAR */}
      <nav className="w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rayan GAAD</h1>
          <ul className="flex items-center space-x-6">
            <li><a href="#cv" className="hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400 transition-colors">CV</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
      </nav>

      {/* 🏠 SECTION ACCUEIL */}
      <section className="flex flex-col items-center justify-center flex-1 text-center pt-24">
        <h2 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400 mt-12">Bienvenue 👋</h2>
        <p className="text-lg max-w-2xl">
          Étudiant en cybersécurité à l’ECE Paris. Passionné par la réponse aux incidents,
          l’automatisation et la sécurité des systèmes. 💻🔒
        </p>
        <a
          href="#cv"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
        >
          Voir mon CV 📄
        </a>
      </section>

      {/* 📄 SECTION CV */}
      <section id="cv" className="w-full bg-white dark:bg-gray-800 py-12 px-4 text-center transition-colors">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">Mon CV</h2>

        <div style={{ height: '700px' }} className="mx-auto max-w-4xl shadow-lg border border-gray-300 dark:border-gray-600 rounded-lg transition-colors">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfUrl} />
          </Worker>
        </div>

        <a
          href={pdfUrl}
          download
          target="_blank"
          className="mt-6 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
        >
          📥 Télécharger mon CV (PDF)
        </a>
      </section>
    </main>
  );
}
