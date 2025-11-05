'use client'; // Nécessaire pour utiliser les hooks React

import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCV = () => {
    setIsOpen(!isOpen);
  };

  // Chemin de ton fichier PDF
  const pdfUrl = '/CV_GAAD_RAYAN_stage.pdf';

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center">
      {/* 🧭 NAVBAR */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Rayan GAAD</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-600 transition">À propos</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition">Projets</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🏠 SECTION ACCUEIL */}
      <section className="flex flex-col items-center justify-center flex-1 text-center pt-24">
        <h2 className="text-5xl font-bold mb-4 text-blue-600 mt-12">Bienvenue 👋</h2>
        <p className="text-lg max-w-2xl">
          Étudiant en cybersécurité à l’ECE Paris. Passionné par la réponse aux incidents,
          l’automatisation et la sécurité des systèmes. 💻🔒
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Me contacter 📩
        </a>
      </section>

      {/* 📝 SECTION CV */}
      <section id="about" className="w-full bg-white py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Mon CV</h2>

        {/* Bouton pour ouvrir/fermer la section */}
        <button
          onClick={toggleCV}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 mb-4 mx-auto block"
        >
          {isOpen ? "Masquer le CV" : "Afficher le CV"}
        </button>

        {/* Section déroulante du CV */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold">Expérience Professionnelle</h3>
            <ul className="list-disc pl-6">
              <li>Développeur Fullstack - 2023</li>
              <li>Stage en cybersécurité - 2024</li>
              <li>Formation à l'ECE Paris - 2025</li>
            </ul>
          </div>

          {/* Compétences */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold">Compétences</h3>
            <ul className="list-disc pl-6">
              <li>JavaScript / React</li>
              <li>Python</li>
              <li>SQL / MongoDB</li>
              <li>Linux / Docker</li>
            </ul>
          </div>

          {/* Formation */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Formation</h3>
            <ul className="list-disc pl-6">
              <li>Bachelor en Cybersécurité - ECE Paris, 2025</li>
              <li>Stage en développement - 2024</li>
            </ul>
          </div>
        </div>

        {/* Intégration du PDF avec react-pdf */}
        <div style={{ height: '600px' }} className="mt-6">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} />
        </Worker>
        </div>


        {/* Lien de téléchargement */}
        <a
          href={pdfUrl}
          download
          className="mt-4 inline-block text-blue-600 hover:text-blue-800"
        >
          Télécharger mon CV (PDF)
        </a>
      </section>
    </main>
  );
};

export default Home;
