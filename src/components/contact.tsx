'use client';

import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Mensaje enviado (simulación)');
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tighter font-bebas">
            Bookings & <span className="text-neon-green">Collabs</span>
          </h2>
          <p className="text-center text-gray-400 mb-8">
            O escríbenos directo a <span className="text-neon-green">contacto@crack4music.digital</span>
          </p>
        </div>

        <div className="bg-black/50 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-gray-500"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-gray-500"
                  placeholder="contacto@crack4music.digital"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Detalles de la propuesta..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-neon-green to-neon-red text-black font-bold rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(57,255,20,0.4)] uppercase tracking-wider font-bebas text-xl"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
