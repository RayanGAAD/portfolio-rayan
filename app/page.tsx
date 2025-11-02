export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Rayan GAAD</h1>
      <p className="text-lg text-gray-700 text-center max-w-lg">
        Étudiant en cybersécurité à l’ECE Paris.<br />
        Passionné par la réponse aux incidents, l’automatisation et la sécurité des systèmes.
      </p>
      <a
        href="mailto:rayan.gaad@ece.fr"
        className="mt-6 text-blue-600 hover:underline"
      >
        Me contacter 📩
      </a>
    </main>
  );
}
