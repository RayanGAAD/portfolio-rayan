'use client';
import { useEffect, useState, useRef } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const carouselRef = useRef<HTMLDivElement>(null);

  const pdfUrlLight = '/CV_GAAD_RAYAN_Stage.pdf';
  const pdfUrlDark = '/CV_GAAD_RAYAN_Stage_Cyber.pdf';

  // Détection du thème clair/sombre
  useEffect(() => {
    const html = document.documentElement;
    const update = () => setTheme(html.classList.contains('dark') ? 'dark' : 'light');
    update();
    const obs = new MutationObserver(update);
    obs.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const pdfUrl = theme === 'dark' ? pdfUrlDark : pdfUrlLight;

  // Liste des projets
  const projects = [
    {
      title: 'Semestre 6 - Programmation : Application web complexe',
      description:
        "Développement d'une application web en Java avec BDD avancée. Plateforme de rendez-vous urgents entre entreprises du BTP et particuliers.",
      tags: ['Java', 'BDD', 'Architecture web'],
      image: '/images/appweb.jpg',
    },
    {
      title: 'Semestre 6 - Électronique : Reconnaissance vocale',
      description:
        "Développement d’un réseau de neurones (TensorFlow) pour la reconnaissance vocale, puis portage en C++ sur Arduino.",
      tags: ['C++', 'TensorFlow', 'Python'],
      image: '/images/reconnaissance-vocale.jpg',
    },
    {
      title: 'Semestre 4 - Programmation : Site Web',
      description:
        "Développement web Full-Stack : HTML/CSS, JavaScript, et intégration d'une base de données simple.",
      tags: ['HTML', 'CSS', 'JavaScript', 'BDD'],
      image: '/images/siteweb.jpg',
    },
    {
      title: 'Semestre 4 - Électronique : Gyrobot',
      description:
        "Robot bi-roues auto-équilibré avec algorithme PID en C++ pour maintenir la stabilité.",
      tags: ['Système embarqué', 'PID'],
      image: '/images/gyrobot.jpg',
    },
    {
      title: "Semestre 3 - Programmation : Optimisation d'une Ligne d'Assemblage",
      description:
        "Algorithmes en C pour optimiser la production. Diagrammes de Gantt et simulation de contraintes temporelles.",
      tags: ['Programmation C', 'Optimisation'],
      image: '/images/optimisation.jpg',
    },
    {
      title: "Semestre 3 - Électronique : Contrôleur d'Ascenseur",
      description:
        "Système de contrôle d’ascenseur complet en VHDL sur FPGA. Gestion multi-étages et priorités.",
      tags: ['VHDL', 'FPGA'],
      image: '/images/ascenseur.jpg',
    },
    {
      title: 'Semestre 2 - Programmation : Jeu Vidéo',
      description:
        "Création d’un jeu 2D type Mario en C avec la librairie Allegro. Gestion des collisions et animations.",
      tags: ['Programmation C', 'Allegro'],
      image: '/images/jeu-video.jpg',
    },
    {
      title: "Semestre 2 - Électronique : Piano Électronique",
      description:
        "Réalisation d’un piano électronique à base d’AOP générant des fréquences sonores pour chaque touche.",
      tags: ['C++', 'Circuit design'],
      image: '/images/piano.jpg',
    },
    {
      title: 'Semestre 1 - Programmation : Labyrinthe Dynamique',
      description:
        "Jeu de labyrinthe interactif en C avec gestion multi-joueurs et dalles rotatives.",
      tags: ['Programmation C', 'Logique'],
      image: '/images/labyrinthe.jpg',
    },
    {
      title: 'Semestre 1 - Électronique : Cardiofréquencemètre',
      description:
        "Cardiofréquencemètre embarqué sur Arduino affichant le BPM en temps réel.",
      tags: ['Programmation embarquée', 'C++'],
      image: '/images/cardio.jpg',
    },
    {
      title: 'ECE Cup',
      description:
        "Robot autonome en Python : suivi de ligne, détection de formes et reconnaissance de couleurs.",
      tags: ['Python', 'Système embarqué'],
      image: '/images/robot.jpg',
    },
  ];

  // Flèches du carrousel
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center transition-colors duration-500">

      {/* 🔷 NAVBAR */}
      <nav className="w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 z-50 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Liens à gauche */}
          <ul className="flex items-center space-x-6">
            <li><a href="#cv" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">CV</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Projets</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
          </ul>

          {/* Nom centré */}
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 absolute left-1/2 transform -translate-x-1/2">
            Rayan GAAD
          </h1>

          {/* Toggle droite */}
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* 🏠 SECTION ACCUEIL */}
      <section className="flex flex-col items-center justify-center flex-1 text-center pt-32 px-4">
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

      {/* 📄 SECTION CV */}
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

      {/* 🚀 SECTION PROJETS */}
<section id="projects" className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-6 text-center transition-colors duration-500">
  <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12">Mes Projets</h2>

  <div className="relative w-full max-w-6xl mx-auto">
    {/* FLECHES */}
    <button
      onClick={() => scroll('left')}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white dark:bg-blue-500 rounded-full p-3 shadow-md hover:scale-110 transition-transform z-10"
    >
      ◀
    </button>
    <button
      onClick={() => scroll('right')}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white dark:bg-blue-500 rounded-full p-3 shadow-md hover:scale-110 transition-transform z-10"
    >
      ▶
    </button>

    {/* CAROUSEL */}
    <div
      ref={carouselRef}
      className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scroll-smooth px-10 scrollbar-hide"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="min-w-[320px] md:min-w-[380px] bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 snap-center flex-shrink-0 hover:-translate-y-1"
        >
          {/* Image */}
          {/* Image plus grande et mieux centrée */}
        {/* Image carrée avec ratio harmonieux */}
<div className="flex justify-center items-center w-full">
  <div className="w-80 h-80 md:h-80 mb-2 overflow-hidden rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>




          {/* Contenu */}
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{project.description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{project.tags.join(', ')}</p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            Voir le projet →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

        

      {/* 📞 SECTION CONTACT */}
      <section id="contact" className="w-full bg-white dark:bg-gray-800 py-12 text-center transition-colors duration-500">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">Tu peux me contacter à tout moment sur :</p>
        <a
          href="mailto:rayan.gaad@edu.ece.fr"
          className="block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
        >
          rayan.gaad@edu.ece.fr
        </a>
      </section>

      {/* ⚡ FOOTER */}
      <footer className="w-full py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © 2025 – Créé par <span className="font-semibold text-blue-600 dark:text-blue-400">Rayan GAAD</span>
      </footer>
    </main>
  );
}
