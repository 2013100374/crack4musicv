'use client';

import { Facebook, Instagram, Music } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm">
            © 2025 Crack4Music Records · Ixtapaluca, Edo. Mex.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-neon-green transition-colors">Inicio</a>
          <a href="#timeline" className="hover:text-neon-green transition-colors">Timeline</a>
          <a href="#contact" className="hover:text-neon-green transition-colors">Contacto</a>
          <a href="#" className="hover:text-neon-green transition-colors">Política de privacidad</a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.tiktok.com/@juliuscoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green transition-colors"
            aria-label="TikTok"
          >
            <Music className="w-5 h-5" />
          </a>
          <a
            href="https://web.facebook.com/cesar.amador.283891/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-neon-green transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
