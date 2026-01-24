'use client';

import { Music, Mic2, Users, Disc } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Colaboraciones Explosivas',
    description: 'Juntando a los duros del género para crear himnos que rompen la calle.',
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Reggaetón y Trap Puro',
    description: 'Sonido auténtico, sin censura y con la esencia del barrio.',
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: 'Movimiento Ixtapaluca',
    description: 'Poniendo el Estado de México en el mapa mundial del género urbano.',
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: 'Próximos Lanzamientos',
    description: 'Música nueva cocinándose en el estudio. Stay tuned.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-black text-white relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase font-bebas">
            Crack4Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-red">Records</span>
          </h2>
          <p className="text-xl text-gray-400">El sello del perreo mexa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-zinc-900/50 border border-white/10 rounded-2xl hover:border-neon-green/50 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]">
              <div className="mb-6 text-neon-green group-hover:text-neon-red transition-colors group-hover:scale-110 transform duration-300 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 font-bebas tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
