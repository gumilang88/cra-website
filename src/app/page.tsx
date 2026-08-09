import Image from "next/image";
import Reveal from "@/components/Reveal";
import ChaosControls from "@/components/ChaosControls";
import Gauge from "@/components/Gauge";
import Runaway from "@/components/Runaway";
import { BatteryLow, Pill, PersonStanding, TrendingDown, ShoppingCart, Bomb, DollarSign, Car } from "lucide-react";

const navLinks = [
  { label: "Buy", href: "https://radardex.pro/#0xbd35d29e40b74a5934dfdec307036825a16e77e7", external: true },
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
];

const phases = [
  {
    title: "Phase 1 — Launch",
    items: ["Create X Account", "Create Website", "Create Meme", "Release First Meme"],
  },
  {
    title: "Phase 2 — Chaos",
    items: ["Create Chaos", "Expand Chaos", "More Memes", "More Holders", "More Chaos"],
  },
  {
    title: "Phase 3 — Takeoff",
    items: ["Community Growth", "Accidental Success", "More Visibility", "More Believers", "Chaos Achieved"],
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-[101px] items-center justify-between border-b border-white/10 bg-[#121212]/90 px-8 backdrop-blur">
      <a href="#top" className="flex items-center gap-2">
        <Image
          src="/images/cra-logo.png"
          alt="CRA logo"
          width={48}
          height={48}
          className="h-11 w-11 object-contain"
        />
        <span className="font-heading text-2xl leading-none text-white">CRA<span className="text-white/60">MEME</span></span>
      </a>
      <nav className="flex items-center gap-6">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} className="nav-link text-sm text-white/80 transition hover:text-white"
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative w-full">
      <section
        id="top"
        className="relative mx-auto flex w-full max-w-[900px] flex-col items-center overflow-visible px-6 pt-14"
      >
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/images/cra-logo.png"
            alt="CRA MEME logo"
            width={794}
            height={841}
            priority
            className="hero-logo anim-fade-up mb-5 h-auto w-36 md:w-44"
          />
          <h1
            className="anim-fade-up delay-1 mb-7 text-center font-heading text-6xl leading-none text-white md:text-[88px]"
            style={{ fontWeight: 300 }}
          >
            CRA MEME
          </h1>

          <p className="anim-fade-up delay-2 mb-9 w-full text-center font-serif text-xl leading-8 text-white/70 md:text-2xl">
            The most confused token on ARC. Somehow still winning
          </p>

          <a
            href="#about"
            className="btn-shimmer btn-pulse anim-fade-up delay-3 rounded-[4px] border border-[#be9d66]/60 bg-[#be9d66]/15 px-[26px] py-2.5 text-[15px] font-medium text-white transition hover:border-[#be9d66] hover:bg-[#be9d66]/25"
          >
            Add $CRA to wallet
          </a>

          {/* Buy Now Card — RadarDex */}
          <div className="buy-card anim-fade-up delay-4 mt-8 w-full max-w-[420px] rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 overflow-hidden">
                <Image
                  src="/images/cra-logo.png"
                  alt="CRA"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-base font-semibold leading-tight text-white">Buy $CRA</div>
                <div className="font-sans text-[12px] text-white/40">on RadarDex</div>
              </div>
            </div>

            {/* Token address */}
            <div className="mb-5 flex items-center gap-2 rounded-lg bg-black/25 px-3 py-2.5 border border-white/5">
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-white/40">CA</span>
              <code className="flex-1 truncate font-mono text-[11px] text-white/50 select-all">0xbd35d29e40b74a5934dfdec307036825a16e77e7</code>
              <span
                className="shrink-0 rounded p-1 text-white/30"
                title="Select to copy"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </span>
            </div>

            {/* Buy button */}
            <a
              href="https://radardex.pro/#0xbd35d29e40b74a5934dfdec307036825a16e77e7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-sans text-sm font-semibold text-black transition hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              Buy Now on RadarDex
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutRow() {
  return (
    <section id="about" className="mx-auto mt-[180px] w-full max-w-[900px] px-6">
      <div className="grid grid-cols-1 items-center [@media(min-width:900px)]:grid-cols-2">
        <Reveal variant="left">
        <div className="flex items-center justify-center px-4 py-6">
          <Runaway>
            <div className="about-logo-rotate">
              <Image
                src="/images/cra-character-nobg.png"
                alt="CRA MEME"
                width={500}
                height={515}
                priority
                className="hero-logo h-auto w-64 md:w-80"
              />
            </div>
          </Runaway>
        </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
        <div className="flex flex-col justify-center px-4 py-6">
          <h2 className="font-serif text-[44px] leading-normal text-white">About CRA</h2>
          <p className="mt-4 font-serif text-base leading-6 text-white/70">
            CRA began the same way most great ideas begin: With absolutely no plan.
            What started as a joke quickly turned into a community of meme enjoyers, builders, traders, dreamers, and people who definitely said, “I’m only buying a little.”
            Since then, CRA has achieved many impressive milestones, including:
            • Posting memes at unhealthy hours
            • Turning “just one more buy” into a lifestyle
            • Surviving market mood swings
            • Convincing people that this is somehow a good idea
          </p>
          <Image
            src="/images/yeschatballoon.svg"
            alt=""
            width={250}
            height={115}
            className="mt-6 w-56"
          />
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function WeirdStats() {
  const stats = [
    { num: "BUY", label: "CRA", Icon: ShoppingCart },
    { num: "WAIT", label: "CHAOS", Icon: Bomb },
    { num: "YOU", label: "RICH", Icon: DollarSign },
    { num: "REPEAT", label: "AGAIN", Icon: TrendingDown },
  ];
  return (
    <section className="mx-auto mt-[100px] w-full max-w-[900px] px-6">
      <Reveal>
        <div className="flex flex-wrap items-stretch justify-center gap-3 [@media(min-width:700px)]:grid [@media(min-width:700px)]:grid-cols-4">
          {stats.map((s, i) => (
            <Runaway key={s.label} className="chaos-wander" style={{ ["--i" as string]: String(i) }}>
              <div className="flex min-w-[180px] flex-1 basis-[160px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                <span className="shrink-0 text-[#e8c98e]">
                  <s.Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div className="flex flex-row items-baseline gap-2">
                  <div className="font-serif text-xl font-bold leading-none text-white">{s.num}</div>
                  <div className="font-mono text-[14px] font-extrabold uppercase tracking-[0.1em] text-white/80">{s.label}</div>
                </div>
              </div>
            </Runaway>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const tokenAllocation = [
  {
    pct: "50%",
    title: "People Who Said \u201cJust $10\u201d",
    sub: "Now heavily invested.",
  },
  {
    pct: "20%",
    title: "Professional Meme Analysts",
    sub: "Experts in absolutely nothing.",
  },
  {
    pct: "15%",
    title: "FOMO Department",
    sub: "Always hiring.",
  },
  {
    pct: "10%",
    title: "Wen Moon Research Center",
    sub: "No results so far.",
  },
  {
    pct: "4%",
    title: "Community Therapy Fund",
    sub: "Market conditions may apply.",
  },
  {
    pct: "1%",
    title: "Locked Until Common Sense Returns",
    sub: "Potentially forever.",
  },
];

function Tokenomics() {
  return (
    <section id="tokenomics" className="mx-auto mt-[180px] w-full max-w-[900px] px-6">
      <Reveal>
        <h2 className="mb-8 font-serif text-[44px] leading-normal text-white">Tokenomics</h2>
        <div className="flex flex-col gap-3">
          {tokenAllocation.map((row, i) => (
            <div
              key={row.title}
              className="card-lift flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3"
              style={{ transitionDelay: `${i * 60}ms`, ["--i" as string]: String(i) }}
            >
              <div className="min-w-0">
                <div className="font-serif text-[15px] font-medium leading-tight text-white">
                  {row.title}
                </div>
                <div className="mt-0.5 font-serif text-[12px] text-white/50">{row.sub}</div>
              </div>
              <Gauge pct={row.pct} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto mt-[180px] w-full max-w-[900px] px-6">
      <Reveal>
      <h2 className="mb-8 font-serif text-[44px] leading-normal text-white">Roadmap</h2>
      <div className="grid grid-cols-1 gap-4 [@media(min-width:900px)]:grid-cols-3">
        {phases.map((p, i) => (
          <div
            key={p.title}
            className="card-lift rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-7"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <h3 className="text-xl font-medium leading-8 text-white">{p.title}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {p.items.map((item) => (
                <li key={item} className="font-serif text-base leading-6 text-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-4 border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6">
        <p className="w-full text-center font-serif text-sm leading-6 text-white/40">
          $CRA is a meme coin with no intrinsic value or expectation of financial
          return. There is no formal team or roadmap. the coin is completely
          useless and for entertainment purposes only.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://x.com/cra_meme" target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-white/30">CRAToken.org</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutRow />
        <WeirdStats />
        <ChaosControls />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
