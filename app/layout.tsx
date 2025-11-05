import "./globals.css"; // ⚠️ Garde-le tout en haut
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Rayan GAAD",
  description: "Étudiant en cybersécurité à l’ECE Paris",
  icons: {
    icon: "/favicon.ico", // ✅ Le favicon doit être dans public/
  },
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
