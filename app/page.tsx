export default function Home() {
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
    </main>
  );
}
