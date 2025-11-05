'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Charger le thème sauvegardé ou détecter le thème système
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    setMounted(true);
  }, []);

  // Basculer le mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md px-3 py-2 text-sm font-medium 
                 bg-gray-200 hover:bg-gray-300 
                 dark:bg-gray-700 dark:hover:bg-gray-600 
                 transition-all duration-500 ease-in-out"
      aria-label="Basculer le mode clair/sombre"
    >
      {theme === 'dark' ? '☀️ Mode clair' : '🌙 Mode nuit'}
    </button>
  );
}
