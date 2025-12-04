'use client';

import { useEffect, useRef } from 'react';

const timelineEvents = [
  {
    year: '2025',
    title: 'El Rey del Perreo',
    description: 'Consolidación como el artista más influyente de Ixtapaluca, rompiendo charts locales.',
  },
  {
    year: '2023',
    title: 'Crack4Music Records',
    description: 'Fundación del sello discográfico para impulsar el talento del barrio.',
  },
  {
    year: '2020',
    title: 'Primeros Hits',
    description: 'Lanzamiento de sencillos que definieron el sonido del trap mexa en la zona oriente.',
  },
  {
    year: '1995',
    title: 'El Origen',
    description: 'Nace la leyenda en Ixtapaluca, Estado de México. El flow venía en la sangre.',
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center tracking-tighter font-bebas">
          Mi Timeline: <span className="text-neon-green">De Ixtapaluca al Spotlight</span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-green to-transparent rounded-full" />
          {timelineEvents.map((event, index) => (
            <div key={index} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12" />
              <div className="z-20">
                <div className="flex items-center justify-center w-8 h-8 bg-neon-green rounded-full ring-4 ring-zinc-900 shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>
              </div>
              <div className={`w-5/12 p-6 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-neon-green/50 transition-colors duration-300 group ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-3xl font-bold text-neon-green block mb-2 font-bebas">{event.year}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
