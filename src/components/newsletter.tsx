'use client';

export const Newsletter = () => {
  return (
    <section id="newsletter" className="py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-bebas tracking-wide">Únete al fuego de Julius C</h2>
        <p className="text-gray-400 mb-8">
          Recibe lanzamientos exclusivos, fechas de tour y contenido antes que nadie.
        </p>

        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full focus:outline-none focus:border-neon-green transition-colors text-white"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse-slow hover:bg-neon-green hover:text-black font-bebas tracking-wider text-lg"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
};
