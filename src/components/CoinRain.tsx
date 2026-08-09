"use client";

import { useCallback, useEffect, useState } from "react";

interface Ember {
  id: number;
  left: number; // persen horizontal
  scale: number;
  drift: number; // sway horizontal
  life: number;
}

/**
 * MEGA KOIN RAIN — emblem $CRA jatuh ngikutin scroll gesture.
 * Setiap scroll turun, spawn ember di area sekitar jari, jatuh terus,
 * lalu fade out. Chaos visual.
 */
export default function CoinRain() {
  const [embers, setEmbers] = useState<Ember[]>([]);

  const spawn = useCallback((clientY: number, clientX: number) => {
    const left = Math.max(2, Math.min(96, (clientX / window.innerWidth) * 100 + (Math.random() * 24 - 12)));
    const id = Date.now() + Math.random();
    const ember: Ember = {
      id,
      left,
      scale: 0.6 + Math.random() * 0.9,
      drift: (Math.random() - 0.5) * 60,
      life: 0,
    };
    setEmbers((prev) => [...prev.slice(-40), ember]); // batasi count, buang yang lama
    // cleanup setelah animasi selesai
    setTimeout(() => {
      setEmbers((prev) => prev.filter((e) => e.id !== id));
    }, 2200);
  }, []);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const now = Date.now();
      // max ~8 ember per detik biar gak overload
      if (now - last < 130) return;
      last = now;
      const sy = window.scrollY;
      spawn(sy + window.innerHeight * 0.2 + Math.random() * 40, window.innerWidth * 0.5 + (Math.random() - 0.5) * 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [spawn]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {embers.map((e) => (
        <span
          key={e.id}
          className="font-mono absolute font-bold text-[#be9d66]"
          style={{
            left: `${e.left}%`,
            top: "0px",
            animation: `coinFall 2.2s ease-in forwards`,
            fontSize: `${14 * e.scale}px`,
            textShadow: "0 0 12px rgba(190,157,102,0.5)",
            ["--drift" as string]: `${e.drift}px`,
            opacity: 0.9,
          }}
        >
          $
        </span>
      ))}
    </div>
  );
}
