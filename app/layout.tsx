import "./globals.css";
import type { Metadata } from "next";
import CyberBackground from "./CyberBackground"; // 👈 ajoute cette ligne

export const metadata: Metadata = {
  title: "Portfolio Rayan GAAD",
  description: "Étudiant en cybersécurité à l’ECE Paris",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="relative bg-black text-white">
        {/* 🌌 Fond animé cyber */}
        <CyberBackground />

        {/* 🧱 Contenu du site au-dessus */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
