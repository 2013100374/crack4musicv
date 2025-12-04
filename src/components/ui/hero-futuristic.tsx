'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';
import { WebGPURenderer } from 'three/webgpu';
// import ThreePostProcessing from 'three/examples/jsm/renderers/common/PostProcessing.js';
import { abs, blendScreen, float, mod, mx_cell_noise_float, oneMinus, smoothstep, texture, uniform, uv, vec2, vec3, pass, mix, add } from 'three/tsl';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

// extend(THREE as any); // extend is not needed for THREE namespace usually, but maybe for specific nodes if they were custom. 
// However, the user code had `extend(THREE as any);` and `import * as THREE from 'three/webgpu';`
// The user environment might not have 'three/webgpu' if they are on standard three.js, but let's try to follow the snippet.
// Wait, standard 'three' package might not export 'three/webgpu' directly in all versions or it might be experimental.
// The user's package.json has "three": "^0.181.2". This is very new. WebGPU might be available.
// But 'three/tsl' imports suggest TSL (Three Shading Language) usage.

// Let's try to stick to the provided code as much as possible, but fix imports if necessary.
// The user code imports from 'three/webgpu'.
// If that fails, I might need to adjust. For now I will assume it works or use standard 'three' if 'three/webgpu' is not found.
// Actually, 'three/webgpu' is the entry point for WebGPU renderer in newer Three.js versions.

 

// Re-implementing the user's code.

const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  // Post-processing temporarily disabled due to import issues
  return null;
};

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Показываем изображение после загрузки текстур
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;

    const flow = oneMinus(smoothstep(0, 0.02, abs(depth.sub(uProgress))));

    const mask = dot.mul(flow).mul(vec3(10, 0, 0));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicMaterial();
    (material as any).colorNode = final;
    material.transparent = true;
    material.opacity = 0;

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
    // Плавное появление
    if (meshRef.current && 'material' in meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(
          mat.opacity,
          visible ? 1 : 0,
          0.07
        );
      }
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  const scaleFactor = 0.40;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

export const HeroFuturistic = () => {
  const titleWords = 'JULIUS C'.split(' ');
  const subtitle = 'EL REY DEL PERREO DESDE IXTAPALUCA';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    // Только на клиенте: генерируем случайные задержки для глитча
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-svh relative w-full overflow-hidden bg-black">
      <div className="h-svh uppercase items-center w-full absolute z-10 pointer-events-none px-4 md:px-10 flex justify-center flex-col text-center">
        <div className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tighter">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white justify-center">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'animate-fade-in' : 'opacity-0'}
                style={{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s`, transition: 'opacity 0.5s ease-out' }}
              >
                {word}
              </div>
            ))}
          </div>
            <a 
                href="https://www.tiktok.com/@juliuscoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]"
            >
                Ver en TikTok
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <span className="text-white/50 text-sm">Scroll to explore</span>
      </div>

      <Canvas
        flat
        className="absolute inset-0 z-0"
        gl={async (props) => {
          const renderer = new WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
        <PostProcessing fullScreenEffect={true} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;
