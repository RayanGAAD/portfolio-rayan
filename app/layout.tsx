import "./globals.css"; // ⚠️ C’est obligatoire et doit être tout en haut !

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Rayan GAAD",
  description: "Étudiant en cybersécurité à l’ECE Paris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
