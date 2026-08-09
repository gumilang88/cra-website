"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import Runaway from "@/components/Runaway";

/**
 * CHAOS MODE — widget saklar di tengah (antara About & Tokenomics).
 * Off: meter hijau "CALM". On: naik ke 99% "FULL CHAOS" + mode chaos aktif.
 */
export default function ChaosControls() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("chaos-mode", on);
  }, [on]);

  const level = on ? 99 : 8;
  const label = on ? "FULL CHAOS" : "CALM";
  const color = on ? "#ff5255" : "#34d399";

  return (
    <section className="mx-auto mt-[140px] flex w-full max-w-[900px] justify-center px-6">
      <Reveal className="flex w-full justify-center">
        <div className="flex items-center justify-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
          {/* label + meter rapet */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-semibold" style={{ color: on ? "#ff7a7e" : "#34d399" }}>
              {label}
            </span>
            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${level}%`,
                  background: `linear-gradient(90deg, ${on ? "#ff7a5f" : "#1d8f5a"}, ${color})`,
                  boxShadow: `0 0 10px ${color}`,
                }}
              />
            </div>
          </div>

          {/* tombol saklar on/off (lari dari kursor saat chaos ON) */}
          <Runaway>
            <button
              type="button"
              onClick={() => setOn((v) => !v)}
              aria-pressed={on}
              aria-label="Toggle chaos mode"
              className={`group relative h-[30px] w-[56px] shrink-0 cursor-pointer rounded-full border transition-all duration-300 ${
                on
                  ? "chaos-btn-on border-[#ff5255]/60 bg-[#ff5255]/25"
                  : "border-white/15 bg-white/5"
              }`}
            >
              {/* knob */}
              <span
                className={`absolute top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full shadow-md transition-all duration-300 ${
                  on ? "right-[3px] bg-[#ff5255]" : "left-[3px] bg-[#9aa3b2]"
                }`}
              />
            </button>
          </Runaway>
        </div>
      </Reveal>
    </section>
  );
}