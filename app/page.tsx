'use client';
import { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // 🔗 Liens vers les 2 CV
  const pdfUrlLight = '/CV_GAAD_RAYAN_Stage.pdf';
  const pdfUrlDark = '/CV_GAAD_RAYAN_Stage_Cyber.pdf';

  // 🎨 Détection du thème actif (clair / sombre)
  useEffect(() => {
    const html = document.documentElement;
    const update = () => setTheme(html.classList.contains('dark') ? 'dark' : 'light');
    update();
    const obs = new MutationObserver(update);
    obs.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  // 🧩 Sélectionne le bon PDF
  const pdfUrl = theme === 'dark' ? pdfUrlDark : pdfUrlLight;

  return (
    <main className="min-h-screen flex flex-col items-center transition-colors duration-500">
      {/* 🧭 NAVBAR */}
      <nav className="w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 z-50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rayan GAAD</h1>
          <ul className="flex items-center space-x-6">
            <li><a href="#cv" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">CV</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projets</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
      </nav>

      {/* SECTION ACCUEIL */}
      <section className="flex flex-col items-center justify-center flex-1 text-center pt-24 px-4">
        <h2 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400 mt-12 animate-text">
  Bienvenue
</h2>

        <p className="text-lg max-w-2xl">
          Étudiant à l’ECE Paris en cybersécurité, je cherche un stage dès avril 2026 pour contribuer à des projets alliant sécurité, innovation et développement.
        </p>
        <a
          href="#cv"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
        >
          Voir mon CV
        </a>
      </section>

      {/* SECTION CV */}
      <section id="cv" className="w-full bg-white dark:bg-gray-800 py-12 px-4 text-center transition-colors duration-500">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">Mon CV</h2>

        <div className="pdf-container mx-auto shadow-lg transition-all duration-500">
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
          Télécharger mon CV ({theme === 'dark' ? 'version sombre' : 'version claire'})
        </a>
      </section>

      {/* SECTION PROJETS */}
      <section id="projects" className="w-full bg-gray-50 dark:bg-gray-800 py-16 px-6 text-center transition-colors duration-500">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="project-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Système de détection d’intrusion</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Projet en cybersécurité en Python basé sur l’analyse de logs réseau pour détecter des comportements suspects.
            </p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-4 inline-block">Voir le projet →</a>
          </div>
          <div className="project-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Application mobile de diététique</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Application en React Native pour suivre l’alimentation et les apports nutritionnels au quotidien.
            </p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-4 inline-block">Voir le projet →</a>
          </div>
          <div className="project-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Reconnaissance faciale (Matlab)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Implémentation d’un algorithme PCA pour la détection et la reconnaissance de visages à partir d’images.
            </p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-4 inline-block">Voir le projet →</a>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="w-full bg-white dark:bg-gray-800 py-12 text-center transition-colors duration-500">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">Tu peux me contacter à tout moment sur :</p>
        <a href="mailto:rayan.gaad@edu.ece.fr" className="block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">rayan.gaad@edu.ece.fr</a>
      </section>
    </main>
  );
}
